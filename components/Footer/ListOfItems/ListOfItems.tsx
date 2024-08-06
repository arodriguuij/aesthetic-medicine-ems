import Link from "next/link";
import { NavigationItem } from "../footer.types";
import { scrollToTop } from "../../../utils/utils";

const ListOfItems = ({ item }: { item: NavigationItem }) => (
  <li key={item.name} className="flex">
    {item.icon && (
      <div className="pr-2">
        <span className="sr-only">{item.name}</span>
        <item.icon className="h-6 w-6 text-amber-400" aria-hidden="true" />
      </div>
    )}
    {item.isLink ? (
      <Link href={item.href || "/"} passHref>
        <a
          onClick={scrollToTop}
          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
        >
          {item.name}
        </a>
      </Link>
    ) : (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
      >
        {item.name}
      </a>
    )}
  </li>
);

export default ListOfItems;
