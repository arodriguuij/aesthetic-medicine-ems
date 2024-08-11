"use client";

import { resetCard } from "@/lib/card/cardSlide";
import { CardOrderState } from "@/lib/orderHistory/orderHistorySlide";
import { classNames } from "@/utils/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuantityByGiftCardId } from "../cart/cart.utils";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { GiftCard } from "../types/giftCards.types";
import { useRouter } from "next/navigation";

const step = 4;

const PaymentSuccess = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCard());
    return () => {
      console.log("[PaymentSuccess] out");
    };
  }, [dispatch]);

  const { giftCard200, giftCard300, giftCard500 } = useSelector(
    (state: { orderHistory: CardOrderState }) => state.orderHistory
  );
  const giftCards = [...giftCard200, ...giftCard300, ...giftCard500];

  const { data: giftCardsData, error: giftCardsError } =
    useGetGiftCardsQuery("");

  if (!giftCardsData || giftCardsError || giftCards.length === 0)
    router.push("/");

  return (
    <div
      className={
        "relative isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4"
      }
    >
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <>
        {giftCard200.length + giftCard300.length + giftCard500.length > 0 ? (
          <>
            <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Confirmación de pago
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  We appreciate your order, we’re currently processing it. So
                  hang tight and we’ll send you confirmation very soon!
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Order placed:{" "}
                <time
                  dateTime="2021-03-22"
                  className="font-medium text-gray-900"
                >
                  March 22, 2021
                </time>
              </p>
              <div className="flex">
                <p className="text-sm text-gray-600 ">Order number(s):</p>
                <p className="ml-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {giftCards.map(({ id }) => `#${id}`).join(", ")}
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
              {/* Products */}
              <section aria-labelledby="products-heading" className="mt-6">
                <h2 id="products-heading" className="sr-only">
                  Products purchased
                </h2>

                <div className="space-y-8">
                  {giftCard200.map((product) => (
                    <div
                      key={product.id}
                      className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
                    >
                      <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                        <div className="sm:flex lg:col-span-7">
                          <div className="mt-6 sm:ml-6 sm:mt-0">
                            <div className="flex items-center">
                              <h3 className="text-lg text-indigo-500">
                                Tarjeta de reagalo:{" "}
                                {getQuantityByGiftCardId(
                                  giftCardsData as GiftCard[],
                                  product.selectedGiftCardId
                                )}
                                €
                              </h3>
                            </div>
                            <div className="flex items-center	">
                              <p className="text-gray-900">Nombre: </p>
                              <p className=" text-sm text-gray-500 ml-1">
                                {product.nameBuyer}
                              </p>
                            </div>
                            <div className="flex items-center	">
                              <p className="text-gray-900">Destinatario: </p>
                              <p className=" text-sm text-gray-500 ml-1">
                                {product.nameReceiver}
                              </p>
                            </div>
                            <div className="flex items-center	">
                              <p className="text-gray-900">Email: </p>
                              <p className=" text-sm text-gray-500 ml-1">
                                {product.email}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-900">Mensaje: </p>
                              <p className=" text-sm text-gray-500">
                                {product.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
                    <h4 className="sr-only">Status</h4>
                    <div aria-hidden="true" className="mt-6">
                      <div className="overflow-hidden rounded-full bg-gray-200">
                        <div
                          style={{
                            width: `calc((${step} * 2 + 1) / 8 * 100%)`,
                          }}
                          className="h-2 rounded-full bg-indigo-600"
                        />
                      </div>
                      <div className="mt-6 grid-cols-4 text-sm font-medium text-gray-600 sm:grid">
                        <div className="text-indigo-600">Orden procesada</div>
                        <div
                          className={classNames(
                            step > 0 ? "text-indigo-600" : "",
                            "text-center"
                          )}
                        >
                          Procesando pago
                        </div>
                        <div
                          className={classNames(
                            step > 1 ? "text-indigo-600" : "",
                            "text-center"
                          )}
                        >
                          Pago completado
                        </div>
                        <div
                          className={classNames(
                            step > 2 ? "text-indigo-600" : "",
                            "text-right"
                          )}
                        >
                          Mail enviado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        ) : (
          <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
            <div className="flex">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                No existe historial de pedido
              </h2>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
export default PaymentSuccess;
