"use client";

import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Privacy from "../Privacy";
import { PrivacyState } from "../../states/privacy/privacySlide";
import { useSelector } from "react-redux";
import Banner from "../Banner";
import { BannerState } from "../../states/banner/bannerSlide";
import SnackBar from "../SnackBar";
import { SnackbarState } from "../../states/snackbar/snackbarSlide";
import { DialogState } from "../../states/dialog/dialogSlide";
import DialogComponent from "../Dialog";

const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isVisible: isPrivacyVisible } = useSelector(
    (state: { privacy: PrivacyState }) => state.privacy
  );

  const { isVisible: isBannerVisible } = useSelector(
    (state: { banner: BannerState }) => state.banner
  );

  const { isVisible: isSnackbarVisible } = useSelector(
    (state: { snackbar: SnackbarState }) => state.snackbar
  );

  const { isVisible: isDialogVisible } = useSelector(
    (state: { dialog: DialogState }) => state.dialog
  );

  return (
    <>
      {isBannerVisible && (
        <div className="z-8 bg-white sticky bottom-0">
          <Banner />
        </div>
      )}
      <Header />
      <main>{children}</main>
      {isDialogVisible && <DialogComponent />}
      {isPrivacyVisible && <Privacy />}
      {isSnackbarVisible && <SnackBar />}
      <Footer />
    </>
  );
};

export default Layout;
