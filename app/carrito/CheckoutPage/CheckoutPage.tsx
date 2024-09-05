"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { usePaymentMutation } from "@/services/payments/payments";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { convertToSubCurrency } from "@/utils/utils";
import { useAddGiftCardOrderMutation } from "@/services/giftCards/giftCards";
import { addGiftCardsOrderHistory } from "@/lib/orderHistory/orderHistorySlide";
import { GiftCardFormWithDiscountAppliedGet } from "@/lib/card/cardSlide";
import { DataFormGiftCard } from "@/app/tarjetaRegalo/Form/form.types";

const CheckoutPage = ({
  amount,
  discount,
  giftCard,
}: {
  amount: number;
  discount: number;
  giftCard: DataFormGiftCard;
}) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const [paymentMethod] = usePaymentMutation();
  const [addGiftCardOrder] = useAddGiftCardOrderMutation();

  useEffect(() => {
    if (amount > 0) {
      const fetchDataAsyncFnc = async () =>
        await paymentMethod({ amount: convertToSubCurrency(amount) });

      fetchDataAsyncFnc()
        .then((res) => {
          setClientSecret(res.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [amount, paymentMethod]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/confirmacionPago?amount=${amount}`,
      },
      redirect: "if_required", // Prevent automatic redirect
    });

    if (result.error) {
      setErrorMessage(result.error.message);
      //TODO: send to an error page
    } else {
      const {
        id,
        client_secret,
        created,
        currency,
        payment_method_types,
        status,
      } = result.paymentIntent;
      const orderHistory = await addGiftCardOrder({
        ...giftCard,
        discount,
        finalPrice: amount,
        idPaymentStripe: id,
        clientId: client_secret || "",
        created,
        currency,
        paymentMethod: payment_method_types[0],
        status,
      });

      //TODO: check for error in addGiftCardOrder
      dispatch(
        addGiftCardsOrderHistory(
          orderHistory.data as GiftCardFormWithDiscountAppliedGet
        )
      );
      //scrollToTop();
      redirect("/confirmacionPago")
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="flex w-full mt-4 items-center justify-center rounded-md border border-transparent bg-black py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        <span className="sr-only">Pay</span>
        {!loading ? `Pagar ${amount}€` : "Procesando..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
