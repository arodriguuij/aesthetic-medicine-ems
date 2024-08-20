"use client";

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Form from "./Form/Form";
import { useSelector } from "react-redux";
import { CardState } from "@/lib/card/cardSlide";

//TODO: disable 2nd giftCard
const GiftCard = () => {
  const giftCard = useSelector(
    (state: { card: CardState }) => state.card.giftCard
  );

  return (
    <div className="relative mx-auto lg:max-w-7xl lg:px-8 isolate -z-10 overflow-hidden bg-gradient-to-b from-yellow-100/20 pt-4">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-yellow-600/10 ring-1 ring-yellow-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto sm:px-6 mb-8 lg:max-w-7xl lg:px-0">
        <div className="flex">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Tarjeta Regalo
          </h2>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Regala belleza y bienestar con nuestras tarjetas regalo, el presente
          perfecto para cualquier ocasión.
        </p>
      </div>
      <div className="mx-auto max-w-2xl lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              EMS trajeta de relago de tratamientos
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Información del producto
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                Se enviará un correo electrónico con la tarjeta de regalo del
                importe elegido. Puede canjearse para cualquier tratamiento de
                la página web. Y tiene una duración de 3 meses de validez.
              </p>
            </div>

            {giftCard.selectedGiftCardId ? (
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
            )}
          </section>
        </div>

        {/* Product form */}
        <Form disabled={!!giftCard.selectedGiftCardId} />
      </div>
    </div>
  );
};

export default GiftCard;
