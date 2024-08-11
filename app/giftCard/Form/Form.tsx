"use client";

import {
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { addGiftCard, GiftCardForm } from "@/lib/card/cardSlide";
import { scrollToTop } from "@/utils/utils";
import { AdvancedImage } from "@cloudinary/react";
import { cld } from "@/utils/cloudinary";
import Loader from "@/components/Loader";

export interface DataForm {
  selectedGiftCardId: number | null;
  nameBuyer: string | null;
  email: string | null;
  nameReceiver: string | null;
  message: string | null;
}

const initState: DataForm = {
  selectedGiftCardId: null,
  nameBuyer: null,
  email: null,
  nameReceiver: null,
  message: null,
};
const isSendButtonEnabled = (dataForm: DataForm) =>
  dataForm.selectedGiftCardId &&
  dataForm.nameBuyer &&
  dataForm.email &&
  dataForm.nameReceiver &&
  dataForm.message;

const Form = () => {
  const [dataForm, setDataForm] = useState<DataForm>(initState);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    data: giftCardsData,
    error: giftCardsError,
    status,
  } = useGetGiftCardsQuery("");

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addGiftCard(dataForm as GiftCardForm));
    setDataForm(initState);
    scrollToTop();
    router.push("/cart");
  };

  const handleChange = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDataForm((prevState) => ({ ...prevState, [name]: value }));
  };

  if (status === "pending") return <Loader />;

  return (
    <>
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <AdvancedImage
            cldImg={cld.image("EMS/GiftCard/GiftCard")}
            alt="GiftCardImageAl"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <form onSubmit={handleOnSubmit}>
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  Importe
                </legend>
                <RadioGroup
                  value={dataForm.selectedGiftCardId}
                  onChange={(selectedGiftCardIdForm) =>
                    setDataForm((prevState) => ({
                      ...prevState,
                      selectedGiftCardId: selectedGiftCardIdForm,
                    }))
                  }
                  className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {giftCardsError && (
                    <>Error en la carga de las tarjetas de regalo</>
                  )}
                  {giftCardsData &&
                    giftCardsData.map(({ id, quantity, description }) => (
                      <Radio
                        key={quantity}
                        as="div"
                        value={id}
                        aria-label={quantity.toString()}
                        aria-description={description}
                        className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-amber-500"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {quantity}€
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-amber-500"
                        />
                      </Radio>
                    ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="mt-4 mb-16">
              <div className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span>Qué importe recomendamos?</span>
                <QuestionMarkCircleIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
              <label
                htmlFor="nameBuyer"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Nombre del comprador
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="text"
                    name="nameBuyer"
                    id="nameBuyer"
                    placeholder="Elvira Morgado Sánchez"
                    onChange={handleChange}
                    minLength={3}
                    value={dataForm.nameBuyer || ""}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Correo electrónico
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ems@gmail.com"
                    value={dataForm.email || ""}
                    onChange={handleChange}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
              <label
                htmlFor="nameReceiver"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Nombre del destinatario
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="text"
                    name="nameReceiver"
                    id="nameReceiver"
                    placeholder="Elvira Morgado Sánchez"
                    onChange={handleChange}
                    minLength={3}
                    value={dataForm.nameReceiver || ""}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Mensaje
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    minLength={3}
                    onChange={handleChange}
                    value={dataForm.message || ""}
                    placeholder="Ejemplo: Hola, me gustaría recibir más información sobre el tratamiento de arruga de labios. Pueden contactar conmigo por email o bien por teléfono. Gracias"
                    className="block w-full max-w-2xl pl-2 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={!isSendButtonEnabled(dataForm)}
                className={
                  !isSendButtonEnabled(dataForm)
                    ? "flex w-full items-center justify-center rounded-md border border-transparent bg-gray-400 px-8 py-3 text-base font-medium text-white"
                    : "flex w-full items-center justify-center rounded-md border border-transparent bg-amber-400 px-8 py-3 text-base font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                }
              >
                Añadir a la cesta
              </button>
            </div>
            <div className="mt-6 text-center">
              <div className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-green-600 group-hover:text-gray-500"
                />
                <span className="text-gray-500 hover:text-gray-700">
                  Garantía de 2 años
                </span>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Form;
