import { Payment } from "@/app/types/payments.types";
import { postPaymentService } from "../../services/payment";

export const postPayment = async (payment: Payment) =>
  await postPaymentService(payment);
