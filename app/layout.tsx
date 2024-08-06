import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers/Providers";
import Layout from "@/components/Layout/Layout";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <Providers>
        <Layout>{children}</Layout>
        <SpeedInsights />
      </Providers>
    </html>
  );
}
