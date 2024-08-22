"use client";

import Form from "./Form";
import Map from "./Map/Map";
import ContactSummary from "./ContactSummary";
import Calendar from "./Calendar";
import ScheduleOfToday from "./ScheduleOfToday";

//TODO: Review SSR
//TODO: When open?
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
        <ScheduleOfToday />
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

      <div className="mx-auto pt-16 sm:px-8 lg:max-w-7xl">
        <div className="mx-auto mb-8 lg:max-w-7xl">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Policínica Navalmoral de la Mata
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Acualmente, me encuentro trabajando en la policlínica de Navalmoral
            de la Mata. Consulta el calendario para conocer los días en los que
            estoy disponible.
          </p>
        </div>
        <div>
          {/* Image section */}
          <div>
            <img
              alt="Imagen entrada de la clínica" //TODO: move image to Cloudinary
              src="https://puntodeencuentronavalmoral.es/wp-content/uploads/2020/11/PoliclinicaFachada.jpg"
              className="aspect-[5/2] w-full object-cover xl:rounded-3xl rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mx-auto max-w-7xl text-center sm:px-6 lg:px-8 justify-center mt-12 ">
        <Map />
      </div>
    </>
  );
};

export default Contact;
