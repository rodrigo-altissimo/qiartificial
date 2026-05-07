# Blueprint: Book Funnel (Free + Shipping)

## Overview

The Book Funnel is Russell Brunson's signature frontend funnel, used to launch both DotCom Secrets and Expert Secrets. You offer a physical book for free -- the customer only pays shipping ($7-$15). The book itself is a lead generation and authority-building tool. Profit comes entirely from the upsell sequence on the backend. This funnel creates maximum goodwill while converting cold traffic into buyers at scale.

---

## Architecture Diagram

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   TRAFFIC    │────>│  BOOK        │────>│  ORDER FORM  │
│  (Ads/D100)  │     │  LANDING PG  │     │  (Free+Ship) │
└─────────────┘     │  (VSL or     │     │  $7.95-14.95 │
                     │   Long Copy) │     │  + ORDER BUMP│
                     └──────────────┘     └──────┬───────┘
                                                  │
                                           ┌──────▼───────┐
                                           │  OTO #1      │
                                           │  Audiobook or│
                                           │  Course      │
                                           │  ($37-$97)   │
                                           └──────┬───────┘
                                                  │
                                           ┌──────▼───────┐
                                           │  OTO #2      │
                                           │  Premium     │
                                           │  Offer       │
                                           │  ($97-$297)  │
                                           └──────┬───────┘
                                                  │
                                           ┌──────▼───────┐
                                           │  OTO #3      │
                                           │  High-Value  │
                                           │  ($297-$997) │
                                           └──────┬───────┘
                                                  │
                                           ┌──────▼───────┐
                                           │  THANK YOU   │
                                           │  (Share pg)  │
                                           └──────────────┘

                     ┌──────────────────────────────────────┐
                     │  POST-PURCHASE EMAIL SEQUENCE         │
                     │  Day 1: Book shipped confirmation     │
                     │  Day 3: "While you wait" content      │
                     │  Day 7: "Did you get it?" + content   │
                     │  Day 14: Ascension to next offer      │
                     └──────────────────────────────────────┘
```

---

## Components

### Book Landing Page
- Strong headline: "Get My New Book FREE (Just Cover Shipping)"
- Book mockup image (3D render)
- Author credibility section
- Table of contents or chapter highlights (3-5 most compelling chapters)
- Testimonials from readers or endorsements
- "Who This Book Is For" section
- FAQ addressing shipping, guarantee, and what they receive
- CTA: "Get Your Free Copy"

### Order Form
- Pre-populated with email from any previous opt-in
- Shipping address fields
- Shipping cost ($7.95-$14.95)
- **Order Bump:** Companion workbook, quick-start guide, or audiobook ($17-$37)

### Upsell Sequence (3 OTOs)
- **OTO 1:** Audiobook or video training version ($37-$97)
- **OTO 2:** Implementation course or toolkit ($97-$297)
- **OTO 3:** Premium coaching access or event ticket ($297-$997)
- Each is a one-click add to existing order

### Thank You / Share Page
- Confirm order and set shipping expectations
- Social sharing buttons ("Tell your friends about this free book")
- Viral referral mechanism (share for bonus content)

### Email Follow-Up
- Shipping confirmation with tracking
- Content emails while they wait for the book
- Book discussion emails after estimated delivery
- Ascension offer 14-21 days after purchase

---

## Implementation Steps

1. Write or finalize the book (200-300 pages recommended)
2. Design the cover and get a 3D mockup created
3. Set up print-on-demand or bulk printing + fulfillment
4. Build the landing page with VSL or long-form copy
5. Configure the order form with shipping calculation
6. Create the order bump product
7. Design and build 3 OTO upsell pages
8. Write all email sequences (shipping, value, ascension)
9. Set up the thank you page with sharing mechanism
10. Test the complete funnel including real shipping
11. Launch with $20-$50/day in paid traffic

---

## Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Landing Page Conversion | 10-25% | Orders / Page visitors |
| Order Bump Rate | 25-40% | Bumps / Orders |
| OTO 1 Take Rate | 20-30% | OTO1 / Orders |
| OTO 2 Take Rate | 10-20% | OTO2 / OTO1 viewers |
| OTO 3 Take Rate | 5-15% | OTO3 / OTO2 viewers |
| Average Cart Value | $25-$60 | Total revenue / Total orders |
| Cost Per Book Buyer | $10-$25 | Ad spend / Orders |
| Shipping Margin | Break-even | Shipping charged - actual shipping cost |
| 30-Day LTV | $40-$100 | Total revenue per buyer in first 30 days |

**Goal:** ACV (Average Cart Value) must exceed CPA (Cost Per Acquisition) for the funnel to be self-liquidating. Long-term profit comes from the Value Ladder ascension.

---

*Value Ladder Position: Rung 1 (Bait)*
*Traffic Temperature: Cold*
*Complexity: Medium (requires physical fulfillment)*
