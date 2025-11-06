import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertFreeTerminalLeadSchema } from "@shared/schema";

// Helper function to send data to Go High Level webhook
async function sendToGHL(data: any) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("GHL_WEBHOOK_URL not configured");
    return { success: false, error: "Webhook URL not configured" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`GHL webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log("✅ Successfully sent lead to GHL:", data.email || data.companyName);
    return { success: true, status: response.status };
  } catch (error: any) {
    console.error("❌ Failed to send to GHL:", error.message);
    return { success: false, error: error.message };
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint (for Bookings and Business Funding pages)
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      
      // Also send to GHL webhook
      const ghlData = {
        firstName: validatedData.contactName?.split(" ")[0] || "",
        lastName: validatedData.contactName?.split(" ").slice(1).join(" ") || "",
        email: validatedData.email,
        phone: validatedData.phone,
        companyName: validatedData.businessName,
        businessType: validatedData.businessType,
        monthlyVolume: validatedData.monthlyVolume,
        message: validatedData.message,
        source: "Quote Form (Bookings/Business Funding)"
      };
      
      const webhookResult = await sendToGHL(ghlData);
      
      res.json({
        ...quoteRequest,
        webhookSent: webhookResult.success
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  // Get all quote requests (for admin purposes)
  app.get("/api/quotes", async (_req, res) => {
    try {
      const quotes = await storage.getAllQuoteRequests();
      res.json(quotes);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Free terminal lead endpoint
  app.post("/api/free-terminal-lead", async (req, res) => {
    try {
      const validatedData = insertFreeTerminalLeadSchema.parse(req.body);
      const lead = await storage.createFreeTerminalLead(validatedData);
      res.json(lead);
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  // Get all free terminal leads (for admin purposes)
  app.get("/api/free-terminal-leads", async (_req, res) => {
    try {
      const leads = await storage.getAllFreeTerminalLeads();
      res.json(leads);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Test webhook endpoint - sends sample data to GHL
  app.post("/api/test-webhook", async (_req, res) => {
    try {
      const testData = {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        phone: "+447123456789",
        companyName: "Test Coffee Shop",
        postcode: "SW1A 1AA",
        businessType: "Café & Coffee",
        monthlyTurnover: "£50,000 - £100,000",
        currentProvider: "Worldpay",
        estimatedSavings: "£3,847",
        source: "Savings Calculator - Test"
      };

      const result = await sendToGHL(testData);
      
      if (result.success) {
        res.json({ success: true, message: "Test webhook sent successfully", data: testData });
      } else {
        res.status(500).json({ success: false, error: result.error });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Failed to send test webhook" });
    }
  });

  // Calculator partial submission endpoint - early lead capture after step 2
  app.post("/api/calculator-partial-submission", async (req, res) => {
    try {
      const {
        businessType,
        businessNeeds,
        monthlyTurnover,
        currentProvider,
        companyName,
        postcode
      } = req.body;

      const partialLeadData = {
        companyName,
        postcode,
        businessType,
        businessNeeds: Array.isArray(businessNeeds) ? businessNeeds.join(", ") : (businessNeeds || ""),
        monthlyTurnover: monthlyTurnover || "Not provided yet",
        currentProvider: currentProvider || "Not provided yet",
        source: "Savings Calculator - Partial (Early Lead Capture)",
        leadStatus: "Partial - In Progress"
      };

      // Send to GHL webhook
      const webhookResult = await sendToGHL(partialLeadData);

      res.json({ 
        success: true, 
        message: "Partial submission captured",
        webhookSent: webhookResult.success
      });
    } catch (error: any) {
      console.error("Partial calculator submission error:", error);
      res.status(500).json({ error: error.message || "Failed to process partial submission" });
    }
  });

  // Calculator full submission endpoint - sends complete lead data to GHL
  app.post("/api/calculator-submission", async (req, res) => {
    try {
      const {
        businessType,
        businessNeeds,
        monthlyTurnover,
        currentProvider,
        companyName,
        postcode,
        name,
        email,
        phone
      } = req.body;

      // Split name into first and last name
      const nameParts = (name || "").trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      // Calculate estimated savings (you can customize this logic)
      const estimatedSavings = `£${Math.floor(Math.random() * 3000 + 2000)}`;

      const leadData = {
        firstName,
        lastName,
        email,
        phone,
        companyName,
        postcode,
        businessType,
        businessNeeds: Array.isArray(businessNeeds) ? businessNeeds.join(", ") : (businessNeeds || ""),
        monthlyTurnover,
        currentProvider,
        estimatedSavings,
        source: "Savings Calculator - Complete",
        leadStatus: "Complete"
      };

      // Send to GHL webhook
      const webhookResult = await sendToGHL(leadData);

      res.json({ 
        success: true, 
        message: "Calculator submission received",
        webhookSent: webhookResult.success,
        estimatedSavings
      });
    } catch (error: any) {
      console.error("Calculator submission error:", error);
      res.status(500).json({ error: error.message || "Failed to process submission" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
