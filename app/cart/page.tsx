"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb";
import {
  useAddGiftCardOrder2Mutation,
  useGetGiftCardsQuery,
} from "../../services/giftCards/giftCards";
import { CardState, resetCard } from "../../states/card/cardSlide";
import { setDialogVisibility } from "../../states/dialog/dialogSlide";
import { scrollToTop } from "../../utils/utils";
import {
  getDescriptionByGiftCardId,
  getImageByGiftCardId,
  getQuantityByGiftCardId,
  getSubTotal,
} from "./cart.utils";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "@/utils/cloudinary";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { gifCards } = useSelector((state: { card: CardState }) => state.card);
  const { data: giftCardsData, error: giftCardsError } =
    useGetGiftCardsQuery("");

  const [addGiftCardOrder2] = useAddGiftCardOrder2Mutation();

  return (
    <div className="isolate mx-auto  px-6 lg:px-8 items-center">
      {/* Breadcrumb */}
      <div className="mx-auto py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <Breadcrumb />
      </div>

      {/* Content */}
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
                gifCards.map((gifCard, index) => (
                  <li
                    key={gifCard.selectedGiftCardId + index}
                    className="flex py-6 sm:py-10"
                    style={{ overflow: "auto" }}
                  >
                    <div className="flex-shrink-0">
                      <AdvancedImage
                        cldImg={cld.image(
                          getImageByGiftCardId(
                            giftCardsData,
                            gifCard.selectedGiftCardId
                          ) || ""
                        )}
                        alt={gifCard.selectedGiftCardId + "image"}
                        className="h-24 w-26 rounded-md object-cover object-center sm:h-48 sm:w-68"
                      />
                    </div>

                    <div className="ml-1 flex flex-1 flex-shrink-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              Tarjeta de ragalo{" "}
                              {getQuantityByGiftCardId(
                                giftCardsData,
                                gifCard.selectedGiftCardId
                              )}
                              €
                            </h3>
                          </div>
                          <div className="mt-1 text-sm">
                            <p className="text-gray-500">
                              {getDescriptionByGiftCardId(
                                giftCardsData,
                                gifCard.selectedGiftCardId
                              )}
                            </p>
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              Nombre: {gifCard.nameBuyer}
                            </p>
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              Email: {gifCard.email}
                            </p>
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              Destinatario: {gifCard.nameReceiver}
                            </p>
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              Mensaje: {gifCard.message}
                            </p>
                          </div>
                          <p className="mt-1 text-sm font-medium text-gray-900">
                            {getQuantityByGiftCardId(
                              giftCardsData,
                              gifCard.selectedGiftCardId
                            )}
                            €
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                        />
                        <span>In stock</span>
                      </p>
                    </div>
                  </li>
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
                  {giftCardsData && getSubTotal(giftCardsData, gifCards)}€
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
                  {giftCardsData && getSubTotal(giftCardsData, gifCards)}€
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                onClick={() => {
                  scrollToTop();
                  dispatch(resetCard());
                  dispatch(
                    setDialogVisibility({
                      isVisible: true,
                      title: " Payment successful",
                      content:
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
                      goBackText: "Go back to dashboard",
                      goBackUrl: "/",
                    })
                  );
                  giftCardsData?.length && addGiftCardOrder2(gifCards);
                  router.push("/");
                }}
                disabled={gifCards.length === 0}
                type="submit"
                className={
                  gifCards.length === 0
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
    </div>
  );
};

export default Cart;
