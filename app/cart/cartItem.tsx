import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  getDescriptionByGiftCardId,
  getImageByGiftCardId,
  getQuantityByGiftCardId,
} from "./cart.utils";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "@/utils/cloudinary";
import { GiftCardForm } from "@/lib/card/cardSlide";
import { GiftCard } from "@/services/giftCards/giftCards.types";

const CartItem = ({
  gifCard,
  giftCardsData,
  quantity,
}: {
  gifCard: GiftCardForm;
  giftCardsData: GiftCard[];
  quantity: number;
}) => {
  return (
    <li className="flex py-6 sm:py-10" style={{ overflow: "auto" }}>
      <div className="flex-shrink-0">
        <AdvancedImage
          cldImg={cld.image(
            getImageByGiftCardId(giftCardsData, gifCard.selectedGiftCardId) ||
              ""
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
  );
};

export default CartItem;
