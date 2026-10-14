import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata = {
  metadataBase: new URL('https://akshayarobotics.com'),
  title: {
    default: 'Akshaya Robotics | Kids STEM & Robotics Classes in Hyderabad',
    template: '%s | Akshaya Robotics',
  },
  description:
    'Hands-on robotics, coding, STEM, and AI classes for kids in Mind Space, Hyderabad. Build robots, learn circuits, logic, and construct the future with LEGO and hardware kits.',
  keywords: [
    'Robotics for Kids Hyderabad',
    'STEM Classes Hyderabad',
    'Kids Robotics Mind Space',
    'Coding for Kids Hyderabad',
    'LEGO Robotics Classes',
    'AI Classes for Children',
    'Electronics Workshop for Kids',
    'Akshaya Robotics',
    'Robotics Summer Camp Hyderabad',
    'Hands-on STEM Education Hyderabad',
  ],
  authors: [{ name: 'Akshaya Robotics', url: 'https://akshayarobotics.com' }],
  creator: 'Akshaya Robotics',
  publisher: 'Akshaya Robotics',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://akshayarobotics.com',
  },
  openGraph: {
    title: 'Akshaya Robotics | Kids STEM & Robotics Classes in Hyderabad',
    description:
      'Hands-on robotics, coding, STEM, and AI classes for kids in Mind Space, Hyderabad. Build robots, learn circuits, and construct the future!',
    url: 'https://akshayarobotics.com',
    siteName: 'Akshaya Robotics',
    images: [
      {
        url: '/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Akshaya Robotics - Futuristic Robotics Lab & STEM Education for Kids in Hyderabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshaya Robotics | Kids STEM & Robotics Classes in Hyderabad',
    description:
      'Fun & interactive robotics, AI & coding classes for kids in Mind Space, Hyderabad.',
    images: ['/hero-bg.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  category: 'education',
};

export const viewport = {
  themeColor: '#080E4B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': 'https://akshayarobotics.com/#organization',
        name: 'Akshaya Robotics',
        alternateName: 'Akshaya Robotics Hyderabad',
        url: 'https://akshayarobotics.com',
        logo: 'https://akshayarobotics.com/logo.png',
        image: 'https://akshayarobotics.com/hero-bg.png',
        description:
          'Akshaya Robotics is a premier hands-on STEM, robotics, and coding academy for children in Mind Space, Hyderabad. Offering beginner to advanced courses in robotics, AI logic, and electronics.',
        telephone: '+919014466133',
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mind Space, HITEC City',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500081',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.441,
          longitude: 78.3799,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '09:00',
          closes: '19:00',
        },
        sameAs: ['https://wa.me/919014466133'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Kids Robotics Courses',
          itemListElement: [
            {
              '@type': 'Course',
              name: 'Level 1: Novice Builder',
              description:
                'Starting from scratch! Build simple toys that move and light up.',
              provider: {
                '@type': 'Organization',
                name: 'Akshaya Robotics',
              },
            },
            {
              '@type': 'Course',
              name: 'Level 2: Circuit Master',
              description:
                'Dive into electronics. Learn how circuits and microcontrollers work together!',
              provider: {
                '@type': 'Organization',
                name: 'Akshaya Robotics',
              },
            },
            {
              '@type': 'Course',
              name: 'Level 3: Logic Brain',
              description:
                'Teach robots how to see and think! Introduction to fun, block-based AI logic.',
              provider: {
                '@type': 'Organization',
                name: 'Akshaya Robotics',
              },
            },
            {
              '@type': 'Course',
              name: 'Boss Level: Pro',
              description:
                'Race cars, battle-bots, and obstacle courses. Put your skills to the ultimate test!',
              provider: {
                '@type': 'Organization',
                name: 'Akshaya Robotics',
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en" className={quicksand.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
