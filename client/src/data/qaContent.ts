export interface QAPage {
  slug: string;
  question: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  category: string;
  shortAnswer: string;
  detailedAnswer: string[];
  relatedQuestions: string[];
  ctaText: string;
  ctaLink: string;
}

export const qaPages: QAPage[] = [
  // Card Machine Questions
  {
    slug: "how-much-does-a-card-machine-cost-uk",
    question: "How much does a card machine cost UK?",
    metaTitle: "How Much Does a Card Machine Cost UK 2025? | Rocket Payments",
    metaDescription: "Card machine costs in the UK range from FREE to £30/month. Learn about Tap to Pay (free), terminal rental, and transaction fees. Get the lowest rates from 0.29%.",
    keywords: "card machine cost UK, how much card machine, card reader price UK, payment terminal cost, PDQ machine cost",
    category: "Card Machines",
    shortAnswer: "Card machine costs in the UK range from completely FREE (Tap to Pay) to £30+/month for rental. With Rocket Payments, Tap to Pay is free and terminals have no rental fees - you only pay transaction rates from 0.29%.",
    detailedAnswer: [
      "The cost of a card machine in the UK varies significantly depending on the provider and type of terminal you choose. Here's what you can expect:",
      "FREE options: Rocket Payments offers FREE Tap to Pay that turns your iPhone into a card machine. There's no hardware to buy, no monthly fees, and you only pay transaction rates from 0.29%.",
      "Terminal rental: Many providers charge £15-30/month for terminal rental. With Rocket Payments, terminals have no rental fees - just transaction costs.",
      "Purchase options: You can buy terminals outright for £50-500, but technology changes frequently so rental or free options are usually more practical.",
      "Transaction fees: These range from 0.29% (Rocket Payments) to 2.75% depending on provider. This is often more significant than hardware costs.",
      "Hidden fees to watch: Setup fees, PCI compliance charges, monthly minimums, and cancellation fees can add significant costs with some providers. Rocket Payments has no hidden fees."
    ],
    relatedQuestions: [
      "what-is-the-cheapest-card-machine-uk",
      "can-i-use-my-phone-as-card-machine",
      "what-percentage-do-card-machines-take"
    ],
    ctaText: "Get FREE Tap to Pay",
    ctaLink: "/products/tap-to-pay"
  },
  {
    slug: "what-is-the-cheapest-card-machine-uk",
    question: "What is the cheapest card machine UK?",
    metaTitle: "What is the Cheapest Card Machine UK 2025? | FREE Options | Rocket Payments",
    metaDescription: "The cheapest card machine in the UK is FREE Tap to Pay from Rocket Payments. No hardware costs, no monthly fees, rates from 0.29%. Compare the lowest rates.",
    keywords: "cheapest card machine UK, free card machine, lowest cost card reader, cheap payment terminal, budget card machine",
    category: "Card Machines",
    shortAnswer: "The cheapest card machine in the UK is Rocket Payments' FREE Tap to Pay. It costs nothing for hardware, has no monthly fees, and offers the lowest transaction rates from 0.29% - significantly cheaper than Square (1.75%), SumUp (1.69%), or Dojo.",
    detailedAnswer: [
      "If you're looking for the most affordable way to accept card payments in the UK, here are your options ranked by cost:",
      "1. FREE Tap to Pay (Rocket Payments): Absolutely free - no hardware, no monthly fees. You just pay transaction rates from 0.29%. Perfect for mobile businesses, market traders, and startups.",
      "2. Rocket Payments terminals: No rental fees, no monthly charges. Transaction rates from 0.29% for debit, 0.67% credit. Best for established businesses wanting physical terminals.",
      "3. SumUp: No monthly fees but 1.69% transaction rate. Good for very low volume but expensive as you grow.",
      "4. Square: 1.75% flat rate with no monthly fees. Simple but significantly more expensive than specialist providers.",
      "5. Dojo, Worldpay, Barclaycard: Monthly fees plus transaction rates. Often the most expensive overall despite looking professional.",
      "For most UK businesses, Rocket Payments offers the lowest total cost of ownership whether you choose FREE Tap to Pay or our terminal solutions."
    ],
    relatedQuestions: [
      "how-much-does-a-card-machine-cost-uk",
      "what-percentage-do-card-machines-take",
      "is-sumup-or-zettle-better"
    ],
    ctaText: "Get FREE Tap to Pay",
    ctaLink: "/products/tap-to-pay"
  },
  {
    slug: "can-i-use-my-phone-as-card-machine",
    question: "Can I use my phone as a card machine UK?",
    metaTitle: "Can I Use My Phone as a Card Machine UK? | FREE Tap to Pay | Rocket Payments",
    metaDescription: "Yes! You can use your iPhone as a card machine with FREE Tap to Pay. Accept contactless payments without any hardware. Rates from 0.29%. Start today.",
    keywords: "phone card machine, tap to pay iPhone, mobile card payments, smartphone card reader, contactless phone payment",
    category: "Card Machines",
    shortAnswer: "Yes! With Rocket Payments' FREE Tap to Pay, you can use your iPhone as a card machine to accept contactless payments. No additional hardware needed - just your phone. Transaction rates start from 0.29% with no monthly fees.",
    detailedAnswer: [
      "You can absolutely use your phone as a card machine in the UK. Here's how it works:",
      "Tap to Pay technology uses your iPhone's NFC chip to accept contactless payments. Customers simply tap their card, Apple Pay, or Google Pay on your phone screen to pay.",
      "With Rocket Payments, Tap to Pay is completely FREE. There's no hardware to buy, no monthly fees, and no contracts. You only pay when you make a sale - from 0.29% for debit cards.",
      "Currently, Tap to Pay is available for iPhone only (iPhone XS or newer with iOS 16.4+). Android support is expected in the future.",
      "The payment limit follows standard contactless rules - up to £100 for regular cards, or unlimited for mobile wallet payments with biometric authentication.",
      "Tap to Pay is perfect for: mobile businesses, market traders, pop-up shops, service providers, delivery drivers, and any business wanting to accept cards without hardware costs."
    ],
    relatedQuestions: [
      "how-do-i-set-up-tap-to-pay",
      "what-is-the-cheapest-card-machine-uk",
      "how-much-does-a-card-machine-cost-uk"
    ],
    ctaText: "Get FREE Tap to Pay",
    ctaLink: "/products/tap-to-pay"
  },
  {
    slug: "what-percentage-do-card-machines-take",
    question: "What percentage do card machines take UK?",
    metaTitle: "What Percentage Do Card Machines Take UK 2025? | Fee Guide | Rocket Payments",
    metaDescription: "UK card machine fees range from 0.29% to 2.75% per transaction. Rocket Payments offers the lowest rates: 0.29% debit, 0.67% credit. Compare fees here.",
    keywords: "card machine percentage, card payment fees UK, transaction fees, merchant fees UK, card processing rates",
    category: "Fees & Pricing",
    shortAnswer: "UK card machine fees range from 0.29% (Rocket Payments) to 2.75% per transaction. The rate depends on your provider and card type. Rocket Payments offers: 0.29% for UK debit cards, 0.67% for credit cards, 0.9% for international cards.",
    detailedAnswer: [
      "Card machine transaction fees in the UK vary significantly between providers. Here's what you can expect:",
      "Rocket Payments offers the lowest rates in the UK market: 0.29% for UK debit cards, 0.67% for credit cards, 0.9% for international cards. No monthly fees on top.",
      "SumUp charges a flat 1.69% for all transactions. Square charges 1.75%. While simple, these rates are 5-6 times higher than Rocket Payments for debit cards.",
      "Dojo, Worldpay, Barclaycard and traditional providers often quote rates of 0.5-1.5% but add monthly fees, terminal rental, and various charges that increase the effective rate.",
      "Factors affecting your rate: Card type (debit cheapest, commercial cards most expensive), provider choice, your business type, and transaction volume (higher volumes can mean lower rates).",
      "To calculate your true costs: (Monthly card turnover × Rate) + Monthly fees. A business processing £10,000/month at 0.29% pays £29. At 1.75%, they'd pay £175 - a £146/month difference."
    ],
    relatedQuestions: [
      "how-much-does-a-card-machine-cost-uk",
      "what-is-the-cheapest-card-machine-uk",
      "are-card-payment-fees-tax-deductible"
    ],
    ctaText: "See Our Low Rates",
    ctaLink: "/pricing"
  },
  {
    slug: "how-do-i-set-up-tap-to-pay",
    question: "How do I set up Tap to Pay on my phone?",
    metaTitle: "How to Set Up Tap to Pay UK | Step by Step Guide | Rocket Payments",
    metaDescription: "Set up Tap to Pay in minutes: 1. Apply online 2. Download app 3. Verify identity 4. Start accepting payments. FREE setup, no hardware needed. Start today.",
    keywords: "set up tap to pay, tap to pay setup, enable tap to pay iPhone, start accepting card payments, mobile payment setup",
    category: "Setup & Getting Started",
    shortAnswer: "Setting up Tap to Pay with Rocket Payments takes just minutes: 1. Apply online at rocketpayments.co.uk 2. Get approved (usually same day) 3. Download our app 4. Complete quick verification 5. Start accepting contactless payments immediately.",
    detailedAnswer: [
      "Here's how to set up Tap to Pay on your iPhone with Rocket Payments:",
      "Step 1 - Apply online: Visit rocketpayments.co.uk and complete our simple application. You'll need your business details and bank account information for settlements.",
      "Step 2 - Get approved: Most applications are approved the same day. We'll email you confirmation and setup instructions.",
      "Step 3 - Download the app: Get the Rocket Payments app from the App Store. Sign in with your account details.",
      "Step 4 - Verify your identity: Complete a quick identity check in the app. This usually takes just a few minutes.",
      "Step 5 - Start accepting payments: You're ready to go! To take a payment, open the app, enter the amount, and have your customer tap their card or phone on your iPhone.",
      "Requirements: iPhone XS or newer, iOS 16.4+, UK bank account for settlements. That's it - no additional hardware or equipment needed."
    ],
    relatedQuestions: [
      "can-i-use-my-phone-as-card-machine",
      "how-long-to-receive-card-payments",
      "what-is-the-cheapest-card-machine-uk"
    ],
    ctaText: "Apply for FREE Tap to Pay",
    ctaLink: "/free-terminal"
  },
  {
    slug: "how-long-to-receive-card-payments",
    question: "How long does it take to receive card payments UK?",
    metaTitle: "How Long to Receive Card Payments UK? | Next Day Settlement | Rocket Payments",
    metaDescription: "With Rocket Payments, receive card payments by 6am next day, 7 days a week. Compare settlement times: we offer the fastest payouts in the UK market.",
    keywords: "card payment settlement, how long card payments, receive card payments, money from card machine, payment payout time",
    category: "Payments & Settlements",
    shortAnswer: "With Rocket Payments, funds from card payments are in your bank account by 6am the next working day. With our 7-day settlement option, you can receive funds every day including weekends. Traditional providers take 3-5 business days.",
    detailedAnswer: [
      "Settlement speed - how quickly card payments reach your bank account - varies significantly between providers:",
      "Rocket Payments: Next working day by 6am as standard. Upgrade to 7-day settlement and receive funds every day including weekends. This is among the fastest in the UK market.",
      "Square and SumUp: 1-2 business days for most transactions.",
      "Traditional providers (Worldpay, Barclaycard): Often 3-5 business days, which can create cash flow challenges.",
      "Why settlement speed matters: Faster access to your money improves cash flow, lets you pay suppliers sooner, and reduces the working capital tied up in pending payments.",
      "Instant settlement: Some providers offer same-day or instant settlement for an additional fee. If you need funds immediately, ask about these options.",
      "Settlement to any UK bank: Rocket Payments can settle to any UK bank account. Settlements typically arrive by 6am, ready for your business day."
    ],
    relatedQuestions: [
      "what-percentage-do-card-machines-take",
      "how-do-i-set-up-tap-to-pay",
      "what-bank-account-for-card-payments"
    ],
    ctaText: "Get Fast Settlements",
    ctaLink: "/quote"
  },
  {
    slug: "are-card-payment-fees-tax-deductible",
    question: "Are card payment fees tax deductible UK?",
    metaTitle: "Are Card Payment Fees Tax Deductible UK? | Business Expenses | Rocket Payments",
    metaDescription: "Yes, card payment processing fees are tax deductible in the UK. Learn how to claim card machine costs as a business expense and reduce your tax bill.",
    keywords: "card payment fees tax deductible, tax deduction card machine, business expense card payments, claim card fees tax, merchant fees tax",
    category: "Fees & Pricing",
    shortAnswer: "Yes, card payment processing fees are fully tax deductible in the UK. They're classified as a legitimate business expense and can be deducted when calculating your taxable profits. This includes transaction fees, monthly charges, and terminal costs.",
    detailedAnswer: [
      "Card payment fees are tax deductible for UK businesses. Here's what you need to know:",
      "Transaction fees: The percentage charged on each card payment is a deductible business expense. Track these via your provider's statements.",
      "Monthly/rental fees: Any monthly charges for terminals or services are deductible operating expenses.",
      "Equipment purchases: If you buy a terminal outright, you may be able to claim capital allowances or deduct the cost as an expense depending on the amount.",
      "How to claim: Include your payment processing costs in your business expenses when completing your tax return. Keep provider statements and invoices as records.",
      "For sole traders: Deduct fees from your self-employment income on your Self Assessment tax return.",
      "For limited companies: Include in your company's operating expenses to reduce corporation tax liability.",
      "Tip: Lower transaction fees mean lower costs AND lower deductions - but you still come out ahead by paying less overall. Switching to Rocket Payments' 0.29% rates saves more than the tax benefit of higher fees."
    ],
    relatedQuestions: [
      "what-percentage-do-card-machines-take",
      "how-much-does-a-card-machine-cost-uk",
      "what-records-keep-card-payments"
    ],
    ctaText: "Reduce Your Fees",
    ctaLink: "/pricing"
  },
  // Business Funding Questions
  {
    slug: "what-is-merchant-cash-advance-uk",
    question: "What is a merchant cash advance UK?",
    metaTitle: "What is a Merchant Cash Advance UK? | Business Funding Explained | Rocket Payments",
    metaDescription: "A merchant cash advance (MCA) provides funding based on your future card sales. Repayments flex with your revenue. Get £5k-£500k with Rocket Payments.",
    keywords: "merchant cash advance UK, MCA business funding, cash advance business, card sales funding, flexible business loan",
    category: "Business Funding",
    shortAnswer: "A merchant cash advance (MCA) is business funding where you receive a lump sum in exchange for a percentage of your future card sales. Unlike loans, repayments flex with your revenue - pay more when busy, less when quiet. Rocket Payments offers MCAs from £5,000 to £500,000.",
    detailedAnswer: [
      "A merchant cash advance (MCA) is an alternative to traditional business loans, ideal for businesses that accept card payments. Here's how it works:",
      "You receive a lump sum: Based on your card turnover history, you're advanced funding upfront - typically 50-150% of your monthly card sales.",
      "Repayments come from future sales: Instead of fixed monthly payments, a small percentage of each card transaction automatically goes toward repaying the advance.",
      "Flexible repayments: Busy day with lots of sales? You repay more. Quiet day? You repay less. This protects your cash flow during slow periods.",
      "Fast approval: Because MCAs are based on your trading history rather than credit scores, approval is often within 24-48 hours with funding shortly after.",
      "The cost is a 'factor rate' rather than interest. For example, a factor rate of 1.25 on a £10,000 advance means you repay £12,500 total.",
      "Rocket Payments offers MCAs from £5,000 to £500,000 with competitive rates. Because we process your card payments, we can offer quick decisions based on your actual trading data."
    ],
    relatedQuestions: [
      "how-much-business-funding-can-i-get",
      "how-quickly-get-business-funding",
      "business-funding-bad-credit"
    ],
    ctaText: "Apply for Business Funding",
    ctaLink: "/business-funding"
  },
  {
    slug: "how-much-business-funding-can-i-get",
    question: "How much business funding can I get UK?",
    metaTitle: "How Much Business Funding Can I Get UK? | £5k-£500k | Rocket Payments",
    metaDescription: "Business funding amounts in the UK range from £5,000 to £500,000+ depending on your turnover. Rocket Payments offers MCAs based on your card sales.",
    keywords: "business funding amount UK, how much can I borrow, business loan amount, MCA funding limit, maximum business funding",
    category: "Business Funding",
    shortAnswer: "With Rocket Payments, you can access business funding from £5,000 to £500,000 based on your monthly card turnover. Typically, you can receive 50-150% of your average monthly card sales. Higher turnovers and consistent trading history qualify for larger amounts.",
    detailedAnswer: [
      "The amount of business funding you can access depends on several factors:",
      "Rocket Payments MCAs: We offer £5,000 to £500,000 based on your card processing history. Typical advances are 50-150% of your monthly card turnover.",
      "Trading history matters: Businesses with 6+ months of consistent card sales typically qualify for higher amounts. We look at your actual trading, not just projections.",
      "Example calculations: If you process £20,000/month in card sales, you might qualify for £10,000-£30,000. Processing £100,000/month could mean access to £50,000-£150,000.",
      "Bank loans: Traditional bank loans range from £10,000 to millions, but require extensive documentation, good credit, and often collateral.",
      "Start Up Loans: Government-backed loans offer up to £25,000 for new businesses with 0% interest during mentoring period.",
      "How to maximize your funding: Consistent card sales, clean trading history, and a clear purpose for funds all help. With Rocket Payments, we can often pre-approve funding based on your existing payment processing data."
    ],
    relatedQuestions: [
      "what-is-merchant-cash-advance-uk",
      "how-quickly-get-business-funding",
      "business-funding-bad-credit"
    ],
    ctaText: "Check Your Eligibility",
    ctaLink: "/business-funding"
  },
  {
    slug: "how-quickly-get-business-funding",
    question: "How quickly can I get business funding UK?",
    metaTitle: "How Quickly Can I Get Business Funding UK? | 24 Hour Approval | Rocket Payments",
    metaDescription: "Get business funding in 24-48 hours with a merchant cash advance. Rocket Payments offers fast approval based on your card sales. Apply today, funded tomorrow.",
    keywords: "fast business funding, quick business loan, same day business funding, urgent business funding, quick MCA",
    category: "Business Funding",
    shortAnswer: "With Rocket Payments merchant cash advances, you can receive funding within 24-48 hours. We approve applications in as little as 24 hours based on your card sales history, with funds transferred shortly after. Traditional bank loans take 4-8 weeks.",
    detailedAnswer: [
      "The speed of business funding varies dramatically by type:",
      "Merchant Cash Advance (Rocket Payments): Approval in 24 hours, funds within 48 hours. Because we base decisions on your card processing history, we can move quickly.",
      "Online alternative lenders: 1-5 business days typically. Faster than banks but usually with higher rates.",
      "Traditional bank loans: 4-8 weeks from application to funding. Extensive documentation and credit checks slow the process.",
      "Start Up Loans: 2-4 weeks including mandatory mentoring sessions.",
      "How to speed up your application: Have your documents ready (ID, bank statements, card processing statements). Complete applications fully - missing information causes delays.",
      "Existing Rocket Payments customers: If you already process payments with us, we have your trading data ready. This means even faster decisions and funding.",
      "For urgent needs: MCAs are usually the fastest option for established businesses. If you need funding this week, a merchant cash advance is typically your best route."
    ],
    relatedQuestions: [
      "what-is-merchant-cash-advance-uk",
      "how-much-business-funding-can-i-get",
      "business-funding-bad-credit"
    ],
    ctaText: "Apply for Fast Funding",
    ctaLink: "/business-funding"
  },
  {
    slug: "business-funding-bad-credit",
    question: "Can I get business funding with bad credit UK?",
    metaTitle: "Business Funding with Bad Credit UK | MCA Options | Rocket Payments",
    metaDescription: "Yes, you can get business funding with bad credit. Merchant cash advances focus on trading performance, not credit history. Learn about options for challenged credit.",
    keywords: "business funding bad credit, poor credit business loan, MCA bad credit, business finance low credit score, no credit check business funding",
    category: "Business Funding",
    shortAnswer: "Yes, you can get business funding with bad credit in the UK. Merchant cash advances (MCAs) focus on your trading performance rather than credit history. Rocket Payments looks at your card sales, not your credit score, to make funding decisions.",
    detailedAnswer: [
      "Bad credit doesn't have to stop you accessing business funding. Here are your options:",
      "Merchant Cash Advances: MCAs like those from Rocket Payments are based on your card sales history, not credit scores. If you have consistent card transactions, you can often qualify regardless of credit history.",
      "Why MCAs work for challenged credit: Repayments come automatically from your card sales, reducing risk for the provider. Your trading performance matters more than past credit issues.",
      "Alternative lenders: Some online lenders specialize in businesses with imperfect credit. Rates may be higher, but approval is more accessible.",
      "Secured funding: If you have assets (property, equipment), secured loans may be available as the asset reduces lender risk.",
      "What won't work: Traditional bank loans and overdrafts typically require good credit. Government-backed schemes also have credit requirements.",
      "Building credit while trading: Successfully repaying an MCA can help rebuild your credit profile for future, potentially cheaper funding options."
    ],
    relatedQuestions: [
      "what-is-merchant-cash-advance-uk",
      "how-much-business-funding-can-i-get",
      "how-quickly-get-business-funding"
    ],
    ctaText: "Check Your Eligibility",
    ctaLink: "/business-funding"
  },
  // Comparison Questions
  {
    slug: "is-sumup-or-zettle-better",
    question: "Is SumUp or Zettle better UK?",
    metaTitle: "SumUp vs Zettle UK 2025: Which is Better? | Or Choose Rocket Payments",
    metaDescription: "Compare SumUp (1.69%) vs Zettle (1.75%) for UK businesses. Both are expensive compared to Rocket Payments at 0.29%. See the full comparison.",
    keywords: "SumUp vs Zettle, compare SumUp Zettle, best card machine UK, SumUp or Zettle 2025, cheap card reader comparison",
    category: "Comparisons",
    shortAnswer: "Between SumUp (1.69%) and Zettle (1.75%), SumUp is slightly cheaper. However, both are significantly more expensive than Rocket Payments at 0.29% for debit cards. For a business processing £5,000/month, Rocket Payments saves over £70 monthly compared to SumUp or Zettle.",
    detailedAnswer: [
      "Here's a detailed comparison of SumUp, Zettle (PayPal), and Rocket Payments:",
      "Transaction rates: SumUp 1.69%, Zettle 1.75%, Rocket Payments 0.29% (debit) / 0.67% (credit). Rocket Payments is 5-6x cheaper for debit transactions.",
      "Monthly fees: All three have no monthly fees for basic service.",
      "Hardware: SumUp and Zettle require purchasing card readers (£19-79). Rocket Payments offers FREE Tap to Pay.",
      "Settlement: SumUp 1-2 days, Zettle 1-2 days, Rocket Payments next day by 6am.",
      "Example cost on £10,000 monthly sales: SumUp £169, Zettle £175, Rocket Payments £29 (assuming all debit). That's £140+/month savings with Rocket Payments.",
      "Best for: SumUp/Zettle suit very casual sellers prioritizing simplicity over cost. Rocket Payments suits anyone wanting the lowest fees and professional features.",
      "The verdict: If cost matters (and it should), Rocket Payments dramatically outperforms both SumUp and Zettle on pricing while offering more features."
    ],
    relatedQuestions: [
      "what-is-the-cheapest-card-machine-uk",
      "what-percentage-do-card-machines-take",
      "dojo-alternative-uk"
    ],
    ctaText: "Switch to Lower Rates",
    ctaLink: "/pricing"
  },
  {
    slug: "dojo-alternative-uk",
    question: "What is a good Dojo alternative UK?",
    metaTitle: "Best Dojo Alternative UK 2025 | Lower Fees | Rocket Payments",
    metaDescription: "Looking for a Dojo alternative? Rocket Payments offers lower rates from 0.29%, no monthly fees, and the same reliable service. Compare and switch today.",
    keywords: "Dojo alternative, switch from Dojo, cheaper than Dojo, Dojo competitor, Dojo replacement",
    category: "Comparisons",
    shortAnswer: "Rocket Payments is the best Dojo alternative in the UK. We offer lower transaction rates (from 0.29% vs Dojo's higher rates), no monthly fees, and all the reliability and features businesses expect. Many Dojo customers save 30-50% by switching to Rocket Payments.",
    detailedAnswer: [
      "If you're looking for a Dojo alternative, Rocket Payments offers everything Dojo does - and more - at lower cost:",
      "Lower transaction rates: Rocket Payments starts from 0.29% for debit cards. Dojo rates vary but are typically higher, especially when you factor in their monthly fees.",
      "No monthly fees: While Dojo charges monthly service fees, Rocket Payments has zero monthly costs. You only pay when you make sales.",
      "Same reliability: Next-day settlements, UK-based support, and sleek terminals. We match Dojo's service quality.",
      "Better integrations: Rocket Payments connects with 600+ EPOS systems, often more seamlessly than Dojo.",
      "Easy switching: Moving from Dojo to Rocket Payments is straightforward. We help with the transition and there's no downtime.",
      "FREE Tap to Pay: Unlike Dojo, we offer FREE Tap to Pay for mobile payments - no hardware required.",
      "Real savings: A restaurant processing £30,000/month could save £200-400 monthly by switching from Dojo to Rocket Payments."
    ],
    relatedQuestions: [
      "what-is-the-cheapest-card-machine-uk",
      "how-to-switch-card-machine-provider",
      "what-percentage-do-card-machines-take"
    ],
    ctaText: "Compare to Dojo",
    ctaLink: "/blog/dojo-card-machine-uk"
  },
  {
    slug: "how-to-switch-card-machine-provider",
    question: "How do I switch card machine providers UK?",
    metaTitle: "How to Switch Card Machine Providers UK | Easy Guide | Rocket Payments",
    metaDescription: "Switching card machine providers is easy: 1. Apply with new provider 2. Get approved 3. Receive equipment 4. Cancel old provider. Usually no downtime.",
    keywords: "switch card machine, change payment provider, new card machine provider, cancel card machine, move card provider",
    category: "Setup & Getting Started",
    shortAnswer: "Switching card machine providers is straightforward: 1. Apply with your new provider (Rocket Payments) 2. Get approved and receive equipment 3. Start using your new terminal 4. Cancel your old provider. The whole process typically takes 3-5 days with no payment downtime.",
    detailedAnswer: [
      "Here's how to switch your card machine provider smoothly:",
      "Step 1 - Research and apply: Compare providers, then apply online with your chosen new provider. Rocket Payments approves most applications same-day.",
      "Step 2 - Keep your old terminal running: Don't cancel your current provider until your new one is ready. This ensures no gap in accepting payments.",
      "Step 3 - Receive new equipment: Physical terminals typically arrive within 1-3 days. For Tap to Pay, you can start immediately after approval.",
      "Step 4 - Test your new setup: Process a small test transaction to confirm everything works correctly.",
      "Step 5 - Cancel your old provider: Review your contract for notice periods and cancellation fees. Give proper notice to avoid charges.",
      "Step 6 - Return old equipment: If renting, return terminals as specified to avoid continued charges.",
      "Potential complications: Watch for cancellation fees, notice periods, and equipment return requirements with your current provider. Many Rocket Payments customers find the switch saves so much that any exit fees are quickly recovered."
    ],
    relatedQuestions: [
      "dojo-alternative-uk",
      "how-do-i-set-up-tap-to-pay",
      "what-is-the-cheapest-card-machine-uk"
    ],
    ctaText: "Switch to Rocket Payments",
    ctaLink: "/quote"
  },
  // Technical Questions
  {
    slug: "what-is-contactless-payment-limit-uk",
    question: "What is the contactless payment limit UK?",
    metaTitle: "What is the Contactless Payment Limit UK 2025? | £100 Tap Limit | Rocket Payments",
    metaDescription: "The UK contactless payment limit is £100 for card taps. Mobile wallet payments (Apple Pay, Google Pay) have no limit with biometric authentication.",
    keywords: "contactless limit UK, tap payment limit, contactless card limit, Apple Pay limit, maximum contactless payment",
    category: "Technical",
    shortAnswer: "The UK contactless card payment limit is £100. However, payments via Apple Pay, Google Pay, or other mobile wallets have no limit when authenticated with fingerprint or Face ID. For amounts over £100, customers can use their PIN or mobile wallet.",
    detailedAnswer: [
      "Here's everything you need to know about UK contactless payment limits:",
      "Card tap limit: £100 for contactless card payments. This increased from £45 in October 2021 to encourage contactless adoption.",
      "Mobile wallet limit: No limit for Apple Pay, Google Pay, and Samsung Pay when customers authenticate with fingerprint or Face ID. This is because biometric authentication provides equivalent security to PIN.",
      "Multiple taps: Some banks limit the number of contactless transactions before requiring a PIN for security. This is typically 5-10 transactions or around £300 cumulative.",
      "Business implications: Accept all payment types to maximize convenience. Mobile wallet users can pay any amount contactlessly.",
      "International customers: Visitors may have different contactless limits based on their home country's rules.",
      "Rocket Payments terminals: All our terminals and Tap to Pay accept contactless payments up to any amount when customers use mobile wallets with biometric authentication."
    ],
    relatedQuestions: [
      "can-i-use-my-phone-as-card-machine",
      "what-is-apple-pay-limit-uk",
      "how-does-contactless-work"
    ],
    ctaText: "Accept Contactless Payments",
    ctaLink: "/products/tap-to-pay"
  },
  {
    slug: "what-is-pci-compliance",
    question: "What is PCI compliance for businesses UK?",
    metaTitle: "What is PCI Compliance UK? | Card Payment Security | Rocket Payments",
    metaDescription: "PCI DSS compliance is required for all UK businesses accepting card payments. Rocket Payments terminals are Level 1 certified, making compliance automatic.",
    keywords: "PCI compliance UK, PCI DSS business, card payment security, PCI requirements, payment security standards",
    category: "Technical",
    shortAnswer: "PCI DSS (Payment Card Industry Data Security Standard) is a security requirement for all businesses accepting card payments. It protects cardholder data from theft. With Rocket Payments, our Level 1 certified terminals with P2PE encryption make your business automatically compliant.",
    detailedAnswer: [
      "PCI compliance is essential for any UK business accepting card payments. Here's what you need to know:",
      "What is PCI DSS: A set of security standards created by card networks (Visa, Mastercard) to protect cardholder data. All businesses accepting cards must comply.",
      "Compliance levels: Level 1 is the highest (for businesses processing millions of transactions). Most small businesses are Level 4 but must still meet requirements.",
      "Why it matters: Non-compliance can result in fines, higher transaction fees, or losing the ability to accept cards entirely.",
      "How Rocket Payments helps: Our terminals are PCI DSS Level 1 certified with P2PE (Point-to-Point Encryption). This means card data is encrypted immediately and never stored on your premises.",
      "Your responsibilities: Keep terminals secure, don't write down card numbers, train staff on security, complete annual self-assessment questionnaire (SAQ).",
      "PCI fees: Some providers charge £5-15/month for 'PCI compliance'. Rocket Payments includes this free - our equipment does the heavy lifting."
    ],
    relatedQuestions: [
      "is-my-card-machine-secure",
      "what-percentage-do-card-machines-take",
      "how-do-i-set-up-tap-to-pay"
    ],
    ctaText: "Get Compliant Terminals",
    ctaLink: "/products"
  },
  {
    slug: "how-does-epos-integration-work",
    question: "How does EPOS integration work with card machines?",
    metaTitle: "EPOS Integration with Card Machines UK | 600+ Systems | Rocket Payments",
    metaDescription: "EPOS integration connects your till system with card machine for automatic payments. Rocket Payments integrates with 600+ EPOS systems. Learn how it works.",
    keywords: "EPOS integration, card machine EPOS, till integration, POS card machine, payment integration",
    category: "Technical",
    shortAnswer: "EPOS integration connects your till/point-of-sale system directly to your card machine. When you complete a sale, the amount automatically appears on the terminal - no manual entry needed. Rocket Payments integrates with 600+ EPOS systems including Lightspeed, Square POS, and Epos Now.",
    detailedAnswer: [
      "EPOS integration streamlines your payment process. Here's how it works:",
      "The connection: Your EPOS (Electronic Point of Sale) system communicates with your card terminal, usually via WiFi, Bluetooth, or direct cable connection.",
      "The process: When you total a sale on your till, the amount automatically transfers to the card machine. The customer pays, and the result (approved/declined) returns to your EPOS.",
      "Benefits: Eliminates manual amount entry (reducing errors), speeds up checkout, automatically reconciles sales and payments, and provides unified reporting.",
      "Integration types: Some are 'semi-integrated' (amount transfers, payment is separate), while 'fully integrated' systems handle everything including receipts and reporting.",
      "Rocket Payments integrations: We connect with 600+ EPOS systems including Lightspeed, Epos Now, Goodtill, Square POS (as a payment provider), Tevalis, and many more.",
      "Getting set up: Our team handles integration setup. For most systems, it's simply configuring your EPOS to communicate with your Rocket Payments terminal - usually completed in under an hour."
    ],
    relatedQuestions: [
      "which-epos-systems-compatible",
      "how-do-i-set-up-tap-to-pay",
      "what-is-the-cheapest-card-machine-uk"
    ],
    ctaText: "See Our Integrations",
    ctaLink: "/integrations"
  },
  {
    slug: "do-i-need-internet-for-card-machine",
    question: "Do I need internet for a card machine UK?",
    metaTitle: "Do Card Machines Need Internet UK? | Connectivity Guide | Rocket Payments",
    metaDescription: "Card machines need connectivity but not always WiFi. Options include WiFi, 4G/mobile data, or ethernet. Rocket Payments terminals work with all connection types.",
    keywords: "card machine internet, WiFi card machine, 4G card terminal, offline card payments, card machine connectivity",
    category: "Technical",
    shortAnswer: "Card machines need some form of connectivity but not necessarily WiFi. Options include: WiFi, 4G/mobile data (built into mobile terminals), or ethernet cable. Rocket Payments offers terminals with multiple connectivity options so you can choose what suits your business.",
    detailedAnswer: [
      "Here's everything about card machine connectivity:",
      "Why connectivity is needed: Card machines must communicate with banks to authorize transactions in real-time. This happens in 2-3 seconds per transaction.",
      "WiFi connection: Most common for fixed locations. Terminals connect to your business WiFi like any other device. Reliable but dependent on your internet connection.",
      "4G/mobile data: Built into mobile terminals like Rocket Go. Works anywhere with phone signal. Perfect for markets, events, and mobile businesses.",
      "Ethernet: Wired connection for countertop terminals. Most reliable option - not affected by WiFi interference or signal issues.",
      "Offline processing: Some terminals can store transactions when offline and process them when connectivity returns. However, this carries risk as transactions aren't immediately authorized.",
      "Tap to Pay: Uses your iPhone's connection (WiFi or mobile data). Works wherever your phone has signal.",
      "Rocket Payments options: Our Rocket Wired uses ethernet or WiFi. Rocket Go has built-in 4G. Rocket Pocket uses Bluetooth with a base unit. Tap to Pay uses your iPhone's connection."
    ],
    relatedQuestions: [
      "can-i-use-my-phone-as-card-machine",
      "what-is-the-best-card-machine-for-mobile",
      "how-do-i-set-up-tap-to-pay"
    ],
    ctaText: "View Our Terminals",
    ctaLink: "/products"
  },
  // Additional Voice Search Optimized Questions
  {
    slug: "can-i-accept-cards-without-business-account",
    question: "Can I accept card payments without a business bank account?",
    metaTitle: "Accept Cards Without Business Account UK | Sole Trader | Rocket Payments",
    metaDescription: "Yes, sole traders can accept card payments without a business bank account. Rocket Payments can settle funds to any UK bank account in your name.",
    keywords: "card payments no business account, sole trader card machine, personal account card payments, accept cards without business bank",
    category: "Setup & Getting Started",
    shortAnswer: "Yes, you can accept card payments without a business bank account. Sole traders and freelancers can use a personal bank account to receive card payment settlements. Rocket Payments can settle funds to any UK bank account in your name.",
    detailedAnswer: [
      "Good news for sole traders and new businesses - you don't need a business bank account to accept card payments:",
      "Personal account settlements: Rocket Payments can send your card payment funds to any UK bank account in your trading name or personal name (for sole traders).",
      "Sole trader requirements: You just need a UK bank account in your own name and proof of your trading identity.",
      "Limited company requirements: Limited companies typically need a business bank account as the company is a separate legal entity.",
      "Is a business account better? While not required, a business account can help separate personal and business finances, making accounting easier.",
      "Getting started: When you apply with Rocket Payments, simply provide your personal bank details if you're a sole trader. We'll settle funds there just as quickly as to a business account.",
      "Future-proofing: As your business grows, you can update your settlement account to a business account at any time - no interruption to your payment processing."
    ],
    relatedQuestions: [
      "how-do-i-set-up-tap-to-pay",
      "what-documents-need-card-machine",
      "how-long-to-receive-card-payments"
    ],
    ctaText: "Apply as Sole Trader",
    ctaLink: "/free-terminal"
  },
  {
    slug: "what-documents-need-card-machine",
    question: "What documents do I need to get a card machine UK?",
    metaTitle: "What Documents for Card Machine UK? | Application Guide | Rocket Payments",
    metaDescription: "To get a card machine UK you need: ID, bank details, and business information. Rocket Payments has minimal requirements and same-day approval available.",
    keywords: "card machine documents, card machine application, what need for card machine, card machine requirements UK",
    category: "Setup & Getting Started",
    shortAnswer: "To get a card machine with Rocket Payments, you need: proof of identity (passport or driving licence), UK bank account details, and basic business information. Most applications complete online in minutes with same-day approval.",
    detailedAnswer: [
      "Getting a card machine requires minimal documentation. Here's what you'll need:",
      "Proof of identity: Passport or UK driving licence. Used to verify you are who you claim to be.",
      "Proof of address: Recent utility bill, bank statement, or council tax bill (usually within 3 months).",
      "Bank account details: Sort code and account number where you want funds settled. For sole traders, this can be a personal account.",
      "Business information: Your business name, address, type of business, and estimated card transaction volume.",
      "For limited companies: Certificate of incorporation and registered office address may be required.",
      "For existing businesses: Some providers ask for recent bank statements or card processing statements if you're switching providers.",
      "Rocket Payments process: Our online application takes about 5 minutes. We verify identity digitally in most cases - no need to post documents. Same-day approval is common."
    ],
    relatedQuestions: [
      "can-i-accept-cards-without-business-account",
      "how-quickly-get-card-machine",
      "how-do-i-set-up-tap-to-pay"
    ],
    ctaText: "Start Your Application",
    ctaLink: "/quote"
  },
  {
    slug: "best-card-machine-small-business",
    question: "What is the best card machine for small business UK?",
    metaTitle: "Best Card Machine for Small Business UK 2025 | Expert Picks | Rocket Payments",
    metaDescription: "The best card machine for UK small businesses is Rocket Payments' FREE Tap to Pay or Rocket Go terminal. Lowest rates from 0.29%, no monthly fees.",
    keywords: "best card machine small business, small business card reader, card machine for SME, affordable card terminal small business",
    category: "Card Machines",
    shortAnswer: "The best card machine for UK small businesses is Rocket Payments' FREE Tap to Pay for zero-cost entry, or Rocket Go for a physical terminal. Both offer the lowest rates from 0.29%, no monthly fees, and professional features that grow with your business.",
    detailedAnswer: [
      "Choosing the best card machine for your small business depends on your specific needs:",
      "For zero startup cost: FREE Tap to Pay - use your iPhone to accept payments. No hardware cost, no monthly fees, rates from 0.29%. Perfect for market traders, freelancers, and new businesses.",
      "For all-round reliability: Rocket Go - portable 4G terminal that works anywhere. Built-in printer for receipts, all-day battery, rates from 0.29%. Ideal for shops, cafes, and mobile businesses.",
      "For table service: Rocket Pocket - sleek, lightweight portable terminal. Perfect for restaurants and hospitality where you bring payment to customers.",
      "For fixed counters: Rocket Wired - reliable countertop terminal connected via ethernet or WiFi. Best for retail with dedicated checkout points.",
      "What makes these the best: Lowest rates in the UK (from 0.29%), no monthly fees, next-day settlements, 600+ EPOS integrations, UK-based support.",
      "What to avoid: High-rate providers like Square (1.75%) or SumUp (1.69%) cost small businesses significantly more. A shop processing £3,000/month saves over £40 monthly with Rocket Payments versus these alternatives."
    ],
    relatedQuestions: [
      "what-is-the-cheapest-card-machine-uk",
      "how-much-does-a-card-machine-cost-uk",
      "can-i-use-my-phone-as-card-machine"
    ],
    ctaText: "Find Your Perfect Terminal",
    ctaLink: "/products"
  },
  {
    slug: "card-machine-for-market-stall",
    question: "What card machine is best for market stalls UK?",
    metaTitle: "Best Card Machine for Market Stalls UK 2025 | FREE Options | Rocket Payments",
    metaDescription: "The best card machine for UK market stalls is FREE Tap to Pay - no hardware, no fees, works anywhere. Or Rocket Go for printed receipts. From 0.29%.",
    keywords: "market stall card machine, market trader card reader, outdoor card machine, pop up shop payments, craft fair card machine",
    category: "Card Machines",
    shortAnswer: "The best card machine for UK market stalls is Rocket Payments' FREE Tap to Pay. It's completely free (no hardware or monthly fees), works anywhere with phone signal, and rates start from 0.29%. For traders wanting printed receipts, Rocket Go is ideal with built-in 4G.",
    detailedAnswer: [
      "Market traders have specific needs - here's what works best:",
      "FREE Tap to Pay: Best for most market traders. Zero cost (no hardware, no fees), works anywhere with phone signal, accepts all contactless payments, and you only pay from 0.29% when you make a sale. Perfect for traders testing the waters or wanting minimum overhead.",
      "Rocket Go: Best for traders wanting printed receipts or processing chip & PIN. Portable 4G terminal works at any market or event. All-day battery handles busy market days. Same low rates from 0.29%.",
      "Why these beat alternatives: SumUp Air (1.69%) and Zettle (1.75%) charge 5-6x more per debit transaction than Rocket Payments. On a £500 market day, that's £8.45 with SumUp versus £1.45 with Rocket Payments.",
      "Practical considerations: Tap to Pay needs an iPhone with signal. Rocket Go has built-in 4G so works even in signal-weak areas. Both handle the variable outdoor conditions markets involve.",
      "Getting started: Apply online, get approved same-day, and you could be accepting card payments at your next market. No contracts or long-term commitments."
    ],
    relatedQuestions: [
      "can-i-use-my-phone-as-card-machine",
      "what-is-the-cheapest-card-machine-uk",
      "do-i-need-internet-for-card-machine"
    ],
    ctaText: "Get FREE Tap to Pay",
    ctaLink: "/products/tap-to-pay"
  },
  {
    slug: "card-machine-for-restaurant",
    question: "What is the best card machine for restaurants UK?",
    metaTitle: "Best Card Machine for Restaurants UK 2025 | Hospitality | Rocket Payments",
    metaDescription: "The best card machines for UK restaurants are Rocket Pocket for table service and Rocket Go for counter service. Low rates from 0.29%, EPOS integration.",
    keywords: "restaurant card machine, hospitality payment terminal, table service card machine, pub card reader, cafe payment solution",
    category: "Card Machines",
    shortAnswer: "The best card machines for UK restaurants are Rocket Pocket for table service (sleek, lightweight, perfect at tableside) and Rocket Wired for fixed points. Both integrate with major EPOS systems, offer rates from 0.29%, and handle high-volume hospitality environments.",
    detailedAnswer: [
      "Restaurants have specific payment needs. Here are the best options:",
      "Rocket Pocket: Best for table service. Lightweight, elegant design that's comfortable to carry. Long battery for full service. Customers love the modern experience. Integrates with hospitality EPOS systems.",
      "Rocket Go: Best for versatility. Works at tables, bar, or outdoor seating. Built-in 4G means it works even if WiFi goes down. Great for restaurants wanting one terminal that does everything.",
      "Rocket Wired: Best for fixed payment points. Reliable ethernet/WiFi connection at the bar or counter. Handles high-speed service during rushes.",
      "EPOS integration: Rocket Payments connects with Lightspeed Restaurant, Tevalis, Goodtill, and 600+ other systems. Amounts transfer automatically from your till to the terminal - no manual entry errors.",
      "Tipping features: All terminals support tipping prompts, helping increase gratuities for your staff.",
      "Why hospitality chooses us: Low rates (from 0.29%) matter in tight-margin hospitality. Next-day settlements help cash flow. UK support understands restaurant challenges."
    ],
    relatedQuestions: [
      "how-does-epos-integration-work",
      "best-card-machine-small-business",
      "how-long-to-receive-card-payments"
    ],
    ctaText: "Hospitality Solutions",
    ctaLink: "/industries"
  }
];

export const getQABySlug = (slug: string): QAPage | undefined => {
  return qaPages.find(page => page.slug === slug);
};

export const getAllQASlugs = (): string[] => {
  return qaPages.map(page => page.slug);
};

export const getQAByCategory = (category: string): QAPage[] => {
  return qaPages.filter(page => page.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(qaPages.map(page => page.category)));
};
