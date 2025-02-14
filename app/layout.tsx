import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { FooterCentered } from '@/components/FooterCentered/FooterCentered';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { theme } from '../theme';

export const metadata = {
  title: 'Primordial Groove',
  description: 'Building The Bay Area Underground',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
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
