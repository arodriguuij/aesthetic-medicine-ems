import { CheckCircleIcon } from "@heroicons/react/24/outline";

const CookiesPolicy = () => {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl pb-8 sm:py-12 lg:px-8">
        <h1 className="pb-2 text-2xl  text-gray-900 sm:text-3xl">
          Lo que debe saber sobre las cookies en nuestro sitio web
        </h1>
        <p>
          Según la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
          la Información y Comercio Electrónico, (LSSICE) le informamos que
          nuestro sitio web utiliza Cookies propias y de terceros. Como Usuario
          de nuestro sitio web, le informamos que utilizamos cookies y/o
          tecnologías similares (en adelante cookies) que almacenan y recuperan
          información cuando navega. En general, estas tecnologías pueden servir
          para finalidades muy diversas, como, por ejemplo, reconocerle como
          usuario, obtener información sobre sus hábitos de navegación, enviarle
          publicidad o personalizar la forma en que se muestra el contenido. A
          continuación, le detallamos los diferentes tipos de cookies
          existentes:
        </p>
        <ul role="list" className="space-y-8 mt-10 text-gray-600">
          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Tipo de cookies según su finalidad
            </h1>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies Técnicas:
                </strong>
                <p>
                  Permiten controlar el tráfico de datos, identificar la sesión,
                  realizar compras, realizar solicitudes, utilizar elementos de
                  seguridad durante la navegación, almacenar contenidos para
                  visualización de videos o sonido o compartir contenidos
                  mediante las redes sociales.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies de Análisis/Medición:
                </strong>
                <p>
                  Permiten al responsable de estas, realizar análisis del
                  comportamiento de los usuarios del sitio web y se utilizan
                  para la medición de la actividad del sitio web y para elaborar
                  perfiles de navegación de los usuarios, con la finalidad de
                  ofrecer mejoras de uso para los usuarios.
                </p>
              </span>
            </div>

            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies Sociales:
                </strong>
                <p>
                  Son necesarias para las redes sociales externas (Facebook,
                  Twitter, Pinterest, Instagram, etc.). Su función es controlar
                  la interacción con los widgets sociales dentro del sitio web.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies de Geolocalización:
                </strong>
                <p>
                  Permiten conocer el lugar donde se encuentra el usuario y
                  ofrecerle la información adecuada según la ciudad o país que
                  más le interesa. Esta cookie es anónima.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies de Personalización:
                </strong>
                <p>
                  Permiten reconocer al usuario y ofrecerle información
                  personalizada, como el idioma, tipo de navegador, etc.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies Publicitarias:
                </strong>
                <p>
                  Permiten gestionar la publicidad que hay en el sitio web,
                  adecuándola al servicio o productos solicitados.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies de Publicidad Comportamental:
                </strong>
                <p>
                  Permiten gestionar la publicidad que hay en el sitio web,
                  almacenando comportamientos del usuario como resultado de la
                  observación continuada de sus hábitos de navegación, lo que
                  permite desarrollar publicidad con un perfil específico.
                </p>
              </span>
            </div>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Tipos de cookies según su duración
            </h1>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  De sesión:
                </strong>
                <p>
                  Se trata de cookies diseñadas para recabar y almacenar datos
                  mientras el usuario visita un sitio web. Cuando finaliza la
                  sesión no quedan almacenadas en el dispositivo informático del
                  usuario.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Persistentes:
                </strong>
                <p>
                  Se trata de cookies que permanecen instaladas en el
                  dispositivo informático del usuario y la información
                  proporcionada puede ser tratada cuando el usuario abandona el
                  sitio web y cuando vuelva a conectarse de nuevo. Estas cookies
                  pueden ser eliminadas en cualquier momento por el usuario.
                </p>
              </span>
            </div>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Tipos de cookies según la entidad que las gestione
            </h1>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies Propias:
                </strong>
                <p>
                  Se trata de cookies que se envían al dispositivo informático
                  del usuario desde el sistema informático propiedad del titular
                  del sitio web, desde donde se ha realizado la solicitud,
                  prestado el servicio o realizado una compra.
                </p>
              </span>
            </div>
            <div className="flex gap-x-3 mt-2">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  Cookies de Terceros:
                </strong>
                <p>
                  Se trata de cookies que se envían al dispositivo informático
                  del usuario desde un dominio o sistema informático que no es
                  propiedad del titular del sitio web, sino por otra entidad
                  tercera autorizada o contratada por el titular del sitio web,
                  desde donde se ha realizado la solicitud, prestado el servicio
                  o realizado una compra. Debe saber que si acepta las cookies
                  de terceros, deberá eliminarlas desde las opciones del
                  navegador o desde el sistema ofrecido por el propio tercero. A
                  continuación le detallamos sitios que podrá visitar para
                  conocer mejor las cookies de terceros (desactivación, posibles
                  transferencias de datos a terceros países, etc.): Google
                  Chrome Mozilla Firefox Microsoft Edge Chrome para Android
                  Safari (Apple) Opera Firefox Así como Google AdWords Si
                  utiliza otros navegadores le recomendamos consultar su
                  política de uso y gestión de cookies. Le informamos que si
                  desactiva alguna de las cookies, la herramienta de control
                  dejará de funcionar con eficacia y esto puede tener un efecto
                  negativo en su experiencia de navegación en general.
                </p>
              </span>
            </div>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Tipos de cookies exceptuadas de consentimiento
            </h1>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>Cookies de “entrada del usuario”</p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>
                  Cookies de autenticación o identificación de usuario
                  (únicamente de sesión).
                </p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>Cookies de seguridad del usuario</p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>Cookies de sesión de reproductor multimedia.</p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>Cookies de sesión para equilibrar la carga.</p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>Cookies de personalización de la interfaz de usuario.</p>
              </span>
            </div>
            <div className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <p>
                  Determinadas cookies de complemento (plug-in) para
                  intercambiar contenidos sociales
                </p>
              </span>
            </div>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Elaboración de perfiles
            </h1>
            <p>
              Como parte del deber de información del artículo 13.2 f) del RGPD,
              le comunicamos que en caso de realizar perfiles sobre su persona,
              le solicitaremos consentimiento previo. No obstante, debe saber
              que puede oponerse a ser objeto de una decisión automatizada de
              sus datos, donde se evalúen aspectos personales, como puede ser
              analizar o predecir aspectos relacionados con su rendimiento en el
              trabajo, situación económica, salud, las preferencias o intereses
              personales, fiabilidad o el comportamiento, de manera que a
              consecuencia de ello se produzcan efectos jurídicos sobre su
              persona o le afecte de una manera similar.
            </p>
            <p>
              Nuestra entidad adoptará las medidas de seguridad adecuadas que
              protejan sus derechos y libertades, así como sus intereses
              legítimos, como son el derecho a obtener intervención humana por
              nuestra parte para expresar tu punto de vista e impugnar la
              decisión.
            </p>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Cesión de datos
            </h1>
            <p>
              Sus datos personales no se cederán a otros países ni a terceros.
              En caso de cesiones a otras entidades o a otros países fuera de la
              Unión Europea, le informaremos y solicitaremos su consentimiento
              previo.
            </p>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Legitimación
            </h1>
            <p>
              Al pulsar libremente el botón ACEPTAR de la ventana informativa de
              cookies (banner o pop up), usted consiente expresamente el uso de
              cookies, aunque en cualquier momento puede cambiar de opinión y
              retirar su consentimiento.
            </p>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Sus Derechos
            </h1>
            <p>
              Tiene derecho a conocer si nuestra entidad está tratando sus datos
              personales; por tanto, tiene derecho a acceder a sus datos,
              rectificarlos si son inexactos o solicitar su supresión cuando los
              datos ya no sean necesarios.
            </p>
            <p>
              También puede ejercer su derecho de oposición, limitación o
              portabilidad si así lo estima conveniente y para ello puede
              realizarlo por escrito mediante correo electrónico a
              clinicamedicoesteticaems@gmail.com y adjuntando copia de su DNI
              para identificarte.
            </p>
          </li>

          <li>
            <h1 className="pb-2 text-xl  text-gray-900 sm:text-2xl">
              Plazo de conservación
            </h1>
            <p>
              El plazo de conservación de los datos será el menor posible, de
              acuerdo con la finalidad para la cual se recabaron los datos,
              atendiendo al principio de minimización de los datos.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CookiesPolicy;
