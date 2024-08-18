import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { VouchersServiceFunctions } from "./vouchers.constants";

export const postCheckVoucherService = async (voucher: string) => {
  const response: QueryResult<any> = await executeFunction(
    VouchersServiceFunctions.CHECK_VOUCHER,
    [voucher]
  );

  return (response.rows[0] || { existsVoucher: false, discount: 0 }) as {
    existsVoucher: boolean;
    discount: number;
  };
};
