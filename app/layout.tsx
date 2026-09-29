import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Remaarkly | Specialized SaaS Platforms for Complex Industries',
    template: '%s | Remaarkly',
  },
  description:
    'Remaarkly builds high-utility software platforms. Our flagship platform, PetRoute, streamlines pet import, export, compliance, and international logistics.',
  keywords: [
    'Remaarkly',
    'PetRoute',
    'Pet Relocation Software',
    'Pet Import Export Management',
    'Live Animal Cargo SaaS',
    'DEFRA USDA Compliance Software',
    'IATA LAR Pet Travel Software',
    'Pet Logistics OS',
  ],
  authors: [{ name: 'Remaarkly Team' }],
  creator: 'Remaarkly',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://remaarkly.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://remaarkly.com',
    title: 'Remaarkly | Specialized SaaS Platforms for Complex Industries',
    description:
      'Home of PetRoute — the complete Operating System for pet import, export, and international relocation logistics.',
    siteName: 'Remaarkly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remaarkly | Specialized SaaS Platforms for Complex Industries',
    description:
      'Remaarkly builds purpose-built software. Flagship platform PetRoute powers pet import/export logistics worldwide.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
