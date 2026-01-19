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
  name: text("name"),
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

export const fundingApplications = pgTable("funding_applications", {
  id: varchar("id").primaryKey(),
  // Director Info
  directorFirstName: text("director_first_name").notNull(),
  directorLastName: text("director_last_name").notNull(),
  directorEmail: text("director_email").notNull(),
  directorPhone: text("director_phone").notNull(),
  directorDob: text("director_dob").notNull(),
  directorAddress: text("director_address").notNull(),
  // Business Info
  limitedCompanyName: text("limited_company_name"),
  tradingName: text("trading_name").notNull(),
  businessAddress: text("business_address").notNull(),
  isDojoCustomer: text("is_dojo_customer").notNull(),
  monthlyRevenue: text("monthly_revenue"),
  fundingAmount: text("funding_amount"),
  fundingPurpose: text("funding_purpose"),
  // Shareholder Info (JSON string for multiple shareholders)
  shareholders: text("shareholders"),
  // Status
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertFundingApplicationSchema = createInsertSchema(fundingApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertFundingApplication = z.infer<typeof insertFundingApplicationSchema>;
export type FundingApplication = typeof fundingApplications.$inferSelect;
