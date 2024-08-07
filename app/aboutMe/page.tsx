"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { classNames } from "../../utils/utils";
import { people, tiers, timeline } from "./aboutMe.constants";
import { cld } from "../../utils/cloudinary";
import { AdvancedImage } from "@cloudinary/react";

const AboutMe = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Sobre mi
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Consulta el calendario para conocer los días en los que estoy
            disponible cada mes en las distintas clínicas donde trabajo.
          </p>
        </div>
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-7">
          <div className="mx-auto max-w-7xl pb-8 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">
                Elvira Morgado Sánchez
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-md sm:leading-8 text-gray-600 mb-3">
                  Graduada en medicina por la Universidad Complutense de Madrid.
                </p>
                <p className="text-md sm:leading-8 text-gray-600 mb-3">
                  Master en medicina estetica 2018.
                </p>
                <p className="text-md sm:leading-8 text-gray-600 mb-3">
                  Lleva más de 6 años ejerciendo medicina estetica en exclusiva
                  para ofrecer los mejores tratamientos y servicio a sus
                  pacientes.
                </p>
                <p className="text-md sm:leading-8 text-gray-600 mb-3">
                  En su experiencia profersional cabe destacar su trabajo y
                  formación en centros de referencia de Madrid, Ciudad real,
                  Barcelona, Palma de Mallorca y Marbella.
                </p>

                <p className="text-md sm:leading-8 text-gray-600 mb-3">
                  Especialista en tratamientos faciales antiedad y armonización
                  simple y sutil del rostro.
                </p>
                <p className="text-md sm:leading-8 text-gray-600 mb-8">
                  Experta en flebologia y tratamiento de varices.
                </p>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <p className="text-md font-medium text-gray-900 mr-2">
                    Nº Colegiado
                  </p>
                  <p className="text-md font-medium text-yellow-500 hover:text-yellow-600">
                    07/2874636
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <p className="text-md font-medium text-gray-900 mr-2">
                    Nº SEME
                  </p>
                  <p className="text-md font-medium text-yellow-500 hover:text-yellow-600">
                    2123
                  </p>
                </div>
              </div>
              <AdvancedImage
                cldImg={cld.image("EMS/General/ElviraMorgadoPhoto")}
                className="mt-10 aspect-[4/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="mx-auto py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item, index) => (
            <div key={item.name + index}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-yellow-600"
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
      <div className="relative isolate bg-white pb-14 pt-20 sm:py-28 lg:px-8">
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
                  ? "relative bg-yellow-500 shadow-2xl opacity-80"
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
                  tier.featured ? "text-white" : "text-yellow-600",
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
      </div>

      {/* Team section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-4">
        <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Nuestro equipo
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Contamos con un equipo de expertos dedicados y apasionados por
            brindar excelencia en medicina estética.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
              <AdvancedImage
                cldImg={cld.image(person.imageUrl)}
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                alt="WorkerPhoto"
              />

              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Quia illum aut in beatae. Possimus dolores aliquid accusantium
                  aut in ut non assumenda. Enim iusto molestias aut deleniti eos
                  aliquid magnam molestiae. At et non possimus ab. Magni labore
                  molestiae nulla qui.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
