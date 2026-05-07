# Blueprint: Coaching Funnel

## Overview

The Coaching Funnel sells high-ticket group or 1-on-1 coaching programs ($2,000-$25,000+) using a hybrid of content, application, and personal sales. It combines elements of the webinar funnel (for belief-building) and the application funnel (for qualification) into a pipeline that converts committed prospects into coaching clients. This is a key middle-to-backend funnel that generates significant profit per client while delivering deep transformation.

---

## Architecture Diagram

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   TRAFFIC    │────>│ FREE VALUE   │────>│ COACHING     │
│  (Warm List  │     │ (Webinar,    │     │ SALES PAGE   │
│   or D100)   │     │  Challenge,  │     │ or VSL       │
└─────────────┘     │  or Content) │     └──────┬───────┘
                     └──────────────┘            │
                                          ┌──────▼───────┐
                                          │ APPLICATION  │
                                          │ FORM         │
                                          │ (15-20 Qs)   │
                                          └──────┬───────┘
                                                 │
                                          ┌──────▼───────┐
                                          │ SCHEDULING   │
                                          │ PAGE         │
                                          │ (Book Call)  │
                                          └──────┬───────┘
                                                 │
                     ┌───────────────────────────┤
                     │ PRE-CALL NURTURE          │
                     │ (2-3 emails + homework)    │
                     └───────────┬───────────────┘
                                 │
                          ┌──────▼───────┐
                          │ STRATEGY     │
                          │ CALL         │
                          │ (45-60 min)  │
                          └──────┬───────┘
                                 │
                    ┌────────────┼────────────┐
                    │                         │
              ┌─────▼────┐              ┌─────▼────┐
              │  CLOSED   │              │  NURTURE │
              │  CLIENT   │              │  SEQUENCE│
              │  $2K-25K+ │              │  (14 day)│
              └────┬──────┘              └──────────┘
                   │
              ┌────▼──────┐
              │ CLIENT    │
              │ ONBOARDING│
              │ (7 days)  │
              └───────────┘
```

---

## Components

### Free Value Stage (Pre-Qualification)
- Webinar, challenge, or content series that demonstrates your coaching methodology
- Builds belief in your approach and creates desire for deeper help
- Identifies who wants more (the hand-raisers)
- CTA: "If you want personalized help, apply for coaching"

### Coaching Sales Page / VSL
- Case studies of coaching clients and their transformations
- Your coaching philosophy and methodology
- What the coaching program includes (sessions, resources, access)
- "This is NOT for everyone" positioning (exclusivity)
- CTA: "Apply Now" (not "Buy Now")
- No price on the page

### Application Form
- Business/life situation questions (where are they now?)
- Goals and desired outcomes (where do they want to be?)
- Commitment level (time, money, effort they can invest)
- Why they want to work with YOU specifically
- Decision-maker confirmation (can they say yes without asking someone else?)
- Budget range question (qualify financial fit)

### Strategy Call (45-60 min)
- **Discovery (15 min):** Understand their situation deeply
- **Gap Analysis (10 min):** Show the gap between where they are and where they want to be
- **Solution Presentation (15 min):** How your coaching bridges the gap
- **Close (15 min):** Present investment, handle objections, get commitment
- **If not closing:** Schedule follow-up within 48 hours

### Client Onboarding (First 7 days)
- Welcome email with program access and schedule
- Intake questionnaire for personalized coaching plan
- First coaching session scheduled within 7 days
- Community access activated
- Quick win assignment (something they can accomplish in 48 hours)

---

## Implementation Steps

1. Define the coaching program structure (duration, frequency, format)
2. Set the price based on transformation value and market positioning
3. Create the free value content (webinar or challenge)
4. Build the coaching sales page with case studies
5. Design the application form with qualifying questions
6. Set up scheduling tool with pre-call automation
7. Write pre-call email sequence (confirmation, preparation, testimonial)
8. Develop the strategy call script
9. Write post-call follow-up sequences (closed and not-closed)
10. Build the client onboarding workflow
11. Create the coaching delivery system (Zoom, Slack, platform)
12. Launch with warm traffic first (email list, past customers)

---

## Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Application Rate | 5-15% | Applications / Sales page visitors |
| Qualified Rate | 40-60% | Qualified / Total applications |
| Call Booking Rate | 70-85% | Calls booked / Qualified applicants |
| Call Show Rate | 75-90% | Showed / Booked |
| Close Rate | 20-35% | Closed / Calls completed |
| Client Retention | 80-90% | Clients who complete program |
| Client Results Rate | 70-80% | Clients who achieve stated goal |
| Referral Rate | 20-30% | New clients from existing client referrals |
| Revenue Per Client | $2K-$25K | Program price x completion rate |

**Goal:** High-quality clients who achieve transformations, generate testimonials, and refer others.

---

*Value Ladder Position: Rung 3-4 (Middle to Backend)*
*Traffic Temperature: Warm to Hot*
*Complexity: High (requires call capacity and coaching delivery)*
