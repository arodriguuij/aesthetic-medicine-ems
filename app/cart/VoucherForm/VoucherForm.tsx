import {
  DiscountState,
  resetDiscount,
  setDiscount,
} from "@/lib/discount/discountSlide";
import { useCheckVoucherMutation } from "@/services/vouchers/vouchers";
import {
  CheckIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { IVoucherForm } from "./voucher.types";
import { initState } from "./voucher.constants";
import { schema } from "./validations";

const VoucherForm = () => {
  const dispatch = useDispatch();

  const { discount, voucherName } = useSelector(
    (state: { discount: DiscountState }) => state.discount
  );

  const [checkVoucher] = useCheckVoucherMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVoucherForm>({
    defaultValues: initState,
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IVoucherForm> = async (dataForm) => {
    try {
      const { data } = await checkVoucher(dataForm.voucher);
      dispatch(
        setDiscount({
          discount: data?.discount || 0,
          voucherName: dataForm.voucher,
        })
      );
    } catch (error) {
      console.log("Error checking the voucher");
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetDiscount());
    };
  }, [dispatch]);

  return (
    <div className="space-y-4 mt-8 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label
          //for="voucher"
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          ¿Tienes un código de descuento?
        </label>
        <div className="flex bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-amber-400 sm:max-w-3xl">
          <input
            type="text"
            id="voucher"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  placeholder:text-gray-400 focus:border-primary-500 focus:ring-primary-500"
            placeholder=""
            {...register("voucher")}
          />
          {errors.voucher?.message && (
            <div className="pointer-events-none inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                aria-hidden="true"
                className="h-5 w-5 text-red-500"
              />
            </div>
          )}
        </div>

        {errors.voucher?.message && (
          <p id="email-error" className="mt-2 text-sm text-red-600">
            {errors.voucher?.message}
          </p>
        )}
        <button
          type="submit"
          className="w-full mt-6 text-center rounded-md border border-transparent bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Aplicar código
        </button>
        {voucherName && discount > 0 ? (
          <div className="mt-6 flex items-center">
            <CheckIcon
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-green-500"
            />
            <p className="ml-2 text-sm text-gray-500">
              El código de descuento {voucherName} es válido ({discount}%
              descuento)
            </p>
          </div>
        ) : (
          <div className="mt-6 flex items-center">
            <XMarkIcon
              aria-hidden="true"
              className="h-5 w-5 flex-shrink-0 text-red-500"
            />
            <p className="ml-2 text-sm text-red-500">
              El código de descuento no es válido
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default VoucherForm;
