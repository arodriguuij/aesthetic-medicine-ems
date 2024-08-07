import { useDispatch } from "react-redux";
import Link from "next/link";
import { setPrivacyVisibility } from "../../lib/privacy/privacySlide";
import { scrollToTop } from "../../utils/utils";

const Privacy = () => {
  const dispatch = useDispatch();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-14 z-10">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-900">
          Este sitio web utiliza cookies. Aceptar nuestras cookies es opcional,
          pero recomendado, ¡son deliciosas! Consulta nuestra{" "}
          <Link href="/policy"  aria-label="Enlace a la pagina de politicas de cookies">
            <div onClick={scrollToTop} className="font-semibold text-amber-400">
              política de cookies
            </div>
          </Link>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            onClick={() => dispatch(setPrivacyVisibility(false))}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={() => dispatch(setPrivacyVisibility(false))}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reject all
          </button>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
