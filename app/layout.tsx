/**
 * Title: Write a program using JavaScript on Layout
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 02, December 2023
 */

import React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
