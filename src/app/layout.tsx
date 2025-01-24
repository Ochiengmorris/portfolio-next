import type { Metadata } from "next";
import { Chakra_Petch, Pacifico } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
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
        className={`${chakraPetch.variable} ${pacifico.variable} antialiased lg:bg-gray-800/20`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
