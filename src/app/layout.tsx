import type {Metadata} from 'next';
import {Roboto_Mono} from 'next/font/google';
import './globals.css';
import {Providers} from '@/redux/provider';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const font = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Trolla',
  description: 'Trolla dashboard',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children} </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
