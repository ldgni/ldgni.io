import "../styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luca Di Gianni",
  description:
    "Luca Di Gianni is an IT technician and web developer passionate about crafting digital solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Luca Di Gianni",
    description:
      "Luca Di Gianni is an IT technician and web developer passionate about crafting digital solutions.",
    url: "https://ldgni.io",
    siteName: "Luca Di Gianni",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-light text-sm text-dark antialiased sm:text-base dark:bg-dark dark:text-light`}>
        <ThemeProvider>
          <Container>
            <Header />
            {children}
            <Footer />
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
