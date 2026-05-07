# Blueprint: Free + Shipping Funnel

## Overview

The Free + Shipping Funnel offers a physical product (usually a book, DVD, or starter kit) for free where the customer only covers shipping costs ($5-$15). This is the purest form of Brunson's frontend customer acquisition strategy. The product itself is a gift that builds immense goodwill and authority. The shipping charge covers product cost while the upsell sequence generates the actual profit. This funnel type is proven to convert cold traffic better than almost any other because the perceived risk is nearly zero.

---

## Architecture Diagram

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   TRAFFIC    │────>│  LANDING     │────>│  ORDER FORM  │
│  (Cold Ads)  │     │  PAGE        │     │  (Ship only) │
└─────────────┘     │  "FREE +     │     │  $5.95-14.95 │
                     │   Shipping"  │     └──────┬───────┘
                     └──────────────┘            │
                                          ┌──────▼───────┐
                                          │  ORDER BUMP  │
                                          │  ($17-$47)   │
                                          └──────┬───────┘
                                                 │
                                          ┌──────▼───────┐
                                          │  OTO #1      │
                                          │  ($37-$97)   │
                                          │  Complement  │
                                          └──────┬───────┘
                                                 │
                                          ┌──────▼───────┐
                                          │  OTO #2      │
                                          │  ($97-$297)  │
                                          │  Deep Dive   │
                                          └──────┬───────┘
                                                 │
                                          ┌──────▼───────┐
                                          │  THANK YOU   │
                                          │  + Share     │
                                          └──────────────┘

     ┌──────────────────────────────────────────────────┐
     │  FULFILLMENT PIPELINE                             │
     │  Order --> Print/Pack --> Ship --> Track --> Deliver│
     └──────────────────────────────────────────────────┘
```

---

## Components

### Landing Page
- Hero: "Get [Product] FREE -- Just Cover Shipping"
- 3D product mockup
- What is inside (3-5 compelling bullet points)
- Author/creator authority section
- Testimonials from users
- FAQ: shipping times, guarantee, what they receive
- CTA: "Ship My Free Copy"

### Order Form
- Shipping address + payment for shipping only
- Order bump: related digital or physical add-on
- Trust badges and guarantee
- Shipping cost clearly displayed

### Upsell Sequence
- OTO 1: Digital complement (video training, audiobook, templates)
- OTO 2: Deeper implementation resource (course module, toolkit)
- Each OTO is one-click add-on (payment already captured)
- Short pitch: 60-90 second video or 200-word copy

### Fulfillment
- Print-on-demand (lower margin, zero inventory) or bulk print (higher margin)
- Shipping provider integration (USPS, FedEx, international options)
- Tracking email sent automatically
- Delivery confirmation triggers next email sequence

---

## Implementation Steps

1. Create the physical product (book is most common)
2. Source printing and fulfillment (print-on-demand or bulk)
3. Calculate true cost per unit (print + packaging + shipping)
4. Set shipping price to cover costs or slight margin
5. Create the order bump digital product
6. Create OTO products (digital preferred for instant delivery)
7. Build the landing page with product mockup and copy
8. Build order form, bump, and OTO pages
9. Integrate fulfillment provider with order system
10. Set up shipping confirmation and tracking emails
11. Write the post-delivery email sequence (SOS starting after delivery)
12. Test with real orders (including international if applicable)
13. Launch with paid traffic at $20-$50/day

---

## Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Landing Conversion | 8-20% | Orders / Page visitors |
| Order Bump Rate | 25-40% | Bumps / Orders |
| OTO 1 Take Rate | 15-25% | OTO1 / Orders |
| OTO 2 Take Rate | 8-15% | OTO2 / OTO1 viewers |
| Average Cart Value | $20-$50 | Total revenue / Orders |
| Product Cost Per Unit | $3-$7 | Print + pack cost |
| Shipping Margin | Break-even | Charged shipping - actual cost |
| 60-Day LTV | $50-$120 | Total value per buyer including email offers |

**Goal:** Break even or slight profit on the funnel itself. Real ROI comes from the customer relationship and Value Ladder ascension over 30-90 days.

---

*Value Ladder Position: Rung 1 (Bait -- Physical)*
*Traffic Temperature: Cold*
*Complexity: Medium (requires physical fulfillment logistics)*
