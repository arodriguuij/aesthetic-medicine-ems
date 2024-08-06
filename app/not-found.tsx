"use client";

import { scrollToTop } from "@/utils/utils";
import Link from "next/link";

import { cld } from "@/utils/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

export default function NotFound() {
  return (
    <main className="relative isolate min-h-full">
      <AdvancedImage
        cldImg={cld.image("EMS/General/NotFound")}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-white">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-base text-white/70 sm:mt-6">
          Lo siento, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" passHref>
            <a
              onClick={scrollToTop}
              className="text-sm font-semibold leading-7 text-white"
            >
              <span aria-hidden="true">&larr;</span> Vuelta a la página
              principal
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
