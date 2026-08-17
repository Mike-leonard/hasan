import './globals.css';
import { PaperViewportLayout } from './_components/PaperViewportLayout';
import { PERSONAL_INFO } from '../data/portfolioData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mike-leonard.github.io/hasan';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Md Mahmudul Hasan — Full-Stack & Android Software Engineer',
    template: '%s | Md Mahmudul Hasan',
  },
  description:
    'Full-Stack Software Engineer & Android Developer with 4+ years of experience specializing in React, Next.js, Node.js, native Android (Java), PostgreSQL optimization, and software quality assurance. Based in Venice, Italy.',
  keywords: [
    'Md Mahmudul Hasan',
    'Full-Stack Developer',
    'Software Engineer',
    'Android Developer',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'Java',
    'Android SDK',
    'PostgreSQL',
    'Database Optimization',
    'Quality Control',
    'Venice Italy Developer',
    'Software Engineer Europe'
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  publisher: PERSONAL_INFO.name,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Md Mahmudul Hasan — Full-Stack & Android Software Engineer',
    description:
      'Full-Stack Software Engineer & Android Developer with 4+ years of experience building scalable web apps, mobile systems, and high-performance databases.',
    siteName: 'Md Mahmudul Hasan Portfolio',
    images: [
      {
        url: `${siteUrl}/hsn.jpg`,
        width: 800,
        height: 800,
        alt: 'Md Mahmudul Hasan — Full-Stack & Android Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Mahmudul Hasan — Full-Stack & Android Software Engineer',
    description:
      'Full-Stack Software Engineer & Android Developer with 4+ years of experience building scalable web & mobile systems.',
    images: [`${siteUrl}/hsn.jpg`],
    creator: '@mr_hasan',
  },
  icons: {
    icon: [
      { url: `${siteUrl}/hsn.jpg`, type: 'image/jpeg' },
      { url: `${siteUrl}/icon.jpg`, type: 'image/jpeg' },
    ],
    shortcut: `${siteUrl}/hsn.jpg`,
    apple: `${siteUrl}/hsn.jpg`,
  },
  alternates: {
    canonical: '/',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PERSONAL_INFO.name,
  jobTitle: PERSONAL_INFO.role,
  description: PERSONAL_INFO.bio,
  url: siteUrl,
  image: `${siteUrl}/hsn.jpg`,
  sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mestre, Venice',
    addressCountry: 'IT',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Metropolitan University',
  },
  knowsAbout: [
    'Full-Stack Web Development',
    'React',
    'Next.js',
    'Node.js',
    'Express.js',
    'Android Development',
    'Java',
    'PostgreSQL',
    'Database Optimization',
    'MongoDB',
    'SQLite',
    'Quality Control & Assurance',
  ],
};

export default function RootLayout({ children, doc }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#f4f4f5] dark:bg-[#09090b] text-zinc-900 dark:text-[#fafafa] antialiased"
      >
        <PaperViewportLayout docSlot={doc}>{children}</PaperViewportLayout>
      </body>
    </html>
  );
}
