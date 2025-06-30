import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import ScrollIndicator from '@/components/ScrollIndicator';
import { AppProvider } from '@/components/context/AppContext';
import { Providers } from './provider';

export const metadata: Metadata = {
  title: 'ExcelsiorGraphicDesign - Premium Design Studio',
  description: 'Architectural minimalism meets luxury design. We craft exceptional visual experiences that elevate brands to new heights.',
  keywords: 'graphic design, branding, luxury design, minimalism, architecture, visual identity',
  authors: [{ name: 'ExcelsiorGraphicDesign' }],
  openGraph: {
    title: 'ExcelsiorGraphicDesign - Premium Design Studio',
    description: 'Architectural minimalism meets luxury design.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bone text-charcoal antialiased">
        <AppProvider>
          <Providers>
            <CustomCursor />
            <ScrollIndicator />
            <Navigation />
            <main className="relative">
              {children}
            </main>
          </Providers>
        </AppProvider>
      </body>
    </html>
  );
}