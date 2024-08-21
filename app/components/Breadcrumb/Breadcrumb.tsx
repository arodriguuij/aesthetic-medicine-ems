import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Content from "./Content";

const Breadcrumb = () => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol role="list" className="flex items-center space-x-4">
      <li>
        <div>
          <Link href="/" aria-label="Enlace a la pagina home">
            <div className="text-amber-500 hover:text-amber-600">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </div>
          </Link>
        </div>
      </li>
      <Content />
    </ol>
  </nav>
);

export default Breadcrumb;
