import Link from "next/link";
import ButtonAccept from "./ButtonAccept";
import ButtonReject from "./ButtonReject";

const Privacy = () => (
  <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-14 z-10">
    <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
      <p className="text-sm leading-6 text-gray-900">
        Este sitio web utiliza cookies. Aceptar nuestras cookies es opcional,
        pero recomendado, ¡son deliciosas! Consulta nuestra{" "}
        <Link
          href="/policy"
          aria-label="Enlace a la pagina de politicas de cookies"
        >
          <div className="font-semibold text-amber-400">
            política de cookies
          </div>
        </Link>
        .
      </p>
      <div className="mt-4 flex items-center gap-x-5">
        <ButtonAccept />
        <ButtonReject />
      </div>
    </div>
  </div>
);

export default Privacy;
