"use client";

import {
  EnvelopeIcon,
  ExclamationCircleIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setSnackbarVisibility } from "../../../lib/snackbar/snackbarSlide";
import { scrollToTop } from "../../../utils/utils";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSendMailMutation } from "@/services/mails/mails";
import { DataFormContact } from "@/app/types/emails.types";
import { initState } from "./form.constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<DataFormContact>({
    defaultValues: initState,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const [sendEmail] = useSendMailMutation();

  const handleOnCancel = () => {
    reset();
    setValue("awareness", "");
  };

  const onSubmit: SubmitHandler<DataFormContact> = async (data) => {
    try {
      await sendEmail(data);
      dispatch(
        setSnackbarVisibility({
          visibility: true,
          message: "Mensaje enviado. Le contestaremos lo más pronto posible.",
        })
      );
    } catch (error) {
      dispatch(
        setSnackbarVisibility({
          visibility: true,
          message: "Error al enviar el mensaje.",
          type: "error",
        })
      );
    } finally {
      reset();
      setValue("awareness", "");
      scrollToTop();
    }
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 pb-16">
      <form
        className="bg-gradient-to-b from-amber-100/10 shadow-sm ring-1 ring-amber-500 rounded-xl md:col-span-2 p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-12 sm:space-y-16">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Datos Personales
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
              Contacta con nuestro equipo de profesionales y ellos te ayudarán a
              resolverlas.
            </p>
            <div className="mt-10 space-y-8 border-b border-amber-500/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-amber-500/10 sm:border-t sm:pb-0">
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Nombre
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
                      id="userName"
                      placeholder="Elvira Morgado Sánchez"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      {...register("userName")}
                    />
                    {errors.userName?.message && (
                      <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-red-500"
                        />
                      </div>
                    )}
                  </div>
                  {errors.userName?.message && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errors.userName?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Teléfono
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-md">
                    <div className="pointer-events-none inset-y-0 left-0 flex items-center pl-3">
                      <PhoneIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-amber-400"
                      />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="611882139"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber?.message && (
                      <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon
                          aria-hidden="true"
                          className="h-5 w-5 text-red-500"
                        />
                      </div>
                    )}
                  </div>
                  {errors.phoneNumber?.message && (
                    <p id="email-error" className="mt-2 text-sm text-red-600">
                      {errors.phoneNumber?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
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
                      id="email"
                      placeholder="clinicamedicoesteticaems@gmail.com"
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

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  Cómo nos has conocido
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    ria-label="Awareness select"
                    id="awareness"
                    className="mt-2 block w-full bg-white rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-amber-400 sm:text-sm sm:leading-6 sm:max-w-md"
                    {...register("awareness")}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    {/* <option value="Anuncios de Google">
                      Anuncios de Google
                    </option> */}
                    <option value="Instagram">Instagram</option>
                    <option value="Recomendación">Recomendación</option>
                    <option value="Búsqueda en la web">
                      Búsqueda en la web
                    </option>
                  </select>
                </div>
                {errors.awareness?.message && (
                  <p id="email-error" className="mt-2 text-sm text-red-600">
                    {errors.awareness?.message}
                  </p>
                )}
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
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
                      rows={3}
                      placeholder="Ejemplo: Hola, me gustaría recibir más información sobre el tratamiento de arruga de labios. Pueden contactar conmigo por email o bien por teléfono. Gracias"
                      className="block w-full max-w-2xl pl-2 bg-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 sm:text-sm sm:leading-6"
                      {...register("message", {
                        required: "Este campo es requerido",
                        minLength: {
                          value: 3,
                          message: "Mínimo 3 caracteres",
                        },
                        maxLength: {
                          value: 300,
                          message: "Máximo 300 caracteres",
                        },
                      })}
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
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleOnCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
