// "use client"
import './globals.css';
import fonts from '@/configs/fonts';
import { Metadata } from 'next';
import Header from './components/Header';

import { dir } from 'i18next'
// import { languages, fallbackLng } from '../i18n/settings'
// import { useTranslation } from '../i18n'


export const metadata: Metadata = {
  metadataBase: new URL('https://trade-master-one.vercel.app/'),
  title: 'Welcome To Trade Master',
  description:
    'Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.',
  twitter: {
    title: 'Welcome To Trade Master',
    description:
      'Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.',
    site: '@trademaster',
    images: '/logo-large.png',
  },
  openGraph: {
    title: 'Welcome To Trade Master',
    description:
      'Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.',
    images: '/logo-large.png',
  },
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={fonts.kanit.className}>
      <Header lng={lng} />
      <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  )
}
