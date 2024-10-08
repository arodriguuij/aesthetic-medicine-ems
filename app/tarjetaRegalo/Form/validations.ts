import * as yup from "yup";

export const schema = yup
  .object({
    selectedGiftCardId: yup
      .number()
      .positive("Seleccione un importe")
      .integer()
      .required("Seleccione un importe"),
    nameBuyer: yup
      .string()
      .required("El nombre del comprador es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    email: yup.string().email().required("El email es requerido"),
    nameReceiver: yup
      .string()
      .required("El nombre del destinatario es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    message: yup
      .string()
      .required("El mensajes es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce mensaje válido"
      )
      .min(3, "Mínimo 3 letras")
      .max(300, "Máximo 300 letras"),
  })
  .required();
