import Image from "next/image";
import { cloudinaryLoader } from "@/utils/cloudinary";

export default function NotFound() {
  return (
    <div
      className="content-center align-middle pr-6 pl-6"
      style={{ height: "73vh" }}
    >
      <Image
        alt="Imagen página de error"
        src={cloudinaryLoader({
          src: "EMS/General/maintenance",
        })}
        quality={100}
        fill
        sizes="100vh"
        className="inset-0 -z-10 object-cover object-top"
        priority={true}
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          La página se encuentra en mantenimiento
        </h1>
        <p className="mt-4 text-base text-gray-900/70 sm:mt-6">
          Sentimos las molestias. Estamos trabajando en solucionar el problema.
        </p>
      </div>
    </div>
  );
}
