import { type QuoteRequest, type InsertQuoteRequest, type FreeTerminalLead, type InsertFreeTerminalLead, type InterestRegistration, type InsertInterestRegistration, type FundingApplication, type InsertFundingApplication, quoteRequests, freeTerminalLeads, interestRegistrations, fundingApplications } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  createQuoteRequest(quoteRequest: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequest(id: string): Promise<QuoteRequest | undefined>;
  getAllQuoteRequests(): Promise<QuoteRequest[]>;
  
  createFreeTerminalLead(lead: InsertFreeTerminalLead): Promise<FreeTerminalLead>;
  getAllFreeTerminalLeads(): Promise<FreeTerminalLead[]>;
  
  createInterestRegistration(registration: InsertInterestRegistration): Promise<InterestRegistration>;
  updateInterestRegistration(id: string, data: Partial<InsertInterestRegistration>): Promise<InterestRegistration | undefined>;
  getInterestRegistrationByEmail(email: string): Promise<InterestRegistration | undefined>;
  getAllInterestRegistrations(): Promise<InterestRegistration[]>;
  
  createFundingApplication(application: InsertFundingApplication): Promise<FundingApplication>;
  getAllFundingApplications(): Promise<FundingApplication[]>;
}

export class DbStorage implements IStorage {
  async createQuoteRequest(insertQuoteRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const [quoteRequest] = await db.insert(quoteRequests).values({
      ...insertQuoteRequest,
      id,
    }).returning();
    return quoteRequest;
  }

  async getQuoteRequest(id: string): Promise<QuoteRequest | undefined> {
    const results = await db.select().from(quoteRequests).where(eq(quoteRequests.id, id)).limit(1);
    return results[0];
  }

  async getAllQuoteRequests(): Promise<QuoteRequest[]> {
    return await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  async createFreeTerminalLead(insertLead: InsertFreeTerminalLead): Promise<FreeTerminalLead> {
    const id = randomUUID();
    const [lead] = await db.insert(freeTerminalLeads).values({
      ...insertLead,
      id,
    }).returning();
    return lead;
  }

  async getAllFreeTerminalLeads(): Promise<FreeTerminalLead[]> {
    return await db.select().from(freeTerminalLeads).orderBy(desc(freeTerminalLeads.createdAt));
  }

  async createInterestRegistration(insertRegistration: InsertInterestRegistration): Promise<InterestRegistration> {
    const id = randomUUID();
    const [registration] = await db.insert(interestRegistrations).values({
      ...insertRegistration,
      id,
    }).returning();
    return registration;
  }

  async updateInterestRegistration(id: string, data: Partial<InsertInterestRegistration>): Promise<InterestRegistration | undefined> {
    const [registration] = await db.update(interestRegistrations)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(interestRegistrations.id, id))
      .returning();
    return registration;
  }

  async getInterestRegistrationByEmail(email: string): Promise<InterestRegistration | undefined> {
    const results = await db.select().from(interestRegistrations).where(eq(interestRegistrations.email, email)).limit(1);
    return results[0];
  }

  async getAllInterestRegistrations(): Promise<InterestRegistration[]> {
    return await db.select().from(interestRegistrations).orderBy(desc(interestRegistrations.createdAt));
  }

  async createFundingApplication(insertApplication: InsertFundingApplication): Promise<FundingApplication> {
    const id = randomUUID();
    const [application] = await db.insert(fundingApplications).values({
      ...insertApplication,
      id,
    }).returning();
    return application;
  }

  async getAllFundingApplications(): Promise<FundingApplication[]> {
    return await db.select().from(fundingApplications).orderBy(desc(fundingApplications.createdAt));
  }
}

export const storage = new DbStorage();
