import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/theme-provider';
import ClientSidebar from '@/components/client-sidebar';
import {ThemeContextProvider} from '@/contexts/theme-context';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Trolla Dashboard',
  description: 'Logistics management dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen bg-gray-50 dark:bg-[#0f172a]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ThemeContextProvider>
            <ClientSidebar />
            <main className="flex-1 overflow-y-auto transition-all w-full lg:pl-0">
              {children}
            </main>
          </ThemeContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
