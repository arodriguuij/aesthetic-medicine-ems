"use client";

import { PrivacyState } from "../../lib/privacy/privacySlide";
import { useSelector } from "react-redux";
import { BannerState } from "../../lib/banner/bannerSlide";
import { SnackbarState } from "../../lib/snackbar/snackbarSlide";
import { DialogState } from "../../lib/dialog/dialogSlide";

const useVisibility = () => {
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
  return {
    isPrivacyVisible,
    isBannerVisible,
    isSnackbarVisible,
    isDialogVisible,
  };
};

export default useVisibility;
