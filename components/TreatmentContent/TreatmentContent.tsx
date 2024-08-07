import { cld } from "@/utils/cloudinary";
import { scrollToTop } from "@/utils/utils";
import { AdvancedImage } from "@cloudinary/react";
import Link from "next/link";
import React from "react";
import Breadcrumb from "../Breadcrumb";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon } from "@heroicons/react/20/solid";
import { PlusSmallIcon } from "@heroicons/react/20/solid";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Treatment } from "@/services/treatments/treatments.types";
import useIsMobile from "@/hooks/useIsMobile";
import Image from "next/image";

interface ITreatmentContent {
  error: FetchBaseQueryError | SerializedError | undefined;
  data?: Treatment[];
}

const TreatmentContent = ({ data, error }: ITreatmentContent) => {
  const isMobile = useIsMobile();

  return (
    <div className="isolate mx-auto px-6 lg:px-8 items-center">
      {/* Breadcrumb */}
      <div>
        <div
          className={
            error || !data
              ? "mx-auto max-w-7xl py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
              : "mx-auto max-w-7xl py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-16 xl:px-8 absolute "
          }
          style={
            error || !data
              ? {}
              : {
                  zIndex: 2,
                  opacity: 0.8,
                  backgroundColor: isMobile ? "white" : "",
                  borderBottomRightRadius: "1rem",
                  paddingRight: "1rem",
                }
          }
        >
          <Breadcrumb />
        </div>
      </div>
      {error || !data ? (
        <div className="mx-auto pb-2 sm:px-6 sm:pb-4 lg:max-w-7xl lg:px-8 pt-4">
          Error en la carga del tratamiento
        </div>
      ) : (
        <>
          <div aria-hidden="true" className="relative">
            <AdvancedImage
              cldImg={cld.image(data[0].images.main)}
              alt=""
              className="h-96 w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white" />
          </div>

          <div className="relative max-w-7xl mx-auto -mt-12 pb-18 sm:px-6  lg:px-8">
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {data[0].title}
              </h2>
              <h2 className="font-medium text-amber-400">{data[0].subtitle}</h2>
              <>
                {data[0].longDescription.map((description, index) => (
                  <p
                    key={description.slice(0, 10) + index}
                    className="mt-4 text-gray-500"
                  >
                    {description}
                  </p>
                ))}
              </>
            </div>

            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Tiempo de tratamiento
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data[0].properties.time}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Anestesia</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data[0].properties.anesthesia ? "Sí" : "No"}
                </dd>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Zonas a tratar</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data[0].properties.populatedAreas?.map((area, index) => (
                    <Link
                      key={area.id + index}
                      href={`/treatments/areas/${area.id}`}
                      aria-label="Enlace a la pagina del area"
                    >
                      <div onClick={scrollToTop}>
                        <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-xs mx-1 font-medium text-amber-600 ring-1 ring-inset ring-amber-500/10">
                          {area.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Duración de los resultados
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data[0].properties.duration}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  Resultados visibles en
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {data[0].properties.resultsTime}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Otra propiedad</dt>
                <dd className="mt-2 text-sm text-gray-500">Otra propiedad</dd>
              </div>
            </dl>
          </div>

          <div className="mx-auto max-w-7xl pt-16 sm:pb-8 sm:px-6 sm:pb-18 lg:px-8">
            <div className="sm:py-8 xl:mx-auto xl:max-w-7xl">
              <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Resultados en clientes
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Observa las transformaciones reales de nuestros clientes.
                  </p>
                </div>
              </div>
              <div className="mt-4 flow-root">
                <div className="-my-2">
                  <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                    <div className="absolute flex space-x-8">
                      {data[0].images.clients.map((image, index) => (
                        <div
                          key={image.slice(0, 10) + index}
                          className="relative flex h-72 w-72 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
                        >
                          <span aria-hidden="true" className="absolute inset-0">
                            <AdvancedImage
                              cldImg={cld.image(image)}
                              alt={`image-${index}`}
                              className="object-cover object-center"
                            />
                          </span>
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl pt-16 pb-12 sm:px-6 sm:pb-12">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10">
              <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Preguntas más frecuentes
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Encuentra respuestas a las preguntas más comunes sobre
                    nuestros servicios y tratamientos.
                  </p>
                </div>
              </div>
              <dl className="mt-6 space-y-4 divide-y divide-gray-900/10">
                {data[0].questions &&
                  data[0].questions?.map((faq, index) => (
                    <Disclosure
                      as="div"
                      key={faq.question + index}
                      className="pt-4"
                    >
                      {({ open }) => (
                        <>
                          <dt>
                            <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
                              <span className="text-base font-semibold leading-7">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                  <MinusSmallIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusSmallIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="mt-2 pr-12">
                            <p className="text-base leading-7 text-gray-600">
                              {faq.answer}
                            </p>
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  ))}
              </dl>
            </div>
          </div>

          {data[0].relatedProducts && (
            <div className="mx-auto mt-8 max-w-7xl sm:mt-16 pb-8 lg:px-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  Productos y cremas
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Productos y cremas recomendadas para este tratamiento
                </p>
              </div>
              <div className="mt-4 flow-root">
                <div className="-my-2">
                  <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                    <div className="absolute flex space-x-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                      {data[0].relatedProducts.map(({ name, id, images }) => (
                        <Link
                          key={name}
                          href={`/products/${id}`}
                          replace
                          aria-label="Enlace a la pagina del producto"
                        >
                          <div
                            onClick={scrollToTop}
                            className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            >
                              <AdvancedImage
                                cldImg={cld.image(images[0])}
                                alt={`Image-${name}`}
                                className="h-full w-full object-cover object-center"
                              />
                            </span>
                            <span
                              aria-hidden="true"
                              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                            />
                            <span className="relative mt-auto text-center text-xl font-bold text-white">
                              {name}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:hidden">
                <Link
                  href="/products"
                  aria-label="Enlace a la pagina de los productos"
                >
                  <div
                    onClick={scrollToTop}
                    className="block text-sm font-medium leading-7 text-indigo-600 hover:text-indigo-500"
                  >
                    Ver todas las categorías
                    <span aria-hidden="true"> &rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          )}

          {/* {data[0].relatedTreatments && (
            <div className="mx-auto mt-8 max-w-7xl sm:mt-16 lg:px-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Otros clientes vieron
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Explora otros tratamientos de medicina estética recomendados
                    para ti.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:px-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                {data[0].relatedTreatments.map(
                  ({ id, images, title, type }, index) => (
                    <div key={id + title + index} className="group relative">
                      <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                        <AdvancedImage
                          cldImg={cld.image(images?.main)}
                          alt={`imageAlt${id + title}`}
                          className="object-cover object-center"
                        />
                        <div
                          className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                          aria-hidden="true"
                        >
                          <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                            Ver Tratamiento
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                        <h3>
                          <Link
                            href={`/treatments/${type.toLowerCase()}/${id}`}
                            onClick={scrollToTop}
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {title}
                          </Link>
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{type}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          )} */}
        </>
      )}
    </div>
  );
};

export default TreatmentContent;
