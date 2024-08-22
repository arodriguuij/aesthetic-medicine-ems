import { cloudinaryLoader } from "@/utils/cloudinary";
import Image from "next/image";
import React from "react";
import { incentives } from "../confirmacionPago.constants";

const Incentives = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="rounded-2xl px-6">
      <div className="mx-auto max-w-xl lg:max-w-none">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900"></h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <Image
                    alt={"Imagen de " + incentive.name}
                    src={cloudinaryLoader({
                      src: incentive.imageSrc,
                    })}
                    width={1000}
                    height={1000}
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Incentives;
