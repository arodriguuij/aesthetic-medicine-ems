"use client";

import { useParams } from "next/navigation";
import Breadcrumb from "../../../components/Breadcrumb";
import { useGetProductQuery } from "../../../services/products/products";
import { cld } from "../../../utils/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Product = () => {
  const { productId } = useParams();

  /* const { data: productData, error: productError } = useGetProductQuery(
    productId + ""
  ); */

  const productData = [
    {
      id: 1,
      name: "string",
      branch: "string",
      type: "Facial",
      quantity: 1,
      description: "string",
      images: ["string"],
      featured: true,
      benefits: ["string"],
      howToUse: ["string"],
      ingredients: ["string"],
      priority: 1,
    },
  ];
  const productError = undefined;

  return (
    <div className="isolate mx-auto px-6 lg:px-8 items-center">
      {/* Breadcrumb */}
      <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <Breadcrumb />
      </div>

      {/* Content */}
      {productError || !productData ? (
        <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden pt-4">
          Error en la carga del producto
        </div>
      ) : (
        <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden pt-4">
          <div className="mx-auto sm:px-6 mb-2 lg:max-w-7xl lg:px-0">
            <div className="flex">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {productData[0].name}
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              {productData[0].branch}
            </p>
          </div>

          <TabGroup className="sm:px-6 lg:px-0">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <TabList className="-mb-px flex space-x-8">
                  <Tab
                    key="IndicationTab"
                    className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-amber-600"
                  >
                    Indicación
                  </Tab>
                  <Tab
                    key="BenefitsTab"
                    className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-amber-600"
                  >
                    Beneficios
                  </Tab>
                  <Tab
                    key="IngredientsTab"
                    className="whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-amber-500 data-[selected]:text-amber-600"
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
                      <AdvancedImage
                        cldImg={cld.image(productData[0].images[0])}
                        alt="ProductImage"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      Indicaciones y uso
                    </h2>
                    <div className="flex">
                      <CheckIcon
                        className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        {productData[0].description}
                      </p>
                    </div>
                    <div className="flex">
                      <CheckIcon
                        className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        {productData[0].howToUse}
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel
                key="BenefitsTabPanel"
                className="space-y-16 pt-6 lg:pt-16"
              >
                <div
                  key="Benefits"
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0">
                    <div className="bg-gray-10">
                      <AdvancedImage
                        cldImg={cld.image(productData[0].images[0])}
                        alt="ProductImage"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                      Beneficios
                    </h2>
                    {productData[0].benefits.map((benefit, index) => (
                      <p
                        className="mt-2 text-sm text-gray-500 flex"
                        key={benefit + index}
                      >
                        <CheckIcon
                          className={"text-yellow-600 h-6 w-5 flex-none mr-2"}
                          aria-hidden="true"
                        />
                        <p>{benefit}</p>
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
                      <AdvancedImage
                        cldImg={cld.image(productData[0].images[0])}
                        alt="ProductImage"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-7">
                    <p className="text-sm text-gray-500">
                      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                        Ingredientes
                      </h2>
                      {productData[0].ingredients.map((ingredient, index) => (
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
      )}
    </div>
  );
};

export default Product;
