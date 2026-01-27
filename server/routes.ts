import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertFreeTerminalLeadSchema, insertInterestRegistrationSchema, insertFundingApplicationSchema } from "@shared/schema";
import { z } from "zod";

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

// Helper function to send funding applications to separate GHL webhook
async function sendFundingToGHL(data: any) {
  const webhookUrl = process.env.GHL_FUNDING_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error("GHL_FUNDING_WEBHOOK_URL not configured");
    return { success: false, error: "Funding webhook URL not configured" };
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
      throw new Error(`GHL funding webhook failed: ${response.status} ${response.statusText}`);
    }

    console.log("✅ Successfully sent funding application to GHL:", data.email || data.tradingName);
    return { success: true, status: response.status };
  } catch (error: any) {
    console.error("❌ Failed to send funding to GHL:", error.message);
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
        source: "website",
        form_completed: "quote",
        product: "card machine",
        lead_action: "Quote request"
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
      
      // Send to GHL webhook
      const ghlData = {
        companyName: validatedData.businessName,
        phone: validatedData.mobile,
        email: validatedData.email || "",
        currentProvider: validatedData.currentProvider || "Not provided",
        monthlyFees: validatedData.monthlyFees || "Not provided",
        industryType: validatedData.industryType || "Not provided",
        source: "website",
        form_completed: "Free Terminal Offer",
        product: "card machine",
        lead_action: "Free terminal request",
        leadStatus: "Hot Lead - Free Terminal Claim"
      };
      
      const webhookResult = await sendToGHL(ghlData);
      
      res.json({
        ...lead,
        webhookSent: webhookResult.success
      });
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

  // Dojo Partner Offer lead endpoint
  app.post("/api/dojo-partner-lead", async (req, res) => {
    try {
      const validatedData = insertFreeTerminalLeadSchema.parse(req.body);
      const lead = await storage.createFreeTerminalLead(validatedData);
      
      // Send to GHL webhook with Dojo-specific identifiers
      const ghlData = {
        companyName: validatedData.businessName,
        phone: validatedData.mobile,
        email: validatedData.email || "",
        currentProvider: validatedData.currentProvider || "Not provided",
        monthlyFees: validatedData.monthlyFees || "Not provided",
        industryType: validatedData.industryType || "Not provided",
        source: "website",
        form_completed: "Dojo Partner Offer",
        product: "Dojo card machine",
        lead_action: "Dojo partnership claim",
        leadStatus: "Hot Lead - Dojo Partner Offer"
      };
      
      const webhookResult = await sendToGHL(ghlData);
      
      res.json({
        ...lead,
        webhookSent: webhookResult.success
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message || "Invalid request data" });
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
        source: "website",
        form_completed: "Savings Calculator (complete)",
        product: "card machine",
        lead_action: "Quote request"
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
        source: "website",
        form_completed: "Savings Calculator (partial)",
        product: "card machine",
        lead_action: "Quote request",
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
        source: "website",
        form_completed: "Savings Calculator (complete)",
        product: "card machine",
        lead_action: "Quote request",
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

  // Interest registration endpoint - supports partial completion
  // Only sends webhook when ALL data is complete (phone included)
  app.post("/api/register-interest", async (req, res) => {
    try {
      const { email, name, businessName, mobile, completionStep } = req.body;

      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }

      // Check if email already exists
      const existingRegistration = await storage.getInterestRegistrationByEmail(email);

      if (existingRegistration) {
        // Update existing registration with new fields
        const updated = await storage.updateInterestRegistration(existingRegistration.id, {
          name: name || existingRegistration.name,
          businessName: businessName || existingRegistration.businessName,
          mobile: mobile || existingRegistration.mobile,
          completionStep: completionStep || existingRegistration.completionStep,
        });

        // Only send to GHL when complete (has all data including phone)
        if (completionStep === "complete" && updated) {
          const nameParts = (updated.name || "").trim().split(" ");
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";
          
          const ghlData = {
            firstName,
            lastName,
            email: updated.email,
            phone: updated.mobile || "",
            companyName: updated.businessName || "",
            source: "website",
            form_completed: "Quick Interest Form",
            product: "card machine",
            lead_action: "Quote request",
            leadStatus: "Complete - Interest Registered"
          };
          
          await sendToGHL(ghlData);
        }

        return res.json({ 
          success: true, 
          registration: updated,
          isUpdate: true,
          webhookSent: completionStep === "complete"
        });
      }

      // Create new registration
      const registration = await storage.createInterestRegistration({
        email,
        name: name || null,
        businessName: businessName || null,
        mobile: mobile || null,
        completionStep: completionStep || "email",
      });

      // Only send to GHL when complete (has all data including phone)
      if (completionStep === "complete") {
        const nameParts = (name || "").trim().split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";
        
        const ghlData = {
          firstName,
          lastName,
          email,
          phone: mobile || "",
          companyName: businessName || "",
          source: "website",
          form_completed: "Quick Interest Form",
          product: "card machine",
          lead_action: "Quote request",
          leadStatus: "Complete - Interest Registered"
        };
        
        await sendToGHL(ghlData);
      }

      res.json({ 
        success: true, 
        registration,
        isUpdate: false,
        webhookSent: completionStep === "complete"
      });
    } catch (error: any) {
      console.error("Interest registration error:", error);
      res.status(500).json({ error: error.message || "Failed to register interest" });
    }
  });

  // Get all interest registrations (for admin purposes)
  app.get("/api/interest-registrations", async (_req, res) => {
    try {
      const registrations = await storage.getAllInterestRegistrations();
      res.json(registrations);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  // Funding application endpoint
  app.post("/api/funding-application", async (req, res) => {
    try {
      const validatedData = insertFundingApplicationSchema.parse(req.body);
      const application = await storage.createFundingApplication(validatedData);
      
      // Send to GHL webhook with funding-specific data
      const ghlData = {
        firstName: validatedData.directorFirstName,
        lastName: validatedData.directorLastName,
        email: validatedData.directorEmail,
        phone: validatedData.directorPhone,
        dateOfBirth: validatedData.directorDob,
        homeAddress: validatedData.directorAddress,
        companyName: validatedData.limitedCompanyName || validatedData.tradingName,
        tradingName: validatedData.tradingName,
        businessAddress: validatedData.businessAddress,
        isDojoCustomer: validatedData.isDojoCustomer,
        monthlyRevenue: validatedData.monthlyRevenue || "Not provided",
        fundingAmount: validatedData.fundingAmount || "Not provided",
        fundingPurpose: validatedData.fundingPurpose || "Not provided",
        shareholders: validatedData.shareholders || "[]",
        source: "website",
        form_completed: "Funding Application",
        product: "business funding",
        lead_action: "Application complete",
        leadStatus: "Hot Lead - Funding Application"
      };
      
      const webhookResult = await sendToGHL(ghlData);
      
      res.json({
        ...application,
        webhookSent: webhookResult.success
      });
    } catch (error: any) {
      console.error("Funding application error:", error);
      res.status(400).json({ error: error.message || "Invalid request data" });
    }
  });

  // Test funding webhook endpoint - sends sample funding application data to GHL
  app.post("/api/test-funding-webhook", async (_req, res) => {
    try {
      const testData = {
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarah.test@coffeehouse.com",
        phone: "07700900123",
        dateOfBirth: "1985-06-15",
        homeAddress: "123 High Street, Tunbridge Wells, Kent, TN1 2AB",
        companyName: "Sarah's Coffee House Ltd",
        tradingName: "Sarah's Coffee House",
        businessAddress: "45 The Pantiles, Tunbridge Wells, Kent, TN2 5TN",
        isDojoCustomer: "yes",
        monthlyRevenue: "25k-50k",
        fundingAmount: "£50,000",
        fundingPurpose: "Business Growth",
        shareholders: "[]",
        source: "website",
        form_completed: "Funding Application",
        product: "business funding",
        lead_action: "Application complete",
        leadStatus: "TEST - Hot Lead - Funding Application",
        testSubmission: true
      };

      const result = await sendToGHL(testData);

      if (result.success) {
        res.json({ success: true, message: "Test funding webhook sent successfully", data: testData });
      } else {
        res.status(500).json({ success: false, error: result.error, data: testData });
      }
    } catch (error: any) {
      console.error("Test funding webhook error:", error);
      res.status(500).json({ error: error.message || "Failed to send test funding webhook" });
    }
  });

  // Get all funding applications (for admin purposes)
  app.get("/api/funding-applications", async (_req, res) => {
    try {
      const applications = await storage.getAllFundingApplications();
      res.json(applications);
    } catch (error: any) {
      res.status(500).json({ error: error.message || "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
