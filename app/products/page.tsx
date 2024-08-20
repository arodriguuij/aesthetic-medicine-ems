import Link from "next/link";
import { useGetBranchesQuery } from "../../services/branches/branches";
import { useGetProductsQuery } from "../../services/products/products";
import { cloudinaryLoader } from "../../utils/cloudinary";
import { scrollToTop } from "../../utils/utils";
import Image from "next/image";
import Loader from "../components/Loader";
import { GetServerSideProps } from "next";
import { Product } from "../types/products.types";
import { FetchBaseQueryError, QueryStatus } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { Branch } from "../types/branches.types";
import productsFetch from "./productsFetch";

const Products = async () => {
  /* const {
    data: productsData,
    error: productsError,
    status: productsStatus,
  } = useGetProductsQuery(""); */
  const { products:productsData, branches:branchesData } = await productsFetch();

  /* const {
    data: branchesData,
    error: branchesError,
    status: branchesStatus,
  } = useGetBranchesQuery(""); */

  /* if (productsStatus === "pending" || branchesStatus === "pending")
    return <Loader />; */

  return (
    <div
      className={
        "relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4"
      }
    >
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      {/* productsError || branchesError ? (
        <div className="mx-auto pb-2 sm:px-6 sm:pb-4 lg:max-w-7xl lg:px-8">
          Error en la carga de los productos
        </div>
      ) :  */(
        <>
          <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
            <div className="flex">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Productos
              </h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Descubre nuestra gama de productos y cremas de medicina estética,
              diseñados para mejorar y rejuvenecer tu piel.
            </p>
          </div>

          <div className="mx-auto pb-2 sm:px-6 sm:pb-4 lg:max-w-7xl lg:px-8">
            {branchesData &&
              branchesData.map(({ name }, index) => (
                <div key={name + index} className="mx-auto g:max-w-7xl pb-10">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <div>
                        <span className="absolute inset-0" />
                        {name}
                      </div>
                    </h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-6 text-gray-600">
                      Descubre nuestra selección de cremas de {name}.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-5 md:gap-y-0 lg:gap-x-8">
                    {productsData &&
                      productsData
                        .filter(({ branch }) => branch === name)
                        .sort((a, b) => a.priority - b.priority)
                        .map(
                          ({ id, name, images, quantity, branch, price }) => (
                            <div key={id} className="group relative">
                              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-800 border border-amber-400 group-hover:opacity-75 lg:h-72 xl:h-80">
                                <Image
                                  alt={`Image-${name}`}
                                  src={cloudinaryLoader({
                                    src: images[0],
                                  })}
                                  width={1000}
                                  height={1000}
                                  className="h-full w-full object-cover object-center bg-white "
                                />
                              </div>
                              <h3 className="mt-4">
                                <Link
                                  href={`/products/${id}`}
                                  aria-label="Enlace a la pagina del producto"
                                >
                                  <div
                                    onClick={scrollToTop}
                                    className="text-sm font-semibold leading-7 text-white"
                                  >
                                    <span className="absolute inset-0 " />
                                    <p className="text-base text-gray-900">
                                      {name}
                                    </p>
                                  </div>
                                </Link>
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                {branch}
                              </p>
                              <p className="mt-1 text-sm font-medium text-gray-700">
                                {quantity}ml - {price}€
                              </p>
                            </div>
                          )
                        )}
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
