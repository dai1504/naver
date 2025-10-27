import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Music App",
  description: "Modern music discovery UI",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={cn(inter.variable, "font-sans")}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
