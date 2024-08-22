"use client";

import React from "react";
import { getImageByGiftCardId } from "./cart.utils";
import { cloudinaryLoader } from "@/utils/cloudinary";
import { removeCard } from "@/lib/card/cardSlide";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { GiftCard } from "../types/giftCards.types";
import { DataFormGiftCard } from "../giftCard/Form/form.types";

const CartItem = ({
  giftCard,
  giftCardsData,
}: {
  giftCard: DataFormGiftCard;
  giftCardsData: GiftCard[];
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="space-x-6 py-6">
        <div className="flex justify-center">
          <Image
            alt={"Imagen tarjeta de regalo " + giftCard.selectedGiftCardId}
            src={cloudinaryLoader({
              src:
                getImageByGiftCardId(
                  giftCardsData,
                  giftCard.selectedGiftCardId || 0
                ) || "",
            })}
            width={1000}
            height={1000}
            className="h-44 w-72 flex-none rounded-md bg-gray-100 object-cover object-center"
          />
        </div>
        <div
          className=" rounded-lg border border-gray-200 bg-white p-4 shadow-sm  py-2 px-4 mt-4"
          style={{ marginLeft: 0 }}
        >
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
                <div>
                  <p className="text-gray-900">Descripción: </p>
                  <p className="text-gray-500">{giftCard.message}</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => dispatch(removeCard())}
              className="text-sm font-medium text-amber-600 hover:text-amber-500 mt-4"
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
