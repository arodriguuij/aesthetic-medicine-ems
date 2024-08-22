"use client";

import { CardState } from "@/lib/card/cardSlide";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";

const Availability = () => {
  const giftCard = useSelector(
    (state: { card: CardState }) => state.card.giftCard
  );
  return giftCard.selectedGiftCardId ? (
    <div className="mt-6 flex items-center">
      <XMarkIcon
        aria-hidden="true"
        className="h-5 w-5 flex-shrink-0 text-red-500"
      />
      <p className="ml-2 text-sm text-red-500">
        Sólo se puede comprar una Tarjeta de regalo a la vez
      </p>
    </div>
  ) : (
    <div className="mt-6 flex items-center">
      <CheckIcon
        aria-hidden="true"
        className="h-5 w-5 flex-shrink-0 text-green-500"
      />
      <p className="ml-2 text-sm text-gray-500">
        Disponible y listo para enviar
      </p>
    </div>
  );
};

export default Availability;
