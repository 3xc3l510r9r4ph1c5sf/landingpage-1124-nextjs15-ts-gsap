// src/app/layout.tsx

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import PreLoader from '@/components/Preloader';
import { TailwindIndicator } from '@/components/debugger/tailwindIndicator';
import { AppProvider } from '../components/context/AppContext';
import { Providers } from './provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Harold Cano',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <Providers>
            <Navbar />
            <PreLoader />
            {children}
            <TailwindIndicator />
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}
