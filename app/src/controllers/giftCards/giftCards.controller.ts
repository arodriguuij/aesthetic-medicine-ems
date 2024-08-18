import {
  getGiftCardByIdService,
  getGiftCardsService,
  postGiftCardsService,
} from "../../services/giftCards";
import { GiftCardFormWithDiscountApplied, GiftCardFormWithDiscountAppliedGet } from "@/lib/card/cardSlide";

export const getGiftCardsById = async (thisId: number) =>
  await getGiftCardByIdService(thisId);

export const addGiftCards = async (giftCard: GiftCardFormWithDiscountApplied) => {
  let id: GiftCardFormWithDiscountAppliedGet = {} as GiftCardFormWithDiscountAppliedGet;
  const response = await postGiftCardsService(giftCard);
  id = { id: Object.values(response[0])[0], ...giftCard };

  return id;
};

export const getGetGiftCards = async () => await getGiftCardsService();
