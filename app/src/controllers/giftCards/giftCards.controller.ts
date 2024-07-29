import {
  getGiftCardByIdService,
  getGiftCardsService,
  postGiftCardsService,
} from "../../services/giftCards";
import { GiftCardForm } from "../../../types/giftCards.types";

export const getGiftCardsById = async (thisId: number) =>
  await getGiftCardByIdService(thisId);

export const addGiftCards = async (giftCards: GiftCardForm[]) => {
  for (const giftCard of giftCards) {
    await postGiftCardsService(giftCard);
  }
};

export const getGetGiftCards = async () => await getGiftCardsService();
