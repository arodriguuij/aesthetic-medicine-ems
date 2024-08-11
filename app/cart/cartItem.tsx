"use client";

import React from "react";
import { getImageByGiftCardId } from "./cart.utils";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "@/utils/cloudinary";
import { GiftCardForm, removeCard } from "@/lib/card/cardSlide";
import { GiftCard } from "@/services/giftCards/giftCards.types";
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

  return (
    <>
      <li className="flex space-x-6 py-6">
        <AdvancedImage
          cldImg={cld.image(
            getImageByGiftCardId(giftCardsData, giftCard.selectedGiftCardId) ||
              ""
          )}
          alt={giftCard.selectedGiftCardId + "image"}
          className="h-20 w-28 flex-none rounded-md bg-gray-100 object-cover object-center"
        />
        <div className="flex-auto">
          <div className="space-y-1 sm:flex sm:items-start sm:justify-between sm:space-x-6">
            <div className="flex-auto space-y-1 text-sm font-medium">
              <div className="mt-1 text-sm">
                <div className="flex">
                  <p className="text-gray-900">Nombre: </p>
                  <p className="text-gray-500 ml-2">{giftCard.nameBuyer}</p>
                </div>
                <div className="flex">
                  <p className="text-gray-900">Email: </p>
                  <p className="text-gray-500 ml-2">{giftCard.email}</p>
                </div>
                <div className="flex">
                  <p className="text-gray-900">Destinatario: </p>
                  <p className="text-gray-500 ml-2">{giftCard.nameReceiver}</p>
                </div>
                <div >
                  <p className="text-gray-900">Descripción: </p>
                  <p className="text-gray-500">{giftCard.message}</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => dispatch(removeCard(giftCard))}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Eliminar
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
