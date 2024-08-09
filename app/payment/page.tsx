"use client";

import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getSubTotal } from "../cart/cart.utils";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { useRouter } from "next/navigation";
import { GiftCard } from "../types/giftCards.types";
import { useDispatch, useSelector } from "react-redux";
import { CardState } from "@/lib/card/cardSlide";
import { convertToSubCurrency } from "@/utils/utils";
import { useEffect } from "react";
import { resetGiftCardsOrderHistory } from "@/lib/orderHistory/orderHistorySlide";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: giftCardsData, error } = useGetGiftCardsQuery("");

  const { giftCard200, giftCard300, giftCard500 } = useSelector(
    (state: { card: CardState }) => state.card
  );

  const giftCards = [
    ...giftCard200.giftCards,
    ...giftCard300.giftCards,
    ...giftCard500.giftCards,
  ];
  const amount = getSubTotal(giftCardsData as GiftCard[], giftCards);

  useEffect(() => {
    dispatch(resetGiftCardsOrderHistory());
  }, [dispatch]);

  if (!giftCardsData || error) router.push("/");

  if (amount === 0) return null;
  console.log("[Payment]", amount);
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubCurrency(amount) || 100,
        currency: "eur",
        locale: "es",
      }}
    >
      <CheckoutPage amount={amount} giftCards={giftCards} />
    </Elements>
  );
};

export default Payment;
