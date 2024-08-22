import { Suspense } from "react";
import ProductList from "./ProductList";
import Loader from "../components/Loader";

const Products = async () => {
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
      {
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
          <Suspense fallback={<Loader />}>
            <ProductList />
          </Suspense>
        </>
      }
    </div>
  );
};

export default Products;
