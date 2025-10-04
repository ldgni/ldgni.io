import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luca Di Gianni",
  description: "IT Technician, developer and tech enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-neutral-900 text-neutral-100 antialiased">
        <div className="mx-auto max-w-lg p-4 sm:py-12 lg:py-20">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
