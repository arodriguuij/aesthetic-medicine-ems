import {
  getGiftCardByIdService,
  getGiftCardsService,
  postGiftCardsService,
} from "../../services/giftCards";
import { GiftCardForm, GiftCardFormGet } from "../../../types/giftCards.types";

export const getGiftCardsById = async (thisId: number) =>
  await getGiftCardByIdService(thisId);

export const addGiftCards = async (giftCards: GiftCardForm[]) => {
  const ids: GiftCardFormGet[] = [];
  for (const giftCard of giftCards) {
    const response = await postGiftCardsService(giftCard);
    ids.push({ id: Object.values(response[0])[0], ...giftCard });
  }
  return ids;
};

export const getGetGiftCards = async () => await getGiftCardsService();
