import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
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
    'Remaarkly builds high-utility vertical SaaS platforms. Our flagship platform, PetRoute, streamlines pet import, export, compliance, and international logistics.',
  keywords: [
    'Remaarkly',
    'PetRoute',
    'Pet Relocation Software',
    'Pet Import Export Management',
    'Live Animal Cargo SaaS',
    'DEFRA USDA Compliance Software',
    'IATA LAR Pet Travel Software',
    'Vertical SaaS',
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
      'Remaarkly builds purpose-built vertical SaaS. Flagship platform PetRoute powers pet import/export logistics worldwide.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
