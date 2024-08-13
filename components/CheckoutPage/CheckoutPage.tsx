"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { usePaymentMutation } from "@/services/payments/payments";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { convertToSubCurrency, scrollToTop } from "@/utils/utils";
import { useAddGiftCardOrderMutation } from "@/services/giftCards/giftCards";
import { addGiftCardsOrderHistory } from "@/lib/orderHistory/orderHistorySlide";
import { GiftCardForm, GiftCardFormGet } from "@/app/types/giftCards.types";

const temporaryPrice = 1;

const CheckoutPage = ({
  amount,
  giftCards,
}: {
  amount: number;
  giftCards: GiftCardForm[];
}) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const [paymentMethod] = usePaymentMutation();
  const [addGiftCardOrder] = useAddGiftCardOrderMutation();

  useEffect(() => {
    if (amount > 0) {
      const fetchDataAsyncFnc = async () =>
        await paymentMethod({ amount: convertToSubCurrency(temporaryPrice) });

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

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/paymentSuccess?amount=${temporaryPrice}`,
      },
      redirect: "if_required", // Prevent automatic redirect
    });

    if (error) {
      setErrorMessage(error.message);
      //TODO: send to an error page
    } else {
      const orderHistory = await addGiftCardOrder(giftCards);
      //TODO: check for error in addGiftCardOrder
      router.push("/paymentSuccess");
      dispatch(
        addGiftCardsOrderHistory(orderHistory.data as GiftCardFormGet[])
      );
      scrollToTop();
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
        {!loading ? `Pagar ${temporaryPrice}€` : "Procesando..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
