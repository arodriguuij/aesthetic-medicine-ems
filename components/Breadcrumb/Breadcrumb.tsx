"use client";

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { scrollToTop } from "../../utils/utils";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const location = pathname;
  const splitString = location.split("/").filter((part) => part !== "");

  const pages = splitString.map((part, index) => {
    const isLast = index === splitString.length - 1;
    const href = "/" + splitString.slice(0, index + 1).join("/");

    return {
      name: part,
      href: href,
      current: isLast,
    };
  });

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" arial-label="Enlace a la pagina home">
              <div
                onClick={scrollToTop}
                className="text-amber-500 hover:text-amber-600"
              >
                <HomeIcon
                  className="h-5 w-5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="sr-only">Home</span>
              </div>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {page.name === "areas" ? (
                <p
                  aria-hidden="true"
                  className="h-5 w-5 text-gray-500 mr-4 ml-4 font-medium text-sm flex-shrink-0 "
                >
                  {page.name}
                </p>
              ) : (
                <Link
                  href={page.href}
                  aria-current={page.current ? "page" : undefined}
                  arial-label={`Enlace a la pagina ${page.name}`}
                >
                  <div
                    onClick={scrollToTop}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
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
