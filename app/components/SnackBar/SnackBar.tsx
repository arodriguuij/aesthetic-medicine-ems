"use client";

import { setSnackbarVisibility, SnackbarState } from "@/lib/snackbar/snackbarSlide";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const SnackBar = () => {
  const dispatch = useDispatch();

  const { message, type } = useSelector(
    (state: { snackbar: SnackbarState }) => state.snackbar
  );

  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-14">
      <div
        className={`pointer-events-auto ml-auto max-w-xl rounded-xl${
          type === "success" ? " bg-green-50" : " bg-red-50"
        } p-6 shadow-lg ring-1 ring-gray-900/10`}
      >
        <div className="flex">
          <div className="flex-shrink-0">
            <CheckCircleIcon
              aria-hidden="true"
              className={`h-5 w-5 ${
                type === "success" ? "text-green-400" : "text-red-400"
              }`}
            />
          </div>
          <div className="ml-3">
            <p
              className={`text-sm font-medium  ${
                type === "success" ? "text-green-800" : "text-red-800"
              }`}
            >
              {message}
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    setSnackbarVisibility({
                      visibility: false,
                      message: "",
                    })
                  )
                }
                className={
                  type === "success"
                    ? "inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                    : "inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                }
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
