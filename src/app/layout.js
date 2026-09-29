import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
});

export const metadata = {
  title: 'Akshaya Robotics for Kids | Learn Robotics',
  description: 'Fun robotics classes for kids. Learn coding, AI, and build robots.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
