# Blueprint: Application Funnel

## Overview

The Application Funnel is the standard backend funnel for selling high-ticket offers ($3,000-$100,000+). Instead of a direct sales page, prospects must apply and be accepted. This flips the power dynamic -- they are asking YOU for the privilege of buying. The application process qualifies leads, creates commitment, and positions your offer as exclusive. A phone call (or video call) closes the sale after the application is reviewed.

---

## Architecture Diagram

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│   TRAFFIC    │────>│  CASE STUDY  │────>│ APPLICATION  │
│  (Warm/Hot)  │     │  / VSL PAGE  │     │    FORM      │
└─────────────┘     │  (15-45 min  │     │  (10-20 Qs)  │
                     │   video)     │     └──────┬───────┘
                     └──────────────┘            │
                                           ┌─────▼──────┐
                                           │ THANK YOU  │
                                           │ "App       │
                                           │ Received"  │
                                           └─────┬──────┘
                                                 │
                     ┌───────────────────────────┤
                     │  INTERNAL PROCESS          │
                     │                            │
                     │  1. Review application      │
                     │  2. Score and qualify        │
                     │  3. Schedule call (if qual)  │
                     │  4. Pre-call email sequence  │
                     └───────────┬────────────────┘
                                 │
                          ┌──────▼───────┐
                          │  STRATEGY    │
                          │  CALL        │
                          │  (30-60 min) │
                          └──────┬───────┘
                                 │
                    ┌────────────┼────────────┐
                    │                         │
              ┌─────▼────┐              ┌─────▼────┐
              │  CLOSED   │              │  FOLLOW  │
              │  (Payment │              │  UP SEQ  │
              │   link)   │              │  (7 days)│
              └──────────┘              └──────────┘
```

---

## Components

### Case Study / VSL Page
- Long-form video (15-45 minutes) or written case study page
- Tells your story and demonstrates transformation results
- Social proof: client results, testimonials, credentials
- Ends with invitation to apply (not a direct sales pitch)
- CTA: "Apply Now" (language implies selectivity)
- No price mentioned on this page

### Application Form (10-20 questions)
- Contact information (name, email, phone)
- Business information (industry, revenue, team size)
- Current situation (where they are now)
- Goals (where they want to be)
- Commitment level (timeline, budget range, decision-making authority)
- Why they want to work with you
- Qualifying questions that reveal if they are a fit

**Key principle:** The application should feel like a college or job application -- serious, selective, meaningful.

### Thank You Page
- Confirm application received
- Set expectations: "We review every application personally"
- Estimated response time (24-48 hours)
- Optional: pre-call homework or content to consume

### Pre-Call Email Sequence (2-3 emails)
- Application confirmation + what to expect on the call
- Success story of a similar client
- "Prepare for your call" email with logistics

### Strategy Call (30-60 minutes)
- Discovery: understand their current situation and goals
- Present the gap: where they are vs. where they want to be
- Present the solution: how your program bridges the gap
- Handle objections with Epiphany Bridge stories
- Close: present the investment and next steps
- If not closing on call: schedule follow-up

### Post-Call Follow-Up
- Immediate: recap email with program details and payment link
- Day 1-2: Testimonial and case study email
- Day 3-4: Objection-handling email
- Day 5-7: Final "decision deadline" email

---

## Implementation Steps

1. Create the case study / VSL video (15-45 min)
2. Build the landing page with video and apply CTA
3. Design the application form with qualifying questions
4. Set up the thank you page and confirmation emails
5. Create the pre-call email sequence
6. Develop the strategy call script (discovery + presentation + close)
7. Train sales team on the call process (if applicable)
8. Configure scheduling tool (Calendly or similar)
9. Write the post-call follow-up email sequence
10. Set up application review workflow and scoring criteria
11. Launch with warm traffic (email list, webinar attendees, community members)

---

## Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| VSL Page to Application | 5-15% | Applications / Page visitors |
| Application Completion | 60-80% | Completed / Started applications |
| Qualified Rate | 30-50% | Qualified apps / Total applications |
| Call Booking Rate | 60-80% | Calls booked / Qualified applicants |
| Call Show Rate | 70-85% | Showed / Booked calls |
| Call Close Rate | 15-30% | Closed / Calls completed |
| Revenue Per Application | Varies | Total revenue / Total applications |
| Cost Per Qualified App | $50-$200 | Ad spend / Qualified applications |

**Goal:** High close rates on calls because the application pre-qualifies and pre-commits the prospect.

---

*Value Ladder Position: Rung 3-4 (Middle to Backend)*
*Traffic Temperature: Warm to Hot*
*Complexity: High (requires sales team or personal call capacity)*
