"use client"

import { APIProvider } from "@vis.gl/react-google-maps";
import { store } from "@/states/store";
import React from "react";
import { Provider } from "react-redux";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""}>
    <Provider store={store}>{children}</Provider>
  </APIProvider>
);

export default Providers;
