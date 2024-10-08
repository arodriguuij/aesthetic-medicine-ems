import Link from "next/link";
import React from "react";
import Breadcrumb from "../Breadcrumb";
import Image from "next/image";
import { cloudinaryLoader } from "@/utils/cloudinary";
import QA from "./QA";
import { ITreatmentContent } from "./treatmentContent.types";

const TreatmentContent = ({ data }: ITreatmentContent) => (
  <>
    <>
      <div>
        <div
          className={
            !data
              ? `mx-auto max-w-7xl py-2 md-4 lg-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white`
              : `mx-auto max-w-7xl py-2 md-4 lg-4 sm:px-6 lg:max-w-7xl lg:px-16 bg-white xl:px-8 absolute `
          }
          style={
            !data
              ? {}
              : {
                  zIndex: 2,
                  opacity: 0.8,
                  borderBottomRightRadius: "1rem",
                  paddingRight: "1rem",
                }
          }
        >
          <div className="px-6 lg:px-8">
            <Breadcrumb />
          </div>
        </div>
      </div>
      <div className="isolate mx-auto items-center">
        <div aria-hidden="true" className="relative">
          <Image
            alt={"Imagen principal del tratamiento" + data[0].id}
            src={cloudinaryLoader({
              src: data[0].images.main,
            })}
            width={1000}
            height={1000}
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
      </div>
    </>
    <div className="isolate mx-auto px-6 lg:px-8 items-center">
      <>
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
                    href={`/tratamientos/areas/${area.id}`}
                    aria-label="Enlace a la pagina del area"
                  >
                    <span className="inline-flex items-center rounded-md bg-amber-50 px-1.5 py-0.5 text-xs mx-1 font-medium text-amber-600 ring-1 ring-inset ring-amber-500/10">
                      {area.name}
                    </span>
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
          </dl>
        </div>

        {data[0].images.clients.length > 0 && (
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
                            <Image
                              alt="Imagen antes y depues clientes"
                              src={cloudinaryLoader({
                                src: image,
                              })}
                              width={1000}
                              height={1000}
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
        )}

        <QA questions={data[0].questions} />

        {data[0].relatedProducts && data[0].relatedProducts?.length > 0 && (
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
                        href={`/productos/${id}`}
                        replace
                        aria-label="Enlace a la pagina del producto"
                      >
                        <div className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto">
                          <span aria-hidden="true" className="absolute inset-0">
                            <Image
                              alt={"Imagen del producto " + name}
                              src={cloudinaryLoader({
                                src: images[0],
                              })}
                              width={1000}
                              height={1000}
                              className="h-full w-full object-contain object-center"
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
                href="/productos"
                aria-label="Enlace a la pagina de los productos"
              >
                <div className="block text-sm font-medium leading-7 text-amber-600 hover:text-amber-500">
                  Ver todos los productos
                  <span aria-hidden="true"> &rarr;</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </>
    </div>
  </>
);

export default TreatmentContent;
