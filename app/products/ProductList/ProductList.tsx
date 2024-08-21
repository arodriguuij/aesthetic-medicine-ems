import { getBranches } from "@/app/src/controllers/branches";
import { getProducts } from "@/app/src/controllers/products";
import { cloudinaryLoader } from "@/utils/cloudinary";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = async () => {
  const productsData = await getProducts();
  const branchesData = await getBranches();

  return (
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
                  .map(({ id, name, images, quantity, branch, price }) => (
                    <div key={id} className="group relative">
                      <div className="h-56 w-full overflow-hidden rounded-md bg-gray-800 border group-hover:opacity-75 lg:h-72 xl:h-80">
                        <Image
                          alt={`Image-${name}`}
                          src={cloudinaryLoader({
                            src: images[0],
                          })}
                          width={1000}
                          height={1000}
                          className="h-full w-full object-cover object-center bg-white"
                          priority={true}
                        />
                      </div>
                      <h3 className="mt-4">
                        <Link
                          href={`/products/${id}`}
                          aria-label="Enlace a la pagina del producto"
                        >
                          <div className="text-sm font-semibold leading-7 text-white">
                            <span className="absolute inset-0 " />
                            <p className="text-base text-gray-900">{name}</p>
                          </div>
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{branch}</p>
                      <p className="mt-1 text-sm font-medium text-gray-700">
                        {quantity}ml - {price}€
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
