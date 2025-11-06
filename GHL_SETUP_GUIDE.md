# Go High Level Webhook Setup Guide
## Rocket Payments Lead Capture Integration

This guide will walk you through setting up Go High Level (GHL) to receive leads from your Rocket Payments website.

---

## Overview

Your Rocket Payments website captures leads from **3 different sources**:

1. **Calculator Partial Submission** - Early lead capture after step 2 (business type + postcode)
2. **Calculator Complete Submission** - Full lead data after all 8 steps are completed
3. **Quote Form Submission** - From Bookings and Business Funding pages

All three automatically send lead data to your Go High Level CRM via webhooks.

---

## Step 1: Create Your GHL Workflow

### 1.1 Navigate to Workflows
1. Log in to your **Go High Level** account
2. Select the **sub-account** where you want to receive leads
3. Click **"Automation"** → **"Workflows"**
4. Click **"+ Create Workflow"**
5. Give it a name like: `Rocket Payments - Lead Capture`

### 1.2 Add Inbound Webhook Trigger
1. Click **"Add New Workflow Trigger"**
2. Select **"Inbound Webhook"** from the trigger options
3. A unique webhook URL will be automatically generated
4. **COPY THIS URL** - it will look like:
   ```
   https://services.leadconnectorhq.com/hooks/[your-unique-id]
   ```
5. Keep this page open - you'll need it in Step 2

---

## Step 2: Configure Your Replit Environment

### 2.1 Add Webhook URL to Replit Secrets
1. In your **Replit project**, open the **Secrets** tool (lock icon in sidebar)
2. You should see a secret called `GHL_WEBHOOK_URL` already exists
3. Click **Edit** next to `GHL_WEBHOOK_URL`
4. **Paste the webhook URL** you copied from GHL
5. Click **Save**

> **Important:** Your webhook URL is already configured in your code. You just need to add the actual URL value as a secret.

---

## Step 3: Test the Webhook Connection

### 3.1 Send a Test Request
1. In your browser, navigate to your Replit app
2. Open the **browser console** (F12 → Console tab)
3. Run this command to send a test webhook:
   ```javascript
   fetch('/api/test-webhook', { method: 'POST' })
     .then(r => r.json())
     .then(data => console.log('Test result:', data))
   ```

### 3.2 Verify in GHL
1. Go back to your **GHL Workflow** page
2. Click **"Fetch Sample Request"** or refresh the **"Mapping Reference"** section
3. You should see a test request appear with this data:
   - **firstName:** Test
   - **lastName:** User
   - **email:** test@example.com
   - **phone:** +447123456789
   - **companyName:** Test Coffee Shop
   - **postcode:** SW1A 1AA
   - **businessType:** Café & Coffee
   - **monthlyTurnover:** £50,000 - £100,000
   - **currentProvider:** Worldpay
   - **estimatedSavings:** £3,847
   - **source:** Savings Calculator - Test

4. If you see this data, **your webhook is working!** 🎉

---

## Step 4: Map Webhook Data in GHL

### 4.1 Select the Test Request
1. In the **Mapping Reference** section, select your test request
2. Copy the unique ID that appears
3. Click **"Use this reference"** or similar button

### 4.2 Create/Update Contact Action
GHL will automatically add a **"Create/Update Contact"** action. Map the fields:

**Required Fields:**
- **Email:** Select `email` from webhook data
- **Phone:** Select `phone` from webhook data

**Recommended Fields:**
- **First Name:** Select `firstName` from webhook data
- **Last Name:** Select `lastName` from webhook data
- **Company Name:** Select `companyName` from webhook data (or create custom field)

### 4.3 Add Custom Fields (Optional but Recommended)
Create these custom contact fields to capture all lead data:

1. Go to **Settings** → **Custom Fields** → **Add Custom Field**
2. Create these fields:
   - `Postcode` (Text)
   - `Business Type` (Text)
   - `Business Needs` (Text)
   - `Monthly Turnover` (Text)
   - `Current Provider` (Text)
   - `Estimated Savings` (Text)
   - `Lead Source` (Text)
   - `Lead Status` (Text - values: "Partial - In Progress", "Complete")

3. Back in your workflow, map these custom fields to the webhook data:
   - **Postcode:** `postcode`
   - **Business Type:** `businessType`
   - **Business Needs:** `businessNeeds`
   - **Monthly Turnover:** `monthlyTurnover`
   - **Current Provider:** `currentProvider`
   - **Estimated Savings:** `estimatedSavings`
   - **Lead Source:** `source`
   - **Lead Status:** `leadStatus`

---

## Step 5: Build Your Workflow Actions

After the **Create/Update Contact** action, add follow-up actions:

### Recommended Workflow Actions:

**For Partial Leads (Early Capture):**
1. **Add Tag:** "Calculator - In Progress"
2. **Wait:** 2 hours
3. **If/Else Condition:** Check if contact has "Complete" tag
   - **If No:** Send follow-up email/SMS to complete calculator
   - **If Yes:** Do nothing (they already completed)

**For Complete Leads:**
1. **Add Tag:** "Calculator - Complete"
2. **Remove Tag:** "Calculator - In Progress" (if exists)
3. **Send Email:** Welcome email with savings estimate
4. **Send SMS:** Quick thank you message
5. **Create Task:** "Follow up with lead" assigned to sales team
6. **Send Internal Notification:** Notify sales team via Slack/Email

**For Quote Form Leads:**
1. **Add Tag:** "Quote Form - Bookings/Funding"
2. **Send Email:** Custom quote confirmation
3. **Create Opportunity:** In your sales pipeline
4. **Assign to Sales Rep:** Round-robin or specific rep

### Example Email Template:
```
Subject: Your Rocket Payments Savings: £{{estimatedSavings}}!

Hi {{firstName}},

Great news! Based on your business details, we estimate you could save £{{estimatedSavings}} per year by switching to Rocket Payments.

Current Provider: {{currentProvider}}
Business Type: {{businessType}}
Monthly Turnover: {{monthlyTurnover}}

Ready to get started? Book a quick call with our team: [BOOKING LINK]

Best regards,
The Rocket Payments Team
```

---

## Step 6: Save and Activate

1. Click **"Save Trigger"** to finalize the webhook setup
2. Toggle the workflow to **"Active"**
3. Test with a real form submission (see Step 7)

---

## Step 7: Test Live Form Submissions

### Test 1: Calculator Partial Submission
1. Go to your website: `/calculate-savings`
2. Complete Step 1: Select a business type (e.g., "Food & Drink")
3. Complete Step 2: Select business need (e.g., "One or more terminals")
4. Complete Step 3: Select turnover (e.g., "Between £50k - £100k")
5. Complete Step 4: Select provider (e.g., "Dojo")
6. Complete Step 5: Enter company name and postcode, click Next
7. **STOP HERE** - Don't complete the rest
8. Check GHL - you should see a **partial lead** with:
   - Company name and postcode
   - Business type, needs, turnover, provider
   - **Lead Status:** "Partial - In Progress"

### Test 2: Calculator Complete Submission
1. Continue from where you left off (or start fresh)
2. Complete Step 6: Enter your name
3. Complete Step 7: Enter your email
4. Complete Step 8: Enter your phone number
5. Check GHL - you should see a **complete lead** with:
   - All data from partial submission
   - Name, email, phone
   - Estimated savings
   - **Lead Status:** "Complete"

### Test 3: Quote Form Submission
1. Go to `/bookings` or `/business-funding`
2. Fill out the contact form
3. Submit
4. Check GHL - you should see a **quote form lead** with:
   - Contact information
   - Business details
   - **Source:** "Quote Form (Bookings/Business Funding)"

---

## Understanding the Three Webhooks

| Webhook Type | Trigger | Data Included | Lead Status |
|-------------|---------|---------------|-------------|
| **Partial** | After step 5 (postcode) | Company name, postcode, business type, needs, turnover, provider | "Partial - In Progress" |
| **Complete** | After step 8 (phone) | All partial data + name, email, phone, estimated savings | "Complete" |
| **Quote Form** | Form submission | Contact name, email, phone, business details, message | N/A |

### Why Partial Submissions?
- **Capture leads early** - Even if users don't complete all 8 steps
- **Follow up** - Re-engage users who abandoned the calculator
- **Higher conversion** - More opportunities to convert partial leads

---

## Troubleshooting

### Webhook Not Receiving Data

**Problem:** GHL shows no incoming webhooks

**Solutions:**
1. Check `GHL_WEBHOOK_URL` is correctly set in Replit Secrets
2. Make sure the GHL workflow is **Active**
3. Restart your Replit app (use "Restart" button)
4. Check browser console for errors (F12)
5. Look at server logs in Replit for webhook send confirmations

### Webhook Receiving But Not Creating Contacts

**Problem:** Data arrives but no contact is created

**Solutions:**
1. Ensure **email OR phone** is mapped in the Create/Update Contact action
2. Check that your mapping reference matches the incoming data format
3. Verify custom fields exist in GHL if you're trying to use them

### Duplicate Leads

**Problem:** Same lead appears multiple times

**Why:** This is expected! Users might:
- Create a partial submission (step 5)
- Complete the full submission (step 8)
- This creates 2 contacts/updates

**Solution:**
- Use GHL's **duplicate detection** based on email/phone
- The workflow will **update** the existing contact when they complete
- Use tags to track progress: "Partial" → "Complete"

---

## Monitoring and Notifications

### Server Logs
Your Replit server logs show webhook activity:
- ✅ Successfully sent lead to GHL
- ❌ Failed to send to GHL

### Browser Console
When testing, check the console for:
- 📤 Partial form data sent to GHL (early lead capture)
- ✅ Calculator submission successful!
- 📤 Webhook sent to GHL: true

### GHL Workflow Execution Log
- View all webhook triggers in GHL
- See which contacts were created/updated
- Debug failed actions

---

## Cost Information

### GHL Webhook Pricing
- **First 100 executions/month:** FREE
- **After 100 executions:** $0.01 per execution
- Available on **all GHL plans**

### Estimated Monthly Cost
If you receive:
- 50 partial submissions
- 30 complete submissions
- 20 quote forms
- **Total:** 100 webhooks = **FREE**

If you receive 300+ leads/month:
- First 100 free
- Next 200 at $0.01 each = **$2/month**

---

## Security

### If Your Webhook URL Is Compromised
1. In GHL, **delete** the current Inbound Webhook Trigger
2. **Create a new** Inbound Webhook Trigger (generates new URL)
3. **Update** `GHL_WEBHOOK_URL` secret in Replit with the new URL
4. Restart your Replit app

### Best Practices
- Never share your webhook URL publicly
- Don't commit the URL to code repositories
- Keep it in Replit Secrets only
- Rotate the URL if you suspect unauthorized access

---

## Advanced Customization

### Modify Webhook Data
Edit `server/routes.ts` to customize what data is sent to GHL:

**Partial Submission:** Line 142-151
**Complete Submission:** Line 190-204
**Quote Form:** Line 47-57

### Change When Partial Webhook Triggers
Currently triggers after Step 5 (company name + postcode).

To change, edit `client/src/pages/CalculateSavings.tsx` line 84-113.

### Add More Webhooks
You can add webhooks for other events:
- Add them to `server/routes.ts`
- Call `sendToGHL(data)` with your custom data

---

## Support Resources

- **GHL Official Docs:** https://help.gohighlevel.com/support/solutions/articles/155000003147
- **Your Server Logs:** Check Replit console for webhook confirmations
- **Browser Console:** F12 to see frontend webhook triggers

---

## Quick Reference

**Test Webhook:**
```javascript
fetch('/api/test-webhook', { method: 'POST' })
```

**Check Webhook Status in Code:**
```javascript
// Browser Console
fetch('/api/calculator-submission', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* your data */ })
}).then(r => r.json()).then(console.log)
```

**Three Endpoints:**
- `/api/calculator-partial-submission` - Early capture
- `/api/calculator-submission` - Complete calculator
- `/api/quote` - Quote forms

---

## Summary

✅ **Setup Complete When:**
1. GHL webhook URL is in Replit Secrets
2. GHL workflow is active with Inbound Webhook trigger
3. Test webhook shows data in GHL
4. Fields are mapped in Create/Update Contact action
5. Follow-up actions are configured (emails, tags, tasks)

🎉 **You're now capturing leads automatically from your website to Go High Level!**
