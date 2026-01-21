import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://abbas-qamar.github.io/';

export const metadata: Metadata = {
  title: 'Qamar Abbas | Professional Graphic Designer & Digital Marketer',
  description: 'Professional portfolio of Qamar Abbas - experienced Graphic Designer, Digital Marketer, Logo Designer, and Photo Editor. Specializing in restaurant menus, hotel designs, and professional documents.',
  keywords: [
    'graphic designer',
    'digital marketer',
    'logo designer',
    'photo editor',
    'restaurant menu design',
    'hotel design',
    'branding',
    'visual design',
    'professional documents',
    'qamar abbas'
  ],
  authors: [{ name: 'Qamar Abbas' }],
  creator: 'Qamar Abbas',
  publisher: 'Qamar Abbas',
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: 'Qamar Abbas | Professional Graphic Designer & Digital Marketer',
    description: 'Explore the professional portfolio of Qamar Abbas – a seasoned Graphic Designer, Digital Marketer, Logo Designer, and Photo Editor with nearly a decade of experience.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 800,
        height: 485,
        alt: 'Qamar Abbas - Professional Graphic Designer & Digital Marketer',
        type: 'image/jpg',
      },
      {
        url: `${baseUrl}/og-image-square.jpg`,
        width: 800,
        height: 800,
        alt: 'Qamar Abbas - Professional Graphic Designer & Digital Marketer',
        type: 'image/jpg',
      },
    ],
    siteName: 'Qamar Abbas Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qamar Abbas | Professional Graphic Designer & Digital Marketer',
    description: 'Explore the professional portfolio of Qamar Abbas – experienced Graphic Designer, Digital Marketer, Logo Designer, and Photo Editor.',
    images: [`${baseUrl}/og-image.jpg`],
    creator: '@qamarabbas',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Design & Marketing',
  classification: 'Portfolio',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Qamar Abbas',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Person Schema structured data
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Qamar Abbas',
    url: baseUrl,
    jobTitle: ['Graphic Designer', 'Digital Marketer', 'Logo Designer', 'Photo Editor'],
    image: `${baseUrl}/profile-image.jpg`,
    sameAs: [
      'https://linkedin.com/in/qamarabbas',
      'https://instagram.com/qamarabbas',
      'https://twitter.com/qamarabbas',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Work',
      email: 'contact@qamarabbas.com',
    },
    knowsAbout: [
      'Graphic Design',
      'Digital Marketing',
      'Logo Design',
      'Photo Editing',
      'Branding',
      'UI/UX Design',
      'Social Media Marketing',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Qamar Abbas Design Studio',
      url: baseUrl,
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Prefetch critical resources */}
        <link rel="prefetch" href="/logo.svg" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
