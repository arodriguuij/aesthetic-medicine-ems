import { people, timeline } from "./equipoMedico.constants";
import { cloudinaryLoader } from "../../utils/cloudinary";
import Image from "next/image";

const AboutMe = () => (
  <div>
    {/* Hero section */}
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto py-2 sm:px-8 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Equipo médico
          </h2>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Consulta el calendario para conocer los días en los que estoy
          disponible cada mes en las distintas clínicas donde trabajo.
        </p>
      </div>
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-7">
        <div className="mx-auto py-2 sm:px-8 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="mx-auto md:mx-0 md:grid md:max-w-none md:grid-cols-2 md:gap-x-16 md:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:col-span-2 xl:col-auto">
              Elvira Morgado Sánchez
            </h1>
            <div className="mt-6 max-w-xl md:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-md sm:leading-8 text-gray-600 mb-3">
                Graduada en medicina por la Universidad Complutense de Madrid.
              </p>
              <p className="text-md sm:leading-8 text-gray-600 mb-3">
                Master en medicina estetica 2018.
              </p>
              <p className="text-md sm:leading-8 text-gray-600 mb-3">
                Lleva desde el 2018, ejerciendo medicina estética en exclusiva
                ofreciendo el mejor servicio a sus pacientes junto a los
                tratamientos de vanguardia.
              </p>
              <p className="text-md sm:leading-8 text-gray-600 mb-3">
                En su experiencia profesional cabe destacar su trabajo y
                formación en los centros de referencia en el sector, como son
                Policlinic (Barcelona), Medisans (Palma de Mallorca) y Larisa
                pastuchenco (Marbella), entre otros centros y su formación
                continua en congresos y formaciones a nivel nacional e
                internacional.
              </p>
              <dl className="mt-8 border-t border-gray-900/10 " />
              <p
                className="mt-6"
                style={{
                  fontStyle: "italic",
                  lineHeight: ".9em",
                  fontSize: "25px",
                  fontWeight: "400",
                }}
              >
                Mi pasión es devolver la confianza y autoestima a
                quienes acuden a mí, con la mayor dedicación y honestidad en mi
                trabajo.
              </p>
              <dl className="mt-8 border-t border-gray-900/10 " />
              <p className="text-md sm:leading-8 text-gray-600 mb-3 mt-6">
                Especialista en tratamientos antiedad y armonización facial,
                para quienes buscan un rasultado natural. Experta en flebologia
                y tratamiento de varices.
              </p>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p className="text-md font-medium text-gray-900 mr-2">
                  Nº Colegiado
                </p>
                <p className="text-md font-medium text-amber-400">07/2874636</p>
              </div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p className="text-md font-medium text-gray-900 mr-2">
                  Nº SEME
                </p>
                <p className="text-md font-medium text-amber-400">2123</p>
              </div>
            </div>
            <Image
              alt="Imagen Elvira Morgado"
              src={cloudinaryLoader({
                src: "EMS/General/ElviraMorgadoPhoto",
              })}
              width={1000}
              height={1000}
              className="mt-10 aspect-[4/5] w-full max-w-md rounded-2xl object-cover sm:mt-16 md:mt-0 md:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Timeline section */}
    <div className="mx-auto py-2 sm:px-8 sm:py-4 lg:max-w-7xl lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {timeline.map((item, index) => (
          <div key={item.name + index}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-amber-400"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle cx={2} cy={2} r={2} fill="currentColor" />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {item.name}
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Tiers section */}
    {/* <div className="relative isolate bg-white pb-14 pt-20 sm:py-28 lg:px-8">
      <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
        <div className="flex">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Clínicas de Medicina Estética
          </h2>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Consulta el calendario para conocer los días en los que estoy
          disponible cada mes en las distintas clínicas donde trabajo.
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-10 sm:gap-y-0 lg:max-w-5xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id + tierIdx}
            className={classNames(
              tier.featured
                ? "relative bg-amber-500 shadow-2xl opacity-80"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-white" : "text-amber-600",
                "text-base font-semibold leading-7"
              )}
            >
              {tier.priceMonthly}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-gray-900" : "text-gray-900",
                  "text-3xl font-bold tracking-tight"
                )}
              >
                {tier.name}
              </span>
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-white" : "text-gray-600",
                "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
              )}
            >
              {tier.features.map((feature, index) => (
                <li key={feature + index} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? "text-white" : "text-yellow-600",
                      "h-6 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div> */}

    {/* Team section */}
    {/* <div className="mx-auto max-w-7xl sm:px-8 pb-4">
      <div className="mx-auto mb-8 lg:max-w-7xl">
        <div className="flex">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Nuestro equipo
          </h2>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Contamos con un equipo de expertos dedicados y apasionados por brindar
          excelencia en medicina estética.
        </p>
      </div>
      <ul
        role="list"
        className="mt-10 grid max-w-3xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
      >
        {people.map((person) => (
          <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
            <Image
              alt="Imagen trabajador"
              src={person.imageUrl}
              width={1000}
              height={1000}
              className="aspect-[4/5] w-52 flex-none  xl:rounded-xl rounded-md object-cover"
            />

            <div className="flex-auto">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {person.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div> */}

    <div className="mx-auto max-w-7xl sm:px-8 pb-4 mt-20">
      <div className="bg-gray-900 pb-20 sm:pb-24 md:pb-0 mt-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 md:px-8 md:flex-row md:items-stretch">
          <div className="-mt-8 w-full max-w-2xl md:-mb-8 md:w-96 md:flex-none">
            <div className="relative aspect-[1/1] h-full md:-mx-8 md:mx-0 md:aspect-auto">
              <Image
                alt="Imagen trabajador"
                src={people[0].imageUrl}
                width={1000}
                height={1000}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl md:max-w-none md:flex-auto md:px-16 md:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>{people[0].content1}</p>
              </blockquote>
              <p className="text-white mt-4">{people[0].content2}</p>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">{people[0].name}</div>
                <div className="mt-1 text-gray-400">{people[0].role}</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
