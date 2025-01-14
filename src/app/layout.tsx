import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Luca Di Gianni",
  description:
    "Luca Di Gianni is an IT technician and web developer dedicated to crafting effective digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="">
        <body
          className={`${inter.className} bg-light text-sm text-dark antialiased sm:text-base md:text-lg dark:bg-dark dark:text-light`}>
          <Container>
            <Header />
            <main>{children}</main>
            <Footer />
          </Container>
        </body>
      </html>
    </ViewTransitions>
  );
}
