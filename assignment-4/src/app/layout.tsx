import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Loading from './loading';
import HeaderTopNar from './components/common/HeaderTopNar'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookStore Kevin',
  description: 'Generated by create next app',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Suspense fallback={<Loading text="Book Store" />}>
      <div className="antialiased bg-gray-50 dark:bg-gray-900 h-full">
        <HeaderTopNar />
        <main className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
          <div
            id="book-store"
            className="mx-auto max-w-screen-xl px-4 lg:px-12 light"
          >
            <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              {children}
            </div>
          </div>
        </main>
      </div>
    </Suspense>
    </body>
    </html>
  );
}

