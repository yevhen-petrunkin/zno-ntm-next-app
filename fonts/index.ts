import { Inter, Noto_Serif } from 'next/font/google';

// Main font for content

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Font for titles

export const noto = Noto_Serif({
  weight: ['700'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-noto-serif',
});
