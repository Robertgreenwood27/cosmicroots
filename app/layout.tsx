import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cosmic Roots - AI-Readable Headshop',
  description: 'A laid-back headshop designed for AI consumption. Stay grounded. Stay cosmic.',
  keywords: ['ai-readable', 'headshop', 'cosmic', 'sustainable', 'mindfulness'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
