"use client";

import React, { Suspense } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Privacy from "../Privacy";
import Banner from "../Banner";
import SnackBar from "../SnackBar";
import DialogComponent from "../Dialog";
import useVisibility from "./useVisibility";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    isPrivacyVisible,
    isBannerVisible,
    isSnackbarVisible,
    isDialogVisible,
  } = useVisibility();

  return (
    <>
      {isBannerVisible && (
        <div className="z-8 bg-white sticky bottom-0">
          <Banner />
        </div>
      )}
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>{children}</main>
      </Suspense>
      {isDialogVisible && <DialogComponent />}
      {isPrivacyVisible && <Privacy />}
      {isSnackbarVisible && <SnackBar />}
      <Footer />
    </>
  );
};

export default Layout;
