import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey(),
  businessName: text("business_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  businessType: text("business_type").notNull(),
  monthlyVolume: text("monthly_volume"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;

export const freeTerminalLeads = pgTable("free_terminal_leads", {
  id: varchar("id").primaryKey(),
  businessName: text("business_name").notNull(),
  mobile: text("mobile").notNull(),
  currentProvider: text("current_provider"),
  monthlyFees: text("monthly_fees"),
  email: text("email"),
  industryType: text("industry_type"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFreeTerminalLeadSchema = createInsertSchema(freeTerminalLeads).omit({
  id: true,
  createdAt: true,
});

export type InsertFreeTerminalLead = z.infer<typeof insertFreeTerminalLeadSchema>;
export type FreeTerminalLead = typeof freeTerminalLeads.$inferSelect;

export const interestRegistrations = pgTable("interest_registrations", {
  id: varchar("id").primaryKey(),
  email: text("email").notNull(),
  businessName: text("business_name"),
  mobile: text("mobile"),
  completionStep: text("completion_step").notNull().default("email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertInterestRegistrationSchema = createInsertSchema(interestRegistrations).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertInterestRegistration = z.infer<typeof insertInterestRegistrationSchema>;
export type InterestRegistration = typeof interestRegistrations.$inferSelect;
