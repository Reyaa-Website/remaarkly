import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Remaarkly database...');

  // 1. Seed Admin User
  const adminEmail = 'admin@remaarkly.com';
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash('admin123456', 10);
    const admin = await prisma.adminUser.create({
      data: {
        email: adminEmail,
        name: 'Remaarkly Administrator',
        passwordHash,
        role: 'superadmin',
      },
    });
    console.log(`Created admin user: ${admin.email} (Password: admin123456)`);
  } else {
    console.log(`Admin user ${adminEmail} already exists.`);
  }

  // 2. Seed Default Site Settings
  const defaultSettings = [
    { key: 'contact_email', value: 'hello@remaarkly.com' },
    { key: 'support_email', value: 'support@remaarkly.com' },
    { key: 'contact_phone', value: '+1 (800) 555-PETS' },
    { key: 'office_location', value: 'San Francisco, CA & London, UK' },
    { key: 'twitter_url', value: 'https://twitter.com/remaarkly' },
    { key: 'linkedin_url', value: 'https://linkedin.com/company/remaarkly' },
    { key: 'github_url', value: 'https://github.com/remaarkly' },
    { key: 'banner_announcement', value: 'Announcing PetRoute 2.0: The unified Operating System for Global Pet Relocation & Logistics' },
  ];

  for (const setting of defaultSettings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: { key: setting.key, value: setting.value },
    });
  }
  console.log('Seeded site settings.');

  // 3. Seed Sample Blog Posts
  const sampleBlogs = [
    {
      title: 'Introducing PetRoute: The Operating System for Global Pet Relocation',
      slug: 'introducing-petroute-global-pet-relocation-os',
      category: 'Product Launch',
      readTime: '4 min read',
      author: 'Remaarkly Product Team',
      featuredImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'How we built PetRoute to solve the intricate regulatory compliance, airline logistics, and customer transparency challenges facing pet import/export agencies worldwide.',
      seoTitle: 'Introducing PetRoute - The Modern SaaS for Pet Import & Export Logistics',
      seoDescription: 'Discover PetRoute by Remaarkly: streamlining pet relocation with live quarantine tracking, airline booking, customs automation, and customer portals.',
      status: 'published',
      publishedAt: new Date('2026-02-15T10:00:00Z'),
      content: `### Transforming Global Pet Relocation

Global pet transport is one of the most high-stakes, operationally intense logistics verticals in the world. Unlike standard freight forwarding, live animal transit demands uncompromising adherence to **IATA Live Animals Regulations (LAR)**, country-specific veterinary health protocols, titer test timelines, import permits, and customs clearance procedures.

Until today, pet import/export specialists have juggled disconnected spreadsheets, disparate email threads, airline cargo portals, and manual WhatsApp updates.

### The Genesis of PetRoute

**PetRoute** was created by Remaarkly to eliminate this operational friction through a single, intelligent command center:

1. **Intelligent Enquiry & Instant Quote Engine**: Ingest customer enquiries from your website, calculate routing, airline crate dimensions (CR-82 compliance), and generate itemized quotes in seconds.
2. **End-to-End Booking & Compliance Workflows**: Dynamic milestone checklists adapted automatically to the destination country (e.g., DEFRA UK, USDA APHIS, Singapore NParks, Australia DAFF).
3. **Operations & Air Cargo Manifests**: Real-time flight tracking, vet appointment scheduling, ground transit dispatching, and customs declaration packet generation.
4. **Branded Customer Portal**: Provide nervous pet parents with real-time photo updates, flight status, GPS tracking, and digital document uploads.
5. **Global Agent & Partner Portal**: Seamlessly collaborate with origin/destination handling agents, share customs paperwork, and settle multi-currency disbursements.

### What Lies Ahead

PetRoute represents the foundational product in Remaarkly's mission to engineer high-utility, industry-specific SaaS platforms. Over the coming months, we will be rolling out automated biometric pet microchip scanning integrations and direct airline cargo API dispatching.`,
    },
    {
      title: 'Navigating International Pet Travel Regulations in 2026: A Guide for Relocation Specialists',
      slug: 'international-pet-travel-regulations-2026-guide',
      category: 'Industry Insights',
      readTime: '6 min read',
      author: 'Logistics Advisory Group',
      featuredImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'A comprehensive review of the latest rabies titer testing requirements, airline temperature embargoes, and electronic veterinary health certificate shifts.',
      seoTitle: '2026 International Pet Travel Regulations & Compliance Guide | PetRoute',
      seoDescription: 'Stay ahead of 2026 pet import/export compliance changes, airline crate standards, and customs automation for pet relocation agencies.',
      status: 'published',
      publishedAt: new Date('2026-03-01T14:30:00Z'),
      content: `### The Shifting Landscape of Live Animal Transport

Cross-border pet relocation has witnessed unprecedented regulatory modernization over the past 24 months. As government veterinary departments transition from paper health certificates to cryptographic digital clearances, forward-thinking relocation agencies must modernize their software stack.

### Key Regulatory Focus Areas

- **Digital E-Certificates (e-VetCerts)**: Standardized XML/JSON data interchange between customs authorities and certified veterinarians.
- **Strict Ambient Temperature Embargoes**: Major airlines now enforce strict ramp-temperature limits (minimum 7°C / 45°F and maximum 29°C / 85°F).
- **Favn-OIE Rabies Blood Titer Protocols**: Managing the 30-day waiting windows and 180-day quarantine waivers for rabies-free destinations such as Japan, Australia, and New Zealand.

### Automating Compliance with PetRoute

PetRoute incorporates an active regulatory database that alerts relocation coordinators whenever a route parameter (such as a summer flight layover in the Middle East) conflicts with airline safety thresholds.

By embedding continuous validation checks into the booking workflow, PetRoute reduces document rejections by over 98%.`,
    },
    {
      title: 'The Remaarkly Philosophy: Why Purpose-Built Software Wins',
      slug: 'remaarkly-philosophy-why-specialized-software-wins',
      category: 'Company & Vision',
      readTime: '5 min read',
      author: 'Founding Team',
      featuredImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Why generic CRMs fall short in niche operational domains, and how Remaarkly crafts purpose-built architectures that deliver 10x ROI from day one.',
      seoTitle: 'The Remaarkly Philosophy: Building Purpose-Built Software',
      seoDescription: 'Learn why Remaarkly focuses on high-complexity software products that automate complex logistics, compliance, and customer workflows.',
      status: 'published',
      publishedAt: new Date('2026-03-12T09:00:00Z'),
      content: `### Beyond Generic Horizontal Software

For over a decade, businesses were told that an off-the-shelf CRM or generic project management tool could be customized to handle any industry workflow. In practice, companies ended up with brittle integrations, expensive consultancies, and frustrated operations staff.

### The Power of True Domain Specialization

At Remaarkly, we believe the next generation of enterprise value will be captured by **hyper-specialized software engines**. 

When software is purpose-engineered for a specific trade:
- **Zero Configuration Friction**: Workflows, regulatory logic, and terminology reflect exactly how industry professionals operate.
- **Deep Automation**: Instead of generic reminder tasks, the software can automatically validate crate dimensions against IATA Container Requirement 1 rules.
- **Unified Stakeholder Ecosystem**: Connecting customers, internal teams, and overseas partner networks into one coordinated interface.

### Our Multi-Product Roadmap

PetRoute is Remaarkly's flagship venture. As we continue to scale PetRoute across global hubs in North America, Europe, Asia-Pacific, and the Middle East, Remaarkly remains committed to engineering specialized software solutions that bring simplicity to complex global operations.`,
    },
    {
      title: 'Delivering Peace of Mind: How Customer Portals Elevate Pet Parent Trust',
      slug: 'delivering-peace-of-mind-customer-portals-pet-relocation',
      category: 'Customer Experience',
      readTime: '4 min read',
      author: 'PetRoute Product Experience',
      featuredImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Real-time timeline tracking, milestone push notifications, and photo galleries: how modern pet agencies win high-value clientele.',
      seoTitle: 'Customer Portals for Pet Relocation: Building Trust & Loyalty | PetRoute',
      seoDescription: 'Explore how PetRoute’s Customer Portal empowers pet relocation agencies with automated photo updates, flight alerts, and transparent milestone tracking.',
      status: 'published',
      publishedAt: new Date('2026-03-18T16:00:00Z'),
      content: `### The Emotional Gravity of Pet Relocation

When a family relocates across continents, moving their beloved companion animal is often their single highest source of stress. Standard logistics updates like "Shipment in transit" do not provide the emotional reassurance pet parents desperately need.

### The PetRoute Customer Portal Experience

With PetRoute, every pet parent receives a personalized, secure link to their dedicated relocation portal:

- **Live Photo & Video Check-ins**: Origin handlers and airport transit teams can upload comfort break photos directly from their mobile device.
- **Step-by-Step Interactive Timeline**: Clear visual indicators for vet health checks, customs clearance, flight departures, layover boarding, and home delivery.
- **Direct Digital Vault**: Secure access to veterinary certificates, rabies titer reports, export permits, and airway bills.

Agencies using PetRoute report a **70% reduction in inbound status calls** while simultaneously boosting 5-star customer reviews and referral rates.`,
    },
  ];

  for (const post of sampleBlogs) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log(`Seeded ${sampleBlogs.length} blog posts.`);

  // 4. Seed Sample Form Submissions
  const sampleSubmissions = [
    {
      type: 'demo',
      name: 'Sarah Jenkins',
      email: 's.jenkins@globalpawslogistics.com',
      phone: '+1 (415) 890-3421',
      company: 'Global Paws Logistics Inc.',
      productInterest: 'PetRoute',
      monthlyVolume: '50-100 bookings/month',
      country: 'United States',
      message: 'Looking to replace our current legacy spreadsheets with PetRoute across our NYC and LAX hubs. Would love to see the Agent Portal and compliance workflows.',
      isRead: false,
    },
    {
      type: 'contact',
      name: 'Marcus Vance',
      email: 'marcus@aeropetrelocations.co.uk',
      phone: '+44 20 7946 0912',
      company: 'AeroPet Relocations UK',
      productInterest: 'PetRoute',
      monthlyVolume: '20-50 bookings/month',
      country: 'United Kingdom',
      message: 'Inquiring about multi-currency invoicing and custom DEFRA export checklist integrations.',
      isRead: true,
    },
    {
      type: 'demo',
      name: 'Dr. Elena Rostova',
      email: 'elena@transpaws-singapore.sg',
      phone: '+65 6789 0123',
      company: 'TransPaws SG',
      productInterest: 'PetRoute',
      monthlyVolume: '100+ bookings/month',
      country: 'Singapore',
      message: 'Interested in API integrations for automatic flight tracking and quarantine booking reminders.',
      isRead: false,
    },
  ];

  for (const sub of sampleSubmissions) {
    await prisma.formSubmission.create({
      data: sub,
    });
  }
  console.log(`Seeded ${sampleSubmissions.length} form submissions.`);

  console.log('✅ Database seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
