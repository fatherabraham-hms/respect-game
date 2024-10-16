import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';
import PrivyProviderWrapper from '@/components/app-shell/privy-provider-wrapper';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <PrivyProviderWrapper>{children}</PrivyProviderWrapper>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
