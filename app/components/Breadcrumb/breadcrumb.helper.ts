import { Treatment } from "@/app/types/treatments.types";
import { Product } from "@/app/types/products.types";
import { Area } from "@/app/types/areas.types";

export const getPages = (
  splitString: string[],
  products?: Product[],
  treatments?: Treatment[],
  areas?: Area[]
) =>
  splitString.map((part, index) => {
    const isLast = index === splitString.length - 1;

    let readableTitle = part;
    if (part === "tratamientos") {
      if (splitString.length === 3) readableTitle = "Ttos.";
      else readableTitle = "Tratamientos";
    }
    if (part === "productos") readableTitle = "Productos";
    if (part === "tarjetaRegalo") readableTitle = "Tarjeta regalo";
    if (part === "sobreMi") readableTitle = "Sobre mi";
    if (part === "contacto") readableTitle = "Contacto";
    if (part === "carrito") readableTitle = "Carrito";
    if (part === "confirmacionPago") readableTitle = "Confirmacion pago";
    if (part === "facial") readableTitle = "Faciales";
    if (part === "areas") readableTitle = "Areas";
    if (part === "corporal") readableTitle = "Corporales";

    if (typeof +part === "number" && +part > 0) {
      if (splitString[index - 1] === "productos" && products)
        readableTitle = products.find(({ id }) => id === +part)?.name || part;

      if (
        (splitString[index - 1] === "facial" ||
          splitString[index - 1] === "corporal") &&
        treatments
      )
        readableTitle =
          treatments.find(({ id }) => id === +part)?.title || part;

      if (splitString[index - 1] === "areas" && areas)
        readableTitle = areas.find(({ id }) => id === +part)?.name || part;
    }

    const href = "/" + splitString.slice(0, index + 1).join("/");

    return {
      name: readableTitle,
      href: href,
      current: isLast,
    };
  });
