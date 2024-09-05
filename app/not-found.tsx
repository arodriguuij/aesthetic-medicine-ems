import Image from "next/image";
import { cloudinaryLoader } from "@/utils/cloudinary";
import NotFoundLinkHome from "./components/NotFoundLinkHome";

export default function NotFound() {
  return (
    <div
      className="content-center align-middle pr-6 pl-6"
      style={{ height: "73vh" }}
    >
      <Image
        alt="Imagen página de error"
        src={cloudinaryLoader({
          src: "EMS/General/404page",
        })}
        quality={100}
        fill
        sizes="100vh"
        className="inset-0 -z-10 object-cover object-top"
        priority={true}
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <p className="text-base font-semibold leading-8 text-gray-900">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-4 text-base text-gray-900/70 sm:mt-6">
          Lo siento, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="mt-10 flex justify-center">
          <NotFoundLinkHome />
        </div>
      </div>
    </div>
  );
}
