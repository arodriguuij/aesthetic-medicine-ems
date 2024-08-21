"use client";

import { useDispatch } from "react-redux";
import { setPrivacyVisibility } from "@/lib/privacy/privacySlide";
import React from "react";

const ButtonAccept = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(setPrivacyVisibility(false))}
      className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    >
      Accept all
    </button>
  );
};

export default ButtonAccept;
