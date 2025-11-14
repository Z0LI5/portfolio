---
title: "VCC Portal — Donations, Services, and Community Platform"
date: "2025-11-03"
summary: "A full-stack Next.js platform enabling devotees to donate, request temple services, participate in events, and engage with temple leadership. Built with Prisma, Auth.js, Square Payments, and a fully role-based permissions system."
tags: "NEXTjs, Full Stack, Vercel, Prisma"
---

---

## **Overview**

The **VCC Portal** <a href="https://vcc-services.vercel.app/" target="_blank"> (link to website)</a> is a full-stack platform that centralizes temple operations—donations, services, events, and admin management—into a single modern interface. Devotees can donate, request poojas, sign up for events, and manage their accounts, while moderators and admins handle scheduling, fulfillment, and system-wide configuration. The platform emphasizes security, scalability, and a clean user experience across multiple temple locations.

Key capabilities include:

- Unified donations and donation drives
- Temple service requests with questionnaires
- Event and volunteer registration
- Role-based dashboards
- Admin tooling for services, users, and finances

---

## **Tech Stack**

### **Frontend**

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS + shadcn/ui**

### **Backend**

- **Next.js Route Handlers** (serverless)
- **Prisma ORM**
- **PostgreSQL** (Neon → migrating to AWS or Azure)
- **Auth.js + Google OAuth**
- **Square Payments + Webhooks**
- **Vercel** deployment for both client and API

### **Data Design**

- Typed, schema-driven with Prisma
- Soft deletes for all major entities
- Modular tables for services, donation drives, permissions, and questionnaires

---

## **Implementation**

### **Roles**

The platform uses granular RBAC (role-based access control):

- **User**

  - Access services, donations, events
  - Manage personal dashboard

- **Moderator**

  - Create/update services
  - Manage donation drives
  - Review and fulfill service requests

- **Admin**

  - Full access across temples
  - Finance oversight, system settings, staff management

Core features implemented through RBAC:

- Conditional dashboard rendering
- API route authorization middleware
- Permission escalation paths
- Safe database queries with role guards

---

### **Payments**

The payment flow integrates tightly with **Square**:

- **Cart-based checkout** for services and donations
- **Orders API** used as the single source of truth
- **Webhooks** for reconciliation
- **Idempotency keys** to prevent:

  - Duplicate donations
  - Duplicate service payments

- **Post-payment updates**:

  - Mark service requests as paid
  - Attribute donations to drives
  - Update pledges vs. completed payments
  - Notify users and admins

Supporting features:

- Payment status tracking
- Drive goal progress calculation
- Donation history in user dashboards

---

### **Authentication**

Authentication is powered by **Auth.js with Google OAuth**:

- Simple, passwordless login flow
- Sessions stored in PostgreSQL
- Automatic user provisioning
- Role assignment via admin tools
- Secure route handling with middleware

Additional identity features:

- Phone/email collection
- Linked OAuth accounts
- Session expiration + refresh logic

---

## **Challenges**

Major technical challenges and solutions:

- **Duplicate donations**

  - Cause: race conditions + webhook retries
  - Fix: idempotency keys, DB uniqueness constraints

- **Serverless webhook stability**

  - Issue: Vercel creates ephemeral function URLs
  - Fix: stable API routes + idempotent update logic

- **Square’s Orders vs Payments mismatch**

  - Problem: data split across APIs
  - Solution: treat Orders API as canonical

- **Complex service questionnaires**

  - Need: multi-step flows with custom fields
  - Result: unified questionnaire + ServiceRequest model

---

## **Conclusion**

The VCC Portal is evolving into a scalable digital ecosystem for temples—supporting donations, poojas, community events, and administrative workflows in one unified system. With a typed TypeScript codebase, modular database design, robust payment integration, and polished UI, the platform is well-positioned to expand into recurring donations, deeper calendar systems, full email automation, and multi-location administration.
