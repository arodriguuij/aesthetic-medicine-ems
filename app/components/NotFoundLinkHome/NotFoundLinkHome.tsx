import Link from "next/link";
import React from "react";

const NotFoundLinkHome = () => (
  <Link href="/" aria-label="Enlace a la pagina Home">
    <div className="text-sm font-semibold leading-7 text-gray-900">
      <span aria-hidden="true">&larr;</span> Vuelta a la página principal
    </div>
  </Link>
);

export default NotFoundLinkHome;
