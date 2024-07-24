'use client'

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "../../components/Breadcrumb";

const Privacy = () => {
  return (
    <div className="isolate mx-auto px-6 lg:px-8 items-center">
      {/* Breadcrumb */}
      <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <Breadcrumb />
      </div>

      {/* Content */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl pb-8 sm:py-12 lg:px-8">
          <ul role="list" className="space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  TRATAMIENTO DE DATOS PERSONALES
                </strong>{" "}
                <p className="mt-6">
                  Los datos personales que nos ha facilitado serán tratados de
                  forma confidencial y quedarán incorporados a la
                  correspondiente actividad de tratamiento titularidad de
                  nuestra entidad.
                </p>
                <p className="mt-2">
                  Solicitamos aquellos datos imprescindibles para atender su
                  solicitud, facturar si realiza una compra o contratación o
                  mantener la relación con su persona en caso de que lo solicite
                  o cuando nos veamos obligados para poder prestarle los
                  servicios y/o atender sus compras en este sitio web.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  FINALIDAD{" "}
                </strong>{" "}
                <p className="mt-6">
                  Sus datos personales serán tratados con la única finalidad de
                  atender sus solicitudes, ya sea cliente, proveedor, usuario de
                  nuestra web o solicitante de empleo. No enviamos publicidad
                  sin el consentimiento previo del usuario.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  LEGITIMACIÓN
                </strong>{" "}
                <p className="mt-6">
                  El tratamiento de sus datos se realiza con las siguientes
                  bases:
                </p>
                <p className="mt-2">
                  La solicitud por su parte de información, solicitud de empleo
                  y/o contratación de nuestros servicios y/o compra de
                  productos.
                </p>
                <p className="mt-2">
                  El consentimiento libre, específico, informado e inequívoco,
                  puesto que le informamos de la presente política de
                  privacidad, que tras la lectura de esta y de estar conforme,
                  puede aceptar mediante la marcación de las casillas dispuestas
                  a tal efecto.
                </p>
                <p className="mt-2">
                  En cualquier momento puede cambiar de opinión y retirar su
                  consentimiento.
                </p>
                <p className="mt-2">
                  En el caso que el usuario sea menor de 14 años o incapacitado,
                  será necesario contar con el consentimiento de los padres,
                  tutores o representante legal, para tratar los datos del
                  usuario. El usuario es el único responsable de la veracidad de
                  los datos que nos remite.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  MEDIDAS DE SEGURIDAD
                </strong>{" "}
                <p className="mt-6">
                  Nuestra entidad ha implantado todas las medidas técnicas y
                  organizativas necesarias para proteger los datos personales
                  tratados, evitando su pérdida, robo o uso no autorizado.
                </p>
                <p className="mt-2">
                  Dichas medidas son verificadas periódicamente en nuestros
                  controles de cumplimiento de la normativa específica.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  CONSERVACIÓN DE DATOS
                </strong>{" "}
                <p className="mt-6">
                  Los datos personales proporcionados se conservarán durante el
                  tiempo necesario para cumplir con la finalidad para la que se
                  recaban y para determinar las posibles responsabilidades que
                  se pudieran derivar de la finalidad.
                </p>
                <p className="mt-6">
                  En el caso de solicitudes de empleo, se conservarán durante el
                  plazo máximo de 1 año o hasta que el interesado nos solicite
                  suprimir sus datos.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  DERECHOS DE LOS INTERESADOS
                </strong>{" "}
                <p className="mt-6">
                  Usted tiene derecho a conocer si nuestra entidad está tratando
                  sus datos personales; por tanto, tiene derecho a acceder a sus
                  datos, rectificarlos si son inexactos o solicitar su supresión
                  cuando los datos ya no sean necesarios.
                </p>
                <p className="mt-2">
                  También puede ejercer su derecho de oposición, limitación o
                  portabilidad si así lo estima conveniente y para ello puede
                  realizarlo por escrito mediante correo electrónico a
                  clinicamedicoesteticaems@gmail.com adjuntando copia de su DNI
                  para identificarle.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  ELABORACIÓN DE PERFILES
                </strong>{" "}
                <p className="mt-6">
                  No elaboramos perfiles utilizando sus datos personales, pero
                  en el caso de hacerlo se le informará y solicitará permiso
                  para hacerlo.
                </p>
                <p className="mt-6">
                  Del mismo modo, tiene el derecho a oponerse a este tipo de
                  tratamiento en cualquier momento.
                </p>
              </span>
            </li>

            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-1 h-5 w-5 flex-none text-amber-400"
              />
              <span>
                <strong className="font-semibold text-gray-900">
                  CESIÓN DE DATOS
                </strong>{" "}
                <p className="mt-6">
                  Sus datos personales no se cederán a otros países ni a
                  entidades terceras salvo en los casos que exista una
                  obligación legal.
                </p>
                <p className="mt-6">
                  En caso de compra de productos o contratación de servicios,
                  sus datos personales podrán ser cedidos a aquellas entidades
                  necesarias para entregarle los productos adquiridos o
                  prestarle nuestros servicios.
                </p>
                <p className="mt-6">
                  Nuestro banco conocerá sus datos para la gestión del cobro de
                  productos o servicios, así como los encargados del tratamiento
                  necesarios para la ejecución de las contrataciones y/o
                  compras.
                </p>
                <p className="mt-6">
                  En caso de cesiones a otras entidades o a otros países, le
                  informaremos y solicitaremos su consentimiento previo.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
