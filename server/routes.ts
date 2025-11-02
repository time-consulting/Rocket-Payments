import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema, insertFreeTerminalLeadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Quote request endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const quoteRequest = await storage.createQuoteRequest(validatedData);
      res.json(quoteRequest);
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

  const httpServer = createServer(app);

  return httpServer;
}
