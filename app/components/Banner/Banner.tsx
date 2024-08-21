import Whatsapp from "../Icons/Whatsapp";
import Phone from "../Icons/Phone";
import CloseButton from "./CloseButton";

const Banner = () => (
  <div className="relative isolate flex items-center sm:justify-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2 sm:px-3.5 sm:before:flex-1">
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 ">
      <p className="text-sm leading-6 text-white hidden sm:block">
        <strong className="font-semibold">EMS</strong>
        <svg
          viewBox="0 0 2 2"
          aria-hidden="true"
          className="mx-2 inline h-0.5 w-0.5 fill-current"
        >
          <circle r={1} cx={1} cy={1} />
        </svg>
        Contacta con nosotros para perdir tu cita o información a través de:
      </p>
      <a
        href="https://wa.me/+34611882139"
        className="flex rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        Whatsapp <Whatsapp />
      </a>
      <a
        href="tel:+34611882139"
        className="flex rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="mr-2">Teléfono </p>
        <Phone props={{ styles: { width: "1.2rem", marginLeft: "0.5rem" } }} />
      </a>
    </div>
    <div className="flex flex-1 justify-end hidden sm:block">
      <CloseButton />
    </div>
  </div>
);

export default Banner;
