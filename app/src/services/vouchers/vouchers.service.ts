import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { VouchersServiceFunctions } from "./vouchers.constants";

export const postCheckVoucherService = async (voucher: string) => {
  console.log({voucher})
  const response: QueryResult<any> = await executeFunction(
    VouchersServiceFunctions.CHECK_VOUCHER,
    [voucher]
  );
  const result = response.rows[0]?.fnc_vouchers_check;

  console.log({ result });
  return result;
};
