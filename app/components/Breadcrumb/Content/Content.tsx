"use client"

import React from "react";
import { getPages } from "../breadcrumb.helper";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGetProductQuery } from "@/services/products/products";
import { useGetTreatmentsQuery } from "@/services/treatments/treatments";
import { useGetAreasQuery } from "@/services/areas/areas";

const Content = () => {
  const pathName = usePathname();

  const { data: products } = useGetProductQuery("");
  const { data: treatments } = useGetTreatmentsQuery("");
  const { data: areas } = useGetAreasQuery("");

  const splitString = pathName.split("/").filter((part) => part !== "");

  const pages = getPages(splitString, products, treatments, areas);

  return pages.map((page, index) => (
    <li key={page.name} style={{ marginLeft: 2 }}>
      <div className="flex items-center">
        <ChevronRightIcon
          className="h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
        {page.name === "areas" || index === pages.length - 1 ? (
          <p
            aria-hidden="true"
            className="h-5 text-gray-500 mr-4 font-medium text-sm flex-shrink-0"
            style={{ marginLeft: 2 }}
          >
            {page.name}
          </p>
        ) : (
          <Link
            href={page.href}
            aria-current={page.current ? "page" : undefined}
            aria-label={`Enlace a la pagina ${page.name}`}
          >
            <div className="text-sm ml-1 font-medium text-gray-500 hover:text-gray-700">
              {page.name}
            </div>
          </Link>
        )}
      </div>
    </li>
  ));
};

export default Content;
