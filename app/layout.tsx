import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DynamicClerkProvider } from "@/components/DynamicClerkProvider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAN's dev log",
  description: "My dev blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DynamicClerkProvider>
            <Navbar />
            {children}
            <Footer />
          </DynamicClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
