import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brew and Co. | Brooklyn Coffee",
  description:
    "A cosy neighbourhood coffee shop on Court Street, Brooklyn. Specialty coffee, fresh pastries, and a place to stay a while.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest text-chalk">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
