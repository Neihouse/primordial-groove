import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { FooterCentered } from '@/components/FooterCentered/FooterCentered';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';

import '@mantine/core/styles.css';

import type { Metadata } from 'next';
import { theme } from '../theme';

export const metadata: Metadata = {
  title: {
    default: 'Primordial Groove',
    template: '%s | Primordial Groove',
  },
  description: 'Building The Bay Area Underground',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <HeaderSimple />
          <main>{children}</main>
          <FooterCentered />
        </MantineProvider>
      </body>
    </html>
  );
}
