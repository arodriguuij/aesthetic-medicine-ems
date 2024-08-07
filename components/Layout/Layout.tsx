"use client";

import React, { Suspense } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Privacy from "../Privacy";
import Banner from "../Banner";
import SnackBar from "../SnackBar";
import DialogComponent from "../Dialog";
import useVisibility from "./useVisibility";
import { usePathname } from "next/navigation";
import Breadcrumb from "../Breadcrumb";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

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
        {pathname === "/" ||
        pathname.includes("/treatments/facial/") ||
        pathname.includes("/treatments/corporal/") ? (
          <main>{children}</main>
        ) : (
          <main>
            <div className="isolate mx-auto  px-6 lg:px-8 items-center">
              <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                <Breadcrumb />
              </div>
              {children}
            </div>
          </main>
        )}
      </Suspense>
      {isDialogVisible && <DialogComponent />}
      {isPrivacyVisible && <Privacy />}
      {isSnackbarVisible && <SnackBar />}
      <Footer />
    </>
  );
};

export default Layout;
