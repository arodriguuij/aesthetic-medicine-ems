"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  useAddGiftCardOrderMutation,
  useGetGiftCardsQuery,
} from "../../services/giftCards/giftCards";
import { CardState, resetCard } from "../../lib/card/cardSlide";
import { setDialogVisibility } from "../../lib/dialog/dialogSlide";
import { getSubTotal } from "./cart.utils";
import CartItem from "./cartItem";
import { scrollToTop } from "@/utils/utils";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { giftCard200, giftCard300, giftCard500 } = useSelector(
    (state: { card: CardState }) => state.card
  );

  const { data: giftCardsData, error: giftCardsError } =
    useGetGiftCardsQuery("");

  const [addGiftCardOrder2] = useAddGiftCardOrderMutation();

  const giftCards = [
    ...giftCard200.giftCards,
    ...giftCard300.giftCards,
    ...giftCard500.giftCards,
  ];
  const paymentProcess = () => {
    if (giftCardsData?.length) {
      //const giftCardsDB = addGiftCardOrder2(giftCards);
      /* dispatch(
        setDialogVisibility({
          isVisible: true,
          title: " Payment successful",
          content: giftCardsDB.toString(),
          goBackText: "Go back to dashboard",
          goBackUrl: "/",
        })
      ); */
      scrollToTop();
      //dispatch(resetCard());
      router.push("/payment");
    }
  };

  return (
    <>
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
      <div className="mx-auto max-w-2xl pb-8 pt-8 lg:px-8 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200"
            >
              {giftCardsError && (
                <>Error en la carga de las tarjetas de regalo</>
              )}
              {giftCardsData &&
                giftCard200.quantity > 0 &&
                giftCard200.giftCards.map((giftCard, index) => (
                  <CartItem
                    key={giftCard.selectedGiftCardId + index}
                    giftCardsData={giftCardsData}
                    giftCard={giftCard}
                    quantity={giftCard200.quantity}
                  />
                ))}
              {giftCardsData &&
                giftCard300.quantity > 0 &&
                giftCard300.giftCards.map((giftCard, index) => (
                  <CartItem
                    key={giftCard.selectedGiftCardId + index}
                    giftCardsData={giftCardsData}
                    giftCard={giftCard}
                    quantity={giftCard300.quantity}
                  />
                ))}
              {giftCardsData &&
                giftCard500.quantity > 0 &&
                giftCard500.giftCards.map((giftCard, index) => (
                  <CartItem
                    key={giftCard.selectedGiftCardId + index}
                    giftCardsData={giftCardsData}
                    giftCard={giftCard}
                    quantity={giftCard500.quantity}
                  />
                ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Resumen del pedido
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {giftCardsData && getSubTotal(giftCardsData, giftCards)}€
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Costes de envío</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">0.00€</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex text-sm text-gray-600">
                  <span>Impuestos</span>
                </dt>
                <dd className="text-sm font-medium text-gray-900">0.00€</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">
                  Total del pedido
                </dt>
                <dd className="text-base font-medium text-gray-900">
                  {giftCardsData && getSubTotal(giftCardsData, giftCards)}€
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={paymentProcess}
                disabled={giftCards.length === 0}
                type="submit"
                className={
                  giftCards.length === 0
                    ? "w-full rounded-md border border-transparent bg-gray-600 px-4 py-3 text-base font-medium text-white shadow-sm"
                    : "w-full rounded-md border border-transparent bg-amber-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                }
              >
                Proceder al pago
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cart;
