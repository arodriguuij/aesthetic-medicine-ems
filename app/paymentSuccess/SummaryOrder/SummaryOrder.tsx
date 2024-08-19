import React from "react";
import { getQuantityByGiftCardId } from "../../cart/cart.utils";
import { GiftCard } from "../../types/giftCards.types";
import { GiftCardFormWithDiscountAppliedGet } from "@/lib/card/cardSlide";

const SummaryOrder = ({
  product,
  giftCardsData,
}: {
  product: GiftCardFormWithDiscountAppliedGet;
  giftCardsData: GiftCard[];
}) => {
  return (
    <div
      key={product.id}
      className="border rounded-lg border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
    >
      <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
        <div className="sm:flex lg:col-span-7">
          <div className="sm:ml-6 sm:mt-0">
            <div className="flex items-center">
              <h3 className="text-lg text-indigo-500">
                Tarjeta de regalo:{" "}
                {getQuantityByGiftCardId(
                  giftCardsData as GiftCard[],
                  product.selectedGiftCardId || 0
                )}
                €
              </h3>
            </div>
            {product.discount > 0 && (
              <>
                <div className="flex items-center	">
                  <p className="text-gray-900">Descuento: </p>
                  <p className=" text-sm text-gray-500 ml-1">
                    {product.discount}%
                  </p>
                </div>
                <div className="flex items-center	">
                  <p className="text-gray-900">Precio pagado: </p>
                  <p className=" text-sm text-gray-500 ml-1">
                    {product.finalPrice}€
                  </p>
                </div>
              </>
            )}
            <div className="flex items-center	">
              <p className="text-gray-900">Comprador: </p>
              <p className=" text-sm text-gray-500 ml-1">{product.nameBuyer}</p>
            </div>
            <div className="flex items-center	">
              <p className="text-gray-900">Destinatario: </p>
              <p className=" text-sm text-gray-500 ml-1">
                {product.nameReceiver}
              </p>
            </div>
            <div className="flex items-center	">
              <p className="text-gray-900">Email destino: </p>
              <p className=" text-sm text-gray-500 ml-1">{product.email}</p>
            </div>
            <div>
              <p className="text-gray-900">Mensaje: </p>
              <p className=" text-sm text-gray-500">{product.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryOrder;
