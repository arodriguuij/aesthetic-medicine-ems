import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
import "react-tooltip/dist/react-tooltip.css";
import Providers from "./components/Providers/Providers";
import Layout from "./components/Layout/Layout";
import { Suspense } from "react";
import Loader from "./components/Loader";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Medicina Estética Elvira Morgado",
  description:
    "Clínica de Medicina Estetica Dra. Elvira Morgado EMS. Navalmoral de la mata (Extremadura). Tratamientos sin cirugía.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <link rel="canonical" href="https://www.medicinaesteticaems.com`" />
      </Head>
      <Providers>
        <body>
          <Layout>
            <Suspense fallback={<Loader />}>{children}</Suspense>
          </Layout>
        </body>
        {/* <SpeedInsights />
        <Analytics /> */}
      </Providers>
    </html>
  );
}
