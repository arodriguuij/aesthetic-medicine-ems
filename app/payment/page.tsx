"use client";

import CheckoutPage from "@/components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getSubTotal } from "../cart/cart.utils";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { useRouter } from "next/navigation";
import { GiftCard } from "../types/giftCards.types";
import { useSelector } from "react-redux";
import { CardState } from "@/lib/card/cardSlide";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Payment = () => {
  const router = useRouter();

  const { data: giftCardsData, error } = useGetGiftCardsQuery("");

  const { giftCard200, giftCard300, giftCard500 } = useSelector(
    (state: { card: CardState }) => state.card
  );

  if (!giftCardsData || error) router.push("/");

  const giftCards = [
    ...giftCard200.giftCards,
    ...giftCard300.giftCards,
    ...giftCard500.giftCards,
  ];

  const amount = getSubTotal(giftCardsData as GiftCard[], giftCards);

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount,
        currency: "eur",
        locale: "es",
      }}
    >
      <CheckoutPage amount={amount} />
    </Elements>
  );
};

export default Payment;
