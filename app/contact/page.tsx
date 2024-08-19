"use client";

import Form from "./Form";
import Map from "./Map/Map";
import ContactSummary from "./ContactSummary";
import Calendar from "./Calendar";

const Contact = () => {
  return (
    <>
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-amber-100/20 py-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-amber-600/10 ring-1 ring-amber-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Calendario
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Consulta el calendario para conocer los días en los que estoy
            disponible cada mes en las distintas clínicas donde trabajo.
          </p>
        </div>

        <Calendar />
      </div>

      {/* Form */}
      <div>
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8 mt-16">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Contacta con nostros a través de email
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            No dudes en contactarnos! Envía tu consulta o comentario por correo
            electrónico ahora mismo
          </p>
        </div>
        <div className="mx-auto max-w-7xl mt-8 sm:px-6 lg:px-8 justify-center pb-4	">
          <Form />
        </div>
      </div>

      <ContactSummary />

      {/* Map */}
      <div className="mx-auto max-w-7xl text-center sm:px-6 lg:px-8 justify-center ">
        <Map />
      </div>
    </>
  );
};

export default Contact;
