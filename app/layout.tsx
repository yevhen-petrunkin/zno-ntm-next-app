import type { Metadata } from 'next';

import { noto, inter } from '@/fonts';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'ZNO-NMT English',
  description: 'ZNO-NMT English Next.js App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={cn(inter.variable, noto.variable)}>{children}</body>
    </html>
  );
}
