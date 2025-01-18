'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import AppNavbar from "./components/navbar/navbar";
import AppSidebar from "./components/sidebar/sidebar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>

          <AppNavbar />

          <div className={styles.pageContainer}>

            <AppSidebar />

            <div className={styles.content}>

              {children}

            </div>

          </div>

        </div>
      </body>
    </html>
  );
}
