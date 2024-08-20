import * as yup from "yup";

export const schema = yup
  .object({
    selectedGiftCardId: yup
      .number()
      .positive("Este campo es requerido")
      .integer()
      .required("Este campo es requerido"),
    nameBuyer: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    email: yup.string().email().required("Este campo es requerido"),
    nameReceiver: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    message: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce mensaje válido"
      )
      .min(3, "Mínimo 3 letras")
      .max(300, "Máximo 300 letras"),
  })
  .required();
