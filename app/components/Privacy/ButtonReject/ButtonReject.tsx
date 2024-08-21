"use client";

import { useDispatch } from "react-redux";
import { setPrivacyVisibility } from "@/lib/privacy/privacySlide";
import React from "react";

const ButtonReject = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(setPrivacyVisibility(false))}
      className="text-sm font-semibold leading-6 text-gray-900"
    >
      Reject all
    </button>
  );
};

export default ButtonReject;
