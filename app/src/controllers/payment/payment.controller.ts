import { postPaymentService } from "../../services/payment";

export interface IPayment {
  paymentMethodId: number;
  amount: number;
}
export const postPaymentById = async (payment: IPayment) =>
  await postPaymentService(payment);
