"use client";

import { branches, collections, testimonials } from "./home.consts";
import Link from "next/link";
import useIsMobile from "../hooks/useIsMobile";
import useIsTablet from "../hooks/useIsTablet";
import { useGetProductsQuery } from "../services/products/products";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { cld } from "../utils/cloudinary";
import { scrollToTop } from "@/utils/utils";

export default function HomePage() {
  const { data: productsData, error: productsError } = useGetProductsQuery("");

  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const testimonialsNew = isMobile ? testimonials.slice(0, 4) : testimonials;

  return (
    <div>
      {/* Hero section */}
      <div className="relative w-full overflow-hidden">
        <div className="react-player-wrapper">
          <AdvancedVideo
            cldVid={cld.video("EMS/HomePage/video")}
            className="react-player"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => console.error("Error playing video:", e)}
          />
        </div>
      </div>
      {/* <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8"
      >
        <Sello />
      </div> */}
      {/* <script src="https://sello.seme.org/morgado2123-j4m2GL"></script> */}
      {/* <ExternalScript src="https://sello.seme.org/morgado2123-j4m2GL" /> */}
      {/* Title*/}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 pt-8 sm:px-6 sm:pt-12 lg:max-w-7xl lg:px-8"
      >
        <div className="mx-auto sm:px lg:max-w-7xl">
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 ">
            Tratamientos Medicina Estética y Antiedad
          </p>
        </div>
        <p className="mt-2 text-md leading-6 text-gray-600">
          Descubre nuestra amplia gama de tratamientos de medicina estética
          indicada para tu tipo de piel y edad
        </p>
      </div>
      {/* Tratamientos */}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-3xl px-4 pt-0 sm:px-6 sm:pt-0 lg:max-w-7xl lg:px-8"
      >
        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0">
          {collections.map((collection) => (
            <Link
              href={collection.href}
              key={collection.name}
              aria-label={`Enlace a la pagina ${collection.href}`}
            >
              <div onClick={scrollToTop} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg"
                >
                  <AdvancedImage
                    cldImg={cld.image(collection.imageSrc)}
                    alt={collection.imageAlt}
                    className=" w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Tratamiento Destacado */}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 sm:pt-20 lg:max-w-7xl lg:px-8"
      >
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <AdvancedImage
              cldImg={cld.image("EMS/HomePage/VaricesStar")}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-gray-900 bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg">
            <div>
              <h1 className="text-base font-semibold leading-7 text-amber-400">
                Tratamiento destacado
              </h1>
              <h2 className="text-xl font-bold text-white">
                Esclerosis de varices
              </h2>
              <p className="mt-1 text-sm text-gray-300">
                El tratamiento de varices incluye técnicas como la
                escleroterapia, láser y microcirugía, para eliminar o reducir la
                apariencia de las venas varicosas en las piernas.
              </p>
            </div>
            <Link
              href="/treatments/corporal/19"
              aria-label="Enlace al tratamiento de Eslerosis de varices"
            >
              <div
                onClick={scrollToTop}
                className="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
              >
                Ver más información
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Products */}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 sm:pt-14 lg:max-w-7xl lg:px-8"
      >
        {productsError ? (
          <>Error en la carga de los productos</>
        ) : (
          <div className="sm:py-8 xl:mx-auto xl:max-w-7xl">
            <div>
              <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  Productos y cremas
                </h2>
                <Link
                  href="/products"
                  aria-label="Enlace a la pagina productos"
                >
                  <div
                    onClick={scrollToTop}
                    className="hidden text-sm font-medium leading-7 text-indigo-600 hover:text-indigo-500 sm:block"
                  >
                    Ver todas las categorías
                    <span aria-hidden="true"> &rarr;</span>
                  </div>
                </Link>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Descubre nuestra selección de productos y cremas de alta calidad
                que utilizamos en nuestra clínica de medicina estética. A
                continuación, encontrarás imágenes de los productos que nos
                ayudan a ofrecerte los mejores resultados en el cuidado de tu
                piel, garantizando efectividad y seguridad en cada tratamiento.
              </p>
            </div>
            <div className="mt-4 flow-root">
              <div className="-my-2">
                <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                  <div className="absolute flex space-x-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                    {productsData &&
                      productsData
                        .filter(({ featured }) => featured)
                        .map(({ name, id, images }) => (
                          <Link
                            key={name}
                            href={`products/${id}`}
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
                aria-label="Enlace a la pagina de productos"
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
      </div>
      {/* Branches */}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 sm:pt-8 lg:max-w-7xl lg:px-8"
      >
        <div className="pb-4 sm:py-8 xl:mx-auto xl:max-w-7xl">
          <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                Marcas con las que trabajamos
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                En nuestra clínica de medicina estética, colaboramos con marcas
                líderes en belleza y cuidado de la piel. A continuación, puedes
                ver las imágenes de las marcas que nos permiten ofrecer
                tratamientos de alta calidad, innovadores y seguros para tu
                bienestar y satisfacción.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-6 sm:max-w-3xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {branches.map(({ id, image, name }, index) => (
              <AdvancedImage
                cldImg={cld.image(image)}
                key={id + index}
                //style={{ filter: "grayscale(1)" }}
                className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
                alt={name}
                width={158}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Sobre Mi */}
      {!isMobile && (
        <div
          aria-labelledby="collection-heading"
          className="mx-auto max-w-3xl px-4 pb-12 sm:px-6 sm:pt-10 lg:max-w-7xl lg:px-8"
        >
          <div className="sm:py-8 xl:mx-auto xl:max-w-7xl">
            <div>
              <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  Sobre Mi
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Conoce a la Dra. Elvira Morgado Sánchez, especialista en
                medicina estética, y descubre su dedicación y experiencia.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {!isTablet && (
              <div className="lg:pr-4 pt-4">
                <div
                  style={{ height: "39rem" }}
                  className="relative overflow-hidden rounded-3xl px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 h-4/5"
                >
                  <AdvancedImage
                    cldImg={cld.image("EMS/HomePage/Profile")}
                    className="absolute inset-0 h-full w-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            )}
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="text-base font-medium leading-7 text-indigo-600">
                  Doctora en Medicina
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Elvira Morgado Sánchez
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Graduada en medicina por la Universidad Complutense de
                    Madrid. Master en medicina estetica 2018. Lleva más de 6
                    años ejerciendo medicina estetica en exclusiva para ofrecer
                    los mejores tratamientos y servicio a sus pacientes.
                  </p>
                  <p>
                    En su experiencia profersional cabe destacar su trabajo y
                    formación en centros de referencia de Madrid, Ciudad real,
                    Barcelona, Palma de Mallorca y Marbella.
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
                    Mi pasión es ayudar a las personas a sentirse mejor y que
                    todo tratamiento se convierta en una experiencia única.
                  </p>
                  <dl className="mt-8 border-t border-gray-900/10 " />
                  <p className="mt-8">
                    Especialista en tratamientos faciales antiedad y
                    armonización simple y sutil del rostro. Experta en
                    flebologia y tratamiento de varices.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex">
                <Link href="/aboutMe" aria-label="Enlace a la pagina sobre mi">
                  <div
                    onClick={scrollToTop}
                    className="text-base font-medium leading-7 text-indigo-600 hover:text-indigo-500"
                  >
                    Saber más sobre Elvira
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Social Media */}
      <div
        aria-labelledby="collection-heading"
        className="mx-auto max-w-3xl px-4 pt-14 sm:px-6 sm:pt-4 lg:max-w-7xl lg:px-8"
      >
        <div className="pb-4 sm:py-8 xl:mx-auto xl:max-w-7xl">
          <div className=" sm:flex sm:items-center sm:justify-between  xl:px-0">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900">
                Redes sociales y valoraciones
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Explora nuestras redes sociales y descubre las valoraciones de
                nuestros pacientes. A continuación, encontrarás fotos de
                Instagram y opiniones que reflejan la experiencia y satisfacción
                de quienes confían en nuestra clínica de medicina estética para
                su cuidado y bienestar.
              </p>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-sm font-medium text-gray-900 dark:text-gray-900">
              5
            </p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
              (21 opiniones) {/* TODO: fetch info from DB or Google */}
            </p>
          </div>

          {/* Google Reviews */}
          <>
            <div
              className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div
                className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#fbbf24d9] to-[#fffbebd9]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
              aria-hidden="true"
            >
              <div
                className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#fbbf24d9] to-[#fffbebd9] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto mt-8 flow-root sm:mt-8 lg:mx-0 lg:max-w-none">
                <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                  {testimonialsNew.map((testimonial) => (
                    <div
                      key={testimonial.author.handle}
                      className="pt-8 sm:inline-block sm:w-full sm:px-4"
                    >
                      <figure className="rounded-2xl border border-amber-400 p-8 text-sm leading-6">
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <a
                          href={testimonial.author.handle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600"
                        >
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <AdvancedImage
                              cldImg={cld.image(testimonial.author.imageUrl)}
                              className="h-10 w-10 rounded-full bg-gray-50"
                              alt=""
                            />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                  <svg
                                    key={star + index + testimonial.author.name}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="size-4"
                                    color="rgb(252, 191, 2)"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                ))}
                              </div>
                              <div className="flex">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 48 48"
                                >
                                  <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                  ></path>
                                  <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                  ></path>
                                  <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                  ></path>
                                  <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                  ></path>
                                </svg>
                                <p>Ver en Google Reviews</p>
                              </div>
                            </div>
                          </figcaption>
                        </a>
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
