import {
  getGiftCardByIdService,
  getGiftCardsService,
  postGiftCardsService,
} from "../../services/giftCards";
import { GiftCardForm, GiftCardFormGet } from "../../../types/giftCards.types";

export const getGiftCardsById = async (thisId: number) =>
  await getGiftCardByIdService(thisId);

export const addGiftCards = async (giftCard: GiftCardForm) => {
  let id: GiftCardFormGet = {} as GiftCardFormGet;
  const response = await postGiftCardsService(giftCard);
  id = { id: Object.values(response[0])[0], ...giftCard };

  return id;
};

export const getGetGiftCards = async () => await getGiftCardsService();
