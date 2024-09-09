const ContactSummary = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 justify-center ">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Donde encontrarnos
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Descubre nuestra ubicación: Dirección de correo electrónico, número de
          teléfono y mapa para visitar nuestra clínica de medicina estética
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        <div>
          <h3 className="border-l border-amber-600 pl-6 font-semibold text-gray-900">
            Dirección
          </h3>
          <a
            href="https://www.google.com/maps/place/Policl%C3%ADnica+Navalmoral+SL/@39.8949182,-5.545252,17z/data=!3m1!4b1!4m6!3m5!1s0xd3fd9ca964ee18d:0xd4044ef40795f356!8m2!3d39.8949141!4d-5.5426771!16s%2Fg%2F1tk8ddsz?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>Policlínica Navalmoral de la Mata</p>
              <p>C. Pablo Luengo, 23. 10300 Navalmoral de la Mata, Cáceres</p>
            </address>
          </a>
        </div>
        <div>
          <h3 className="border-l border-amber-600 pl-6 font-semibold text-gray-900">
            Horario
          </h3>
          <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
            <p>Lunes: 15:00-20:00</p>
            <p>Martes: 9:00-13:00 y 16:00-20:00</p>
            <p>Miércoles: 9:00-13:00</p>
            <p>Jueves: 10:00-14:00 y 16:00-20:00</p>
            <p>Viernes: 10:00-15:00</p>
          </address>
        </div>
        <div>
          <h3 className="border-l border-amber-600 pl-6 font-semibold text-gray-900">
            Teléfono
          </h3>
          <a className="text-amber-400" href="tel:+34627088047">
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>+34 611 88 21 39</p>
            </address>
          </a>
        </div>
        <div>
          <h3 className="border-l border-amber-600 pl-6 font-semibold text-gray-900">
            Correo Electrónico
          </h3>
          <a href="mailto:clinicamedicoesteticaems@gmail.com?utm_source=mail">
            <address className="border-l border-gray-200 pl-6 pt-2 not-italic text-gray-600">
              <p>clinicamedicoesteticaems</p>
              <p>@gmail.com</p>
            </address>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSummary;
