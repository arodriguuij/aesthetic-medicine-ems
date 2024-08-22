import * as yup from "yup";

export const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Por favor, introduce un teléfono válido"
      )
      .test(
        "len",
        "El teléfono debe de tener 9 números",
        (val) => val.length === 9
      ),
    userName: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    email: yup.string().email().required("Este campo es requerido"),
    message: yup
      .string()
      .required("Este campo es requerido")
      .matches(
        /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
        "Por favor, introduce un nombre y apellidos válidos"
      )
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
    awareness: yup
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
