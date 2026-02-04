import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Tools Hub - Discover the Best AI Tools',
  description: 'A curated directory of the best AI tools for content creation, productivity, design, and development. Find the perfect AI solution for your needs.',
  keywords: ['AI tools', 'artificial intelligence', 'productivity', 'content creation', 'AI directory'],
  openGraph: {
    title: 'AI Tools Hub - Discover the Best AI Tools',
    description: 'A curated directory of the best AI tools for content creation, productivity, design, and development.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Hub - Discover the Best AI Tools',
    description: 'A curated directory of the best AI tools for content creation, productivity, design, and development.',
    images: [
      {
        url: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen p-2 flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
