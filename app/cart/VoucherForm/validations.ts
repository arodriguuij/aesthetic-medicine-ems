import * as yup from "yup";

export const schema = yup
  .object({
    voucher: yup
      .string()
      .required("Este campo es requerido")
      .min(3, "Mínimo 3 letras")
      .max(50, "Máximo 50 letras"),
  })
  .required();
