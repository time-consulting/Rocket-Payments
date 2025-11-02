import { type QuoteRequest, type InsertQuoteRequest, type FreeTerminalLead, type InsertFreeTerminalLead } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  
  createFreeTerminalLead(lead: InsertFreeTerminalLead): Promise<FreeTerminalLead>;
  getAllFreeTerminalLeads(): Promise<FreeTerminalLead[]>;
}

export class MemStorage implements IStorage {
  private quoteRequests: Map<string, QuoteRequest>;
  private freeTerminalLeads: Map<string, FreeTerminalLead>;

  constructor() {
    this.quoteRequests = new Map();
    this.freeTerminalLeads = new Map();
  }

  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const quoteRequest: QuoteRequest = {
      ...insertQuoteRequest,
      message: insertQuoteRequest.message ?? null,
      monthlyVolume: insertQuoteRequest.monthlyVolume ?? null,
      id,
      createdAt: new Date(),
    };
    this.quoteRequests.set(id, quoteRequest);
    return quoteRequest;
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    return this.quoteRequests.get(id);
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }

  async createFreeTerminalLead(insertLead: InsertFreeTerminalLead): Promise<FreeTerminalLead> {
    const id = randomUUID();
    const lead: FreeTerminalLead = {
      ...insertLead,
      currentProvider: insertLead.currentProvider ?? null,
      monthlyFees: insertLead.monthlyFees ?? null,
      email: insertLead.email ?? null,
      industryType: insertLead.industryType ?? null,
      id,
      createdAt: new Date(),
    };
    this.freeTerminalLeads.set(id, lead);
    return lead;
  }

  async getAllFreeTerminalLeads(): Promise<FreeTerminalLead[]> {
    return Array.from(this.freeTerminalLeads.values());
  }
}

export const storage = new MemStorage();
