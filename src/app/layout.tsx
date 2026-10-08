import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});
// const display = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   weight: ["500", "600", "700", "800"],
//   variable: "--font-display",
//   display: "swap",
// });
// const body = DM_Sans({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-body",
//   display: "swap",
// });

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
        className={`${poppins.variable} ${pacifico.variable} antialiased bg-[#E0E5EC ]`}
        //  className={`${poppins.variable} ${pacifico.variable} antialiased bg-[#050816]`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
