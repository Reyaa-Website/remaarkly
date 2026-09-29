# Remaarkly & PetRoute SaaS Platform

A modern, high-conversion marketing website and administrative command center for **Remaarkly**, a tech SaaS parent brand, featuring its flagship product **PetRoute** — the unified Operating System for Pet Import and Export Management companies worldwide.

---

## 🚀 Key Features

### 🌐 Public Marketing Website
- **Modern SaaS Aesthetics**: Designed with a sleek aesthetic inspired by Linear, Stripe, and Vercel (dark/light theme, glassmorphism, glowing gradients, subtle grid patterns, micro-interactions).
- **Home Page**:
  - Parent brand showcase presenting Remaarkly’s purpose-built software engineering philosophy.
  - Interactive **PetRoute Flagship Showcase** with a 5-module tab explorer:
    1. **Enquiry & Quoting**: Instant dynamic rate estimation & IATA CR-82 crate calculation.
    2. **Booking & Compliance**: DEFRA, USDA, NParks, and DAFF automated rulebooks & titer test trackers.
    3. **Operations & Cargo**: Flight dispatching, airport ambient temperature checks & customs packets.
    4. **Customer Portal**: Pet parent live transit photos, milestone timeline & document vault.
    5. **Agent & Partner Portal**: Global customs broker collaboration & B2B disbursement tracking.
  - Live trust stats, architecture blueprints, feature grids, and conversion CTA banners.
- **About Page**: Highlights Remaarkly’s family-founded origins, mission, and long-term product principles.
- **Blog Section**: Dynamic listing page and individual article reader (`/blog/[slug]`) pulling formatted Markdown articles from the database with category filters and SEO metadata.
- **Contact Page**: Inbound enquiry form with product interest dropdown (defaults to PetRoute) that directly saves submissions to the database.
- **Request a Demo Page**: Dedicated qualification form capturing company name, country, and monthly booking volume with confetti feedback.

### 🛡️ Admin Command Center (`/admin`)
- **Authentication**: Secure credentials-based authentication with bcrypt password hashing and HTTP-only JWT session cookies.
- **Dashboard Overview**: Key performance indicators (total submissions, unread count, weekly volume, blog count), recent submissions, and quick action shortcuts.
- **Form Submissions Inbox (`/admin/submissions`)**:
  - Search and filter by submission type (`Demo Request` vs `Contact Enquiry`) and status (`Unread` vs `Read`).
  - Mark as read / unread toggle and delete actions.
  - Inspection drawer/modal displaying full customer details (monthly booking volume, phone, country, notes).
  - **One-Click CSV Export** directly downloading formatted CSV records.
- **Blog CMS (`/admin/blogs`)**:
  - Create, edit, and delete articles with live markdown preview.
  - Automated slug generation with custom override.
  - Image preset picker and featured image URL preview.
  - Granular category, author, read time, SEO meta title, and description fields.
  - Publish / Draft toggle.
- **Site Settings (`/admin/settings`)**: Update global contact details, support numbers, headquarters location, social links, and live announcements.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & Lucide Icons
- **Database & ORM**: Prisma ORM with SQLite for zero-config local development, with full PostgreSQL support (Supabase / Neon / Vercel Postgres).
- **Authentication**: JWT session tokens via `jose` with `bcryptjs` password hashing.
- **Theme**: Clean, high-contrast light theme with custom glassmorphism and radiant accents.

---

## 🏁 Quickstart & Local Setup

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Environment Variables
A `.env` file is included for instant local operation:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="remaarkly_super_secure_admin_jwt_secret_token_key_2026"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Initialize Database & Seed
Run Prisma to generate the database schema and populate seed data (Admin user, sample blogs, sample enquiries):
```bash
npx prisma db push
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Admin Credentials

To access the protected admin portal:
- **URL**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Email**: `admin@remaarkly.com`
- **Password**: `admin123456`

---

## 📦 Database Schema Reference

```prisma
model AdminUser {
  id           String   @id @default(cuid())
  email        String   @unique
  name         String?  @default("Admin User")
  passwordHash String
  role         String   @default("superadmin")
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model BlogPost {
  id             String    @id @default(cuid())
  title          String
  slug           String    @unique
  content        String
  excerpt        String?
  featuredImage  String?
  seoTitle       String?
  seoDescription String?
  category       String?   @default("Product & Industry")
  author         String?   @default("Remaarkly Team")
  readTime       String?   @default("4 min read")
  status         String    @default("draft")
  publishedAt    DateTime?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}

model FormSubmission {
  id              String   @id @default(cuid())
  type            String   // "contact" | "demo"
  name            String
  email           String
  phone           String?
  company         String?
  message         String?
  productInterest String?  @default("PetRoute")
  monthlyVolume   String?
  country         String?
  isRead          Boolean  @default(false)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model SiteSetting {
  id        String   @id @default(cuid())
  key       String   @unique
  value     String
  updatedAt DateTime @updatedAt
}
```

---

## ☁️ Deployment to Vercel

1. Push your code to GitHub.
2. In your Vercel Project Settings, add the environment variables:
   - `DATABASE_URL`: Your PostgreSQL connection string (from Neon, Supabase, or Vercel Postgres).
   - `JWT_SECRET`: A secure random secret string.
   - `NEXT_PUBLIC_APP_URL`: Your production domain.
3. If using PostgreSQL, update `datasource db` in `prisma/schema.prisma` from `provider = "sqlite"` to `provider = "postgresql"`.
4. Deploy!
