import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PropFlow — The PMS Built for Luxury Hotels',
  description:
    'Multi-tenant property management with integrated channel manager. ' +
    'Real-time room operations, OTA sync, and revenue management — in one platform.',
  openGraph: {
    title: 'PropFlow',
    description: 'The PMS built for luxury hotels.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
