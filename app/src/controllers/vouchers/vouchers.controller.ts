import { postCheckVoucherService } from "../../services/vouchers";

export const checkVoucher = async (voucher: string) =>
  await postCheckVoucherService(voucher);
