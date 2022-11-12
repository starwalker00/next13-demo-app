'use client';
// Root layout (app/layout.js)
// - Applies to all routes
import './globals.css'

import { Providers } from './providers';

import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import ConnectWallet from './ConnectWallet';
import SignSection from './SignSection';
import Auth from './Auth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Navbar />
          <Header />
          {/* <ConnectWallet /> */}
          <SignSection />
          <Auth />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
