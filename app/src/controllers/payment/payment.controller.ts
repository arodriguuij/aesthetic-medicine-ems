import { postPaymentService } from "../../services/payment";

export interface IPayment {
  amount: number;
}
export const postPayment = async (payment: IPayment) =>
  await postPaymentService(payment);
