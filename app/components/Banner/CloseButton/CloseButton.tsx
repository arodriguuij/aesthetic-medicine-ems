import { setBannerVisibility } from "@/lib/banner/bannerSlide";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
      onClick={() => dispatch(setBannerVisibility(false))}
    >
      <span className="sr-only">Dismiss</span>
      <XMarkIcon aria-hidden="true" className="h-5 w-5 text-white" />
    </button>
  );
};

export default CloseButton;
