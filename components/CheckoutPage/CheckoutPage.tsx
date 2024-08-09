"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { usePaymentMutation } from "@/services/payments/payments";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { scrollToTop } from "@/utils/utils";
import { setDialogVisibility } from "@/lib/dialog/dialogSlide";
import { useAddGiftCardOrderMutation } from "@/services/giftCards/giftCards";
import { CardState } from "@/lib/card/cardSlide";
import { GiftCardFormGet } from "@/app/types/giftCards.types";

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { giftCard200, giftCard300, giftCard500 } = useSelector(
    (state: { card: CardState }) => state.card
  );

  const [paymentMethod] = usePaymentMutation();
  const [addGiftCardOrder] = useAddGiftCardOrderMutation();

  useEffect(() => {
    const fetchDataAsyncFnc = async () => await paymentMethod({ amount });

    fetchDataAsyncFnc()
      .then((res) => {
        setClientSecret(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
        return_url: `http://www.localhost:3000/paymentSuccess?amount=${amount}`,
      },
      redirect: "if_required", // Prevent automatic redirect
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.

      const giftCards = [
        ...giftCard200.giftCards,
        ...giftCard300.giftCards,
        ...giftCard500.giftCards,
      ];
      const giftCardsDB = await addGiftCardOrder(giftCards);
      /* dispatch(
        setDialogVisibility({
          isVisible: true,
          title: " Payment successful",
          content: (giftCardsDB.data as GiftCardFormGet[])
            .map(({ id }) => id)
            .join(","),
          goBackText: "Go back to dashboard",
          goBackUrl: "/",
        })
      ); */
      scrollToTop();
      //dispatch(resetCard());
      router.push(
        `/paymentSuccess?amount=${amount}&ids=${
          giftCardsDB.data as GiftCardFormGet[]
        }`
      );
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
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pagar ${amount}€` : "Procesando..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
