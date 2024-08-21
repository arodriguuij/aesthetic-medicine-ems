"use client";

import { useParams } from "next/navigation";
import { useGetProductQuery } from "../../../services/products/products";
import { cloudinaryLoader } from "../../../utils/cloudinary";
import { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Loader from "@/app/components/Loader";

const Product = () => {
  const { productId } = useParams();

  const { data, error, status } = useGetProductQuery(productId + "");

  if (status === "pending") return <Loader />;

  return error || !data ? (
    <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden pt-4">
      Error en la carga del producto
    </div>
  ) : (
    <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden pt-4">
      <div className="mx-auto sm:px-6 mb-2 lg:max-w-7xl lg:px-0">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {data[0].name}
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          {data[0].branch} ({data[0].quantity}ml - {data[0].price}€)
        </p>
      </div>

      <TabGroup className="sm:px-6 lg:px-0">
        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
          <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
            <TabList className="-mb-px flex space-x-8">
              <Tab
                key="IndicationTab"
                className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-indigo-600"
              >
                Indicación
              </Tab>
              <Tab
                key="BenefitsTab"
                className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-indigo-600"
              >
                Beneficios
              </Tab>
              <Tab
                key="IngredientsTab"
                className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-indigo-600"
              >
                Ingredientes
              </Tab>
            </TabList>
          </div>
        </div>

        <TabPanels as={Fragment}>
          <TabPanel
            key="IndicationTabPanel"
            className="space-y-16 pt-6 lg:pt-16"
          >
            <div
              key="Indication"
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="mt-6 lg:col-span-5 lg:mt-0">
                <div className="bg-gray-10">
                  <Image
                    alt="ProductImage"
                    src={cloudinaryLoader({
                      src: data[0].images[0],
                    })}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                    priority={true}
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Indicaciones y uso
                </h2>
                {data[0].howToUse.map((indication, index) => (
                  <p
                    className="mt-2 text-sm text-gray-500"
                    key={indication + index}
                  >
                    {indication}
                  </p>
                ))}
                {/* <div className="flex">
                  <CheckIcon
                    className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    {data[0].description}
                  </p>
                </div> */}
                {/* <div className="flex">
                  <CheckIcon
                    className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                    aria-hidden="true"
                  /> */}

                {/* </div> */}
              </div>
            </div>
          </TabPanel>
          <TabPanel key="BenefitsTabPanel" className="space-y-16 pt-6 lg:pt-16">
            <div
              key="Benefits"
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="mt-6 lg:col-span-5 lg:mt-0">
                <div className="bg-gray-10">
                  <Image
                    alt="ProductImage"
                    src={cloudinaryLoader({
                      src: data[0].images[0],
                    })}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  Beneficios
                </h2>
                {data[0].benefits.map((benefit, index) => (
                  <p
                    className="mt-2 text-sm text-gray-500 flex"
                    key={benefit + index}
                  >
                    <CheckIcon
                      className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                      aria-hidden="true"
                    />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          </TabPanel>
          <TabPanel
            key="IngredientsTabPanel"
            className="space-y-16 pt-6 lg:pt-16"
          >
            <div
              key="Ingredients"
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
            >
              <div className="mt-6 lg:col-span-5 lg:mt-0">
                <div className="bg-gray-10">
                  <Image
                    alt="ProductImage"
                    src={cloudinaryLoader({
                      src: data[0].images[0],
                    })}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-gray-500">
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    Ingredientes
                  </h2>
                  {data[0].ingredients.map((ingredient, index) => (
                    <p
                      className="mt-2 text-sm text-gray-500 flex"
                      key={ingredient + index}
                    >
                      <CheckIcon
                        className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                        aria-hidden="true"
                      />
                      <p>{ingredient}</p>
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Product;
