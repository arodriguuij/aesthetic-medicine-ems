import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
import "react-tooltip/dist/react-tooltip.css";
import Providers from "./components/Providers/Providers";
import Layout from "./components/Layout/Layout";

export const metadata: Metadata = {
  title: "EMS Clinica Estetica",
  description: "Medicina Estetica Dra. Elvira Morgado EMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <Providers>
        <body>
          <Layout>{children}</Layout>
        </body>
        {/* <SpeedInsights />
        <Analytics /> */}
      </Providers>
    </html>
  );
}
