import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | mjohn",
  description: "Portfolio and resume for Mjohn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${pacifico.variable} antialiased bg-[#050816]`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
