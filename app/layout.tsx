import "./globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ViewTransition } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="mx-auto max-w-lg p-4 sm:py-12 lg:py-20">
            <Header />
            <ViewTransition>{children}</ViewTransition>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
