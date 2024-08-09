import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Poppins} from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Carlo Angkisan",
  description: "Carlo Angkisan's Personal Website",
  icons: [{ rel: "icon", url: "/computer.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
