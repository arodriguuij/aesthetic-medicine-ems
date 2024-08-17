"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetGiftCardsQuery } from "../../services/giftCards/giftCards";
import { CardState, GiftCardForm } from "../../lib/card/cardSlide";
import { getSubTotal } from "./cart.utils";
import CartItem from "./cartItem";
import { convertToSubCurrency } from "@/utils/utils";
import { useEffect } from "react";
import { resetGiftCardsOrderHistory } from "@/lib/orderHistory/orderHistorySlide";
import { GiftCard } from "../types/giftCards.types";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "@/components/Loader";

let key;
if (process.env.NEXT_PUBLIC_STRIPE_ENVIRONMENT === "prod") {
  key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY_PROD;
} else {
  key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
}

const stripePromise = loadStripe(key || "");

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    data: giftCardsData,
    error: giftCardsError,
    status,
  } = useGetGiftCardsQuery("");

  const giftCard = useSelector((state: { card: CardState }) => state.card.giftCard);

  const amount = getSubTotal(giftCardsData as GiftCard[], giftCard);

  useEffect(() => {
    dispatch(resetGiftCardsOrderHistory());
  }, [dispatch]);

  if (!giftCardsData || giftCardsError || !giftCard.selectedGiftCardId)
    router.push("/");

  if (status === "pending") return <Loader />;

  return (
    <>
      {/* Header */}
      <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto sm:px-6 mb-8 lg:max-w-7xl lg:px-0">
          <div className="flex">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Carrito de compra
            </h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Regala belleza y bienestar con nuestras tarjetas regalo, el presente
            perfecto para cualquier ocasión.
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="mx-auto max-w-2xl pb-8 pt-8 lg:px-8 lg:max-w-7xl">
        <div className="mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Order Summary */}
          <div className="mx-auto w-full max-w-lg">
            <h2 className="sr-only">Resumen del pedido</h2>
            {/* Products */}
            <div className="flow-root">
              <ul
                role="list"
                className="-my-6 divide-y divide-gray-200 overflow-auto"
              >
                {giftCardsError && (
                  <>Error en la carga de las tarjetas de regalo</>
                )}
                {giftCardsData && giftCard.selectedGiftCardId && (
                  <CartItem
                    key={giftCard.selectedGiftCardId}
                    giftCardsData={giftCardsData}
                    giftCard={giftCard}
                  />
                )}
              </ul>
            </div>
            {/* Money */}
            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">
                  {giftCardsData && getSubTotal(giftCardsData, giftCard)}€
                </dd>
              </div>
              <div className="flex justify-between">
                <dt>Costes de envío</dt>
                <dd className="text-gray-900">0.00€</dd>
              </div>
              <div className="flex justify-between">
                <dt>Impuestos</dt>
                <dd className="text-gray-900">0.00€</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total del pedido</dt>
                <dd className="text-base">
                  {giftCardsData && getSubTotal(giftCardsData, giftCard)}€
                </dd>
              </div>
            </dl>
          </div>
          {/* Stripe */}
          <div className="mx-auto w-full max-w-lg">
            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: convertToSubCurrency(amount) || 100,
                currency: "eur",
                locale: "es",
              }}
            >
              <CheckoutPage amount={amount} giftCard={giftCard} />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
