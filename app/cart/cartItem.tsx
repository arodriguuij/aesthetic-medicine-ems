"use client";

import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import React from "react";
import { getImageByGiftCardId } from "./cart.utils";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "@/utils/cloudinary";
import { GiftCardForm, removeCard } from "@/lib/card/cardSlide";
import { GiftCard } from "@/services/giftCards/giftCards.types";
import { XMarkIcon as XMarkIconMini } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";

const CartItem = ({
  giftCard,
  giftCardsData,
  quantity,
}: {
  giftCard: GiftCardForm;
  giftCardsData: GiftCard[];
  quantity: number;
}) => {
  const dispatch = useDispatch();

  const hasStock = true;
  return (
    <li className="flex py-6 sm:py-10" style={{ overflow: "auto" }}>
      <div className="flex-shrink-0">
        <AdvancedImage
          cldImg={cld.image(
            getImageByGiftCardId(giftCardsData, giftCard.selectedGiftCardId) ||
              ""
          )}
          alt={giftCard.selectedGiftCardId + "image"}
          className="h-20 w-26 rounded-md object-cover object-center sm:h-36 sm:w-68"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="mt-1 text-sm">
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              Nombre: {giftCard.nameBuyer}
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              Email: {giftCard.email}
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              Destinatario: {giftCard.nameReceiver}
            </p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              Descripción: {giftCard.message}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button
                type="button"
                onClick={() => dispatch(removeCard(giftCard))}
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XMarkIconMini aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="flex space-x-2 text-sm text-gray-700">
          {hasStock ? (
            <CheckIcon
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-green-500"
            />
          ) : (
            <ClockIcon
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-gray-300"
            />
          )}

          <span>{hasStock ? "In stock" : `Ships in 2 weeks`}</span>
        </p>
      </div>
    </li>
  );
};

export default CartItem;
