# Email Deliverability Checklist

> Source: Traffic Secrets + Industry Best Practices
> Version: 1.0
> Use: Monthly review of email deliverability health

---

## Pre-Requisites
- [ ] Email service provider account active
- [ ] Sending domain configured
- [ ] At least one email sequence active
- [ ] Access to email analytics dashboard

---

## STEP 1: Technical Foundation

### 1.1 Domain Authentication
- [ ] SPF record configured and passing
- [ ] DKIM record configured and passing
- [ ] DMARC policy published
- [ ] Custom sending domain set up (not provider default)
- [ ] Domain reputation checked (Google Postmaster Tools)

### 1.2 Infrastructure
- [ ] Dedicated IP or shared IP with good reputation
- [ ] Sending volume consistent (no sudden spikes)
- [ ] New domains warmed up properly (gradual volume increase)
- [ ] Bounce handling automatic (hard bounces removed immediately)
- [ ] Feedback loop registered with major ISPs

---

## STEP 2: List Hygiene

### 2.1 List Quality
- [ ] Double opt-in enabled (or confirmed opt-in at minimum)
- [ ] No purchased or rented email lists used
- [ ] Hard bounces removed after first occurrence
- [ ] Soft bounces removed after 3 consecutive failures
- [ ] Role-based addresses removed (info@, admin@, etc.)

### 2.2 Regular Cleaning
- [ ] List cleaned monthly (remove non-engagers after 90 days)
- [ ] Re-engagement campaign sent before removal
- [ ] Inactive subscribers moved to separate cold segment
- [ ] List growth rate exceeds churn rate
- [ ] Email verification service used on imports

---

## STEP 3: Content Best Practices

### 3.1 Email Composition
- [ ] Subject lines avoid spam trigger words (free, act now, $$)
- [ ] Text-to-image ratio is healthy (more text than images)
- [ ] No ALL CAPS in subject line or body
- [ ] Unsubscribe link present and functional
- [ ] Physical mailing address included in footer

### 3.2 Engagement Optimization
- [ ] Emails personalized (at minimum: first name)
- [ ] Content relevant to the segment receiving it
- [ ] Sending frequency matches subscriber expectations
- [ ] Reply mechanism encouraged ("reply and tell me...")
- [ ] Mobile-friendly formatting (short lines, no wide images)

---

## STEP 4: Monitoring Metrics

### 4.1 Key Deliverability Metrics
- [ ] Delivery rate above 95%
- [ ] Open rate above 20% (industry varies)
- [ ] Click rate above 2%
- [ ] Bounce rate below 2%
- [ ] Spam complaint rate below 0.1%
- [ ] Unsubscribe rate below 0.5% per email

### 4.2 Inbox Placement
- [ ] Test emails to Gmail, Yahoo, Outlook accounts monthly
- [ ] Emails landing in Primary tab (not Promotions/Spam)
- [ ] Seed testing with inbox placement tool (if available)
- [ ] No blacklist listings (check MXToolbox monthly)
- [ ] Sender Score above 80

---

## STEP 5: Compliance

### 5.1 Legal Requirements
- [ ] CAN-SPAM compliance (US): unsubscribe, physical address, no deceptive subjects
- [ ] GDPR compliance (EU): consent, data rights, privacy policy
- [ ] CCPA compliance (California): opt-out mechanism, data handling
- [ ] Unsubscribe requests processed within 10 business days
- [ ] Privacy policy on opt-in pages links to current document

### 5.2 Best Practice Standards
- [ ] Opt-in consent clear and explicit on forms
- [ ] No pre-checked consent boxes
- [ ] Frequency expectations set at opt-in
- [ ] Easy unsubscribe (one-click, no login required)
- [ ] Preference center available (manage vs. unsubscribe all)

---

## STEP 6: Recovery Actions

### 6.1 If Deliverability Drops
- [ ] Check for blacklisting immediately
- [ ] Review recent content for spam trigger changes
- [ ] Reduce sending volume temporarily
- [ ] Send only to most engaged segment for 2 weeks
- [ ] Contact ESP for deliverability support

---

## Validation
- [ ] All technical records verified (SPF, DKIM, DMARC)
- [ ] List cleaned within last 30 days
- [ ] Inbox placement tested this month
- [ ] All metrics within healthy ranges
- [ ] No blacklist or reputation issues detected

---

## Scoring
- 28-32/32 = Excellent deliverability health
- 22-27/32 = Good health, address minor issues
- 16-21/32 = Deliverability at risk, take immediate action
- Below 16 = Critical: emails likely hitting spam, emergency fixes needed

---

**Checklist Version:** 1.0
**Based on:** Traffic Secrets + Email Deliverability Best Practices
