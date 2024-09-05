"use client";

import { removeCard } from "@/lib/card/cardSlide";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { GiftCard } from "../types/giftCards.types";
import { step } from "./confirmacionPago.constants";
import SummaryOrder from "./SummaryOrder";
import { OrderHistoryState } from "@/lib/orderHistory/orderHistorySlide";
import Incentives from "./Incentives";
import { classNames } from "@/utils/utilsServer";
import Loader from "../components/Loader";
import { redirect } from "next/navigation";

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeCard());
    return () => {
      console.log("[PaymentSuccess] out");
    };
  }, [dispatch]);

  const giftCardOrder = useSelector(
    (state: { orderHistory: OrderHistoryState }) =>
      state.orderHistory.orderHistory
  );

  const {
    data: giftCardsData,
    error: giftCardsError,
    status,
  } = useGetGiftCardsQuery("");

  if (!giftCardOrder.id) redirect("/");

  if (status === "pending") return <Loader />;

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
      {giftCardOrder.id ? (
        <>
          {/* Header */}
          <div className="mx-auto sm:px-6  mb-8 lg:max-w-7xl lg:px-8">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Confirmación de pago
              </h2>
              <p className="mt-2 text-base text-gray-500">
                Agradecemos tu pedido. ¡Tu tarjeta de regalo ha sido enviada por
                correo electrónico! Revisa tu bandeja de entrada para acceder a
                ella de inmediato.
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Pedido realizado:{" "}
              <time dateTime="2021-03-22" className="font-medium text-gray-900">
                {new Date().toLocaleDateString()}
              </time>
            </p>
            <div className="flex">
              <p className="text-sm text-gray-600 ">Identificador:</p>
              <p className="ml-1 text-sm font-medium text-amber-600 hover:text-amber-500">
                {`#${giftCardOrder.id}`}
              </p>
            </div>
          </div>

          {/* Products */}
          <div className="mx-auto max-w-3xl pb-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <section aria-labelledby="products-heading" className="mt-6">
              <h2 id="products-heading" className="sr-only">
                Products purchased
              </h2>

              <div className="space-y-8">
                <SummaryOrder
                  product={giftCardOrder}
                  giftCardsData={giftCardsData as GiftCard[]}
                />
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6 lg:p-8">
                  <h4 className="sr-only">Status</h4>
                  <div aria-hidden="true" className="mt-6">
                    <div className="overflow-hidden rounded-full bg-gray-200">
                      <div
                        style={{
                          width: `100%`,
                        }}
                        className="h-2 rounded-full bg-amber-600"
                      />
                    </div>
                    <div className="mt-6 grid-cols-3 text-sm font-medium text-gray-600 sm:grid">
                      <div className="text-amber-600">Orden procesada</div>
                      <div
                        className={classNames(
                          step > 1 ? "text-amber-600" : "",
                          "text-center"
                        )}
                      >
                        Pago completado
                      </div>
                      <div
                        className={classNames(
                          step > 2 ? "text-amber-600" : "",
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

          {/* Incentives */}
          <Incentives />
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
    </div>
  );
};
export default PaymentSuccess;
