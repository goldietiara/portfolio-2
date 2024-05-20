import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goldie Portfolio",
  description: "All work code by Golide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overscroll-none relative`}>
        <div className="w-full fixed top-0 z-[80]">
          <NavBar></NavBar>
        </div>
        <div className="max-w-5xl mx-auto mb-5 md:my-32">{children}</div>
      </body>
    </html>
  );
}
