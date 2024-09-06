"use client";

import { Tooltip } from "react-tooltip";
import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Radio, RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useGetGiftCardsQuery } from "@/services/giftCards/giftCards";
import { addGiftCard, CardState } from "@/lib/card/cardSlide";
import { scrollToTop } from "@/utils/utils";
import { cloudinaryLoader } from "@/utils/cloudinary";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { DataFormGiftCard } from "./form.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { initState } from "./form.constants";
import Loader from "@/app/components/Loader";
import { useRouter } from "next/navigation";

const Form = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const giftCard = useSelector(
    (state: { card: CardState }) => state.card.giftCard
  );

  const disabled = !!giftCard.selectedGiftCardId;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DataFormGiftCard>({
    defaultValues: initState,
    resolver: yupResolver(schema),
  });

  const {
    data: giftCardsData,
    error: giftCardsError,
    status,
  } = useGetGiftCardsQuery("");

  const onSubmit: SubmitHandler<DataFormGiftCard> = async (data) => {
    dispatch(addGiftCard(data));
    scrollToTop();
    reset();
    router.push("/carrito");
  };

  if (status === "pending") return <Loader />;

  return (
    <>
      <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
          <Image
            alt="Imagen de tarjeta de regalo"
            src={cloudinaryLoader({
              src: "EMS/GiftCard/TarjetaRegalo",
            })}
            width={1000}
            height={1000}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <div className=" sm:justify-between">
              {/* Size selector */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  Importe
                </legend>
                <RadioGroup
                  disabled={disabled}
                  className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  {...register("selectedGiftCardId", {
                    required: "Este campo es requerido",
                  })}
                  onChange={(value) => setValue("selectedGiftCardId", +value)}
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
                        className={`group relative block ${
                          disabled ? "" : "cursor-pointer"
                        } rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-amber-500`}
                      >
                        <p className="text-base font-medium text-gray-900">
                          {quantity}€
                        </p>
                        {/*   <p className="mt-1 text-sm text-gray-500">
                            {description}
                          </p> */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-amber-500"
                        />
                      </Radio>
                    ))}
                </RadioGroup>
                {errors.selectedGiftCardId?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.selectedGiftCardId?.message}
                  </p>
                )}
              </fieldset>
            </div>
            <div className="mt-4 mb-12">
              <div className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                <span title="I am the tooltip text">
                  Qué importe recomendamos?
                </span>
                <Tooltip id="my-tooltip-children-multiline">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>Tajeta de 200€:</span>
                    <span> - Para tratamientos ...</span>
                    <span>Tajeta de 300€:</span>
                    <span> - Para tratamientos ...</span>
                    <span>Tajeta de 500€:</span>
                    <span> - Para tratamientos ...</span>
                  </div>
                </Tooltip>
                <QuestionMarkCircleIcon
                  data-tooltip-id="my-tooltip-children-multiline"
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2 pb-4">
              <label
                htmlFor="nameBuyer"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Nombre del comprador
              </label>
              <div className="sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="text"
                    minLength={3}
                    disabled={disabled}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register("nameBuyer")}
                  />
                  {errors.nameBuyer?.message && (
                    <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-red-500"
                      />
                    </div>
                  )}
                </div>
                {errors.nameBuyer?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.nameBuyer?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2 pb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Correo electrónico
              </label>
              <div className="sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    disabled={disabled}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-red-500"
                      />
                    </div>
                  )}
                </div>
                {errors.email?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2 pb-4">
              <label
                htmlFor="nameReceiver"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Nombre del destinatario
              </label>
              <div className="sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-amber-400"
                    />
                  </div>
                  <input
                    type="text"
                    id="nameReceiver"
                    minLength={3}
                    disabled={disabled}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register("nameReceiver")}
                  />
                  {errors.nameReceiver?.message && (
                    <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-red-500"
                      />
                    </div>
                  )}
                </div>
                {errors.nameReceiver?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.nameReceiver?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-2 pb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Mensaje
              </label>
              <div className="sm:col-span-2 sm:mt-0">
                <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                  <textarea
                    id="message"
                    rows={3}
                    disabled={disabled}
                    className="block w-full max-w-2xl pl-2 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                    {...register("message")}
                    placeholder="Espero que disfrutes de la esperciencia."
                  />
                  {errors.message?.message && (
                    <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-red-500"
                      />
                    </div>
                  )}
                </div>
                {errors.message?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.message?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-amber-400 px-8 py-3 text-base font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                disabled={disabled}
              >
                Añadir a la cesta
              </button>
            </div>
            <div className="mt-6 text-center">
              <div className="group inline-flex text-base font-medium">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="mr-2 h-6 w-6 flex-shrink-0 text-green-600"
                />
                <span className="text-gray-500">Validez de 3 meses</span>
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Form;
