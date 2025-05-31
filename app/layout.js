import { Fondamento, Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';

const fondamento = Fondamento({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-fondamento',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Deepa's Vision",
  description: "Deepa's Vision - A platform for personal growth and self-discovery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fondamento.variable} ${inter.variable} font-inter antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
