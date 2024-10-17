import type { Metadata } from "next";
import { sahel } from 'next-persian-fonts';
import "./globals.css";
import Header from '@/app/components/Header';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Loader from '@/app/components/Loader';


export const metadata: Metadata = {
  title: "مشاوره آنلاین",
  description: "This is just for test",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fa">
        <body className={sahel.className}>
         
       
            <Header />
            {children}

        </body>
      </html>

  );
}
