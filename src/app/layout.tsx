import type { Metadata } from "next";
import "./globals.css";

import { Inter, Poppins } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'], 
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
