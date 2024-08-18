"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetGiftCardsQuery } from "../../services/giftCards/giftCards";
import { CardState, GiftCardForm } from "../../lib/card/cardSlide";
import { calculateDiscount, getSubTotal } from "./cart.utils";
import CartItem from "./cartItem";
import { convertToSubCurrency } from "@/utils/utils";
import { useEffect, useState } from "react";
import { resetGiftCardsOrderHistory } from "@/lib/orderHistory/orderHistorySlide";
import { GiftCard } from "../types/giftCards.types";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "@/components/CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "@/components/Loader";
import { useCheckVoucherMutation } from "@/services/vouchers/vouchers";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

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
  const [voucherInput, setVoucherInput] = useState("");
  const [voucher, setVoucher] = useState<{
    existsVoucher: boolean;
    discount: number;
  } | null>(null);
  const [checkVoucher] = useCheckVoucherMutation();

  const {
    data: giftCardsData,
    error: giftCardsError,
    status,
  } = useGetGiftCardsQuery("");

  const handleChange = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    setVoucherInput(value);
  };

  const giftCard = useSelector(
    (state: { card: CardState }) => state.card.giftCard
  );

  useEffect(() => {
    dispatch(resetGiftCardsOrderHistory());
    return () => {
      setVoucherInput("");
      setVoucher(null);
    };
  }, [dispatch]);

  if (
    !giftCardsData ||
    giftCardsData.length === 0 ||
    giftCardsError ||
    !giftCard.selectedGiftCardId
  )
    router.push("/");

  if (status === "pending") return <Loader />;

  const priceAfterDiscount = calculateDiscount(
    getSubTotal(giftCardsData as GiftCard[], giftCard),
    voucher?.discount || 0
  );
  const existVoucher = voucher && voucher.discount > 0 && voucher.existsVoucher;

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
            {/* Voucher */}
            <div className="space-y-4 mt-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <div>
                <label
                  //for="voucher"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  ¿Tienes un código de descuento?
                </label>
                <input
                  type="text"
                  id="voucher"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
                  placeholder=""
                  required
                  onChange={handleChange}
                  value={voucherInput}
                />
              </div>
              <button
                disabled={voucherInput.length === 0}
                onClick={async () => {
                  const { data } = await checkVoucher(voucherInput);
                  setVoucher(
                    data as {
                      existsVoucher: boolean;
                      discount: number;
                    }
                  );
                }}
                className={
                  voucherInput.length === 0
                    ? "w-full mt-6 text-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm"
                    : "w-full mt-6 text-center rounded-md border border-transparent bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                }
              >
                Aplicar código
              </button>
              {voucher !== null ? (
                !existVoucher ? (
                  <div className="mt-6 flex items-center">
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-red-500"
                    />
                    <p className="ml-2 text-sm text-red-500">
                      El código de descuento no es válido
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 flex items-center">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 text-green-500"
                    />
                    <p className="ml-2 text-sm text-gray-500">
                      El código de descuento es válido ({voucher.discount}%
                      descuento)
                    </p>
                  </div>
                )
              ) : null}
            </div>
            {/* Money */}
            <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="text-gray-900">{priceAfterDiscount}€</dd>
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
                <dd className="text-base">{priceAfterDiscount}€</dd>
              </div>
            </dl>
          </div>
          {/* Stripe */}
          <div className="mx-auto w-full max-w-lg">
            <Elements
              stripe={stripePromise}
              options={{
                mode: "payment",
                amount: priceAfterDiscount,
                currency: "eur",
                locale: "es",
              }}
            >
              <CheckoutPage
                amount={priceAfterDiscount}
                discount={voucher?.discount || 0}
                giftCard={giftCard}
              />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
