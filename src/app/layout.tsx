import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; //global css
// import "../app/styles/style.css" //global css
import Link from "next/link";
import NavBar from "@/components/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunting Coder",
  description: "Developed with Love",
  keywords: "next, hunting blog, hunting coder, sourav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Hunting Coders</title>
        {/* <meta name='keywords' content='next, hunting blog, hunting coder, sourav'/> */}
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
