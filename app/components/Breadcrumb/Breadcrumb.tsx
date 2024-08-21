import { useGetAreasQuery } from "@/services/areas/areas";
import { useGetProductQuery } from "@/services/products/products";
import { useGetTreatmentsQuery } from "@/services/treatments/treatments";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPages } from "./breadcrumb.helper";

const Breadcrumb = () => {
  const pathName = usePathname();

  const { data: products } = useGetProductQuery("");
  const { data: treatments } = useGetTreatmentsQuery("");
  const { data: areas } = useGetAreasQuery("");

  const splitString = pathName.split("/").filter((part) => part !== "");

  const pages = getPages(splitString, products, treatments, areas);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" aria-label="Enlace a la pagina home">
              <div className="text-amber-500 hover:text-amber-600">
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </div>
            </Link>
          </div>
        </li>
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {page.name === "areas" || index === pages.length - 1 ? (
                <p
                  aria-hidden="true"
                  className="h-5 text-gray-500 mr-4 ml-4 font-medium text-sm flex-shrink-0 "
                >
                  {page.name}
                </p>
              ) : (
                <Link
                  href={page.href}
                  aria-current={page.current ? "page" : undefined}
                  aria-label={`Enlace a la pagina ${page.name}`}
                >
                  <div className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {page.name}
                  </div>
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
