import { GiftCard } from "app/services/giftCards/giftCards.types";
import { GiftCardForm } from "app/states/card/cardSlide";

export const getImageByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData.find(({ id }) => id === giftCardId)?.image;

export const getDescriptionByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData.find(({ id }) => id === giftCardId)?.description;

export const getQuantityByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData.find(({ id }) => id === giftCardId)?.quantity;

export const getSubTotal = (giftCardsData: GiftCard[], gifCards: GiftCardForm[]) => {
  let subTotal = 0;
  gifCards.forEach((gifCard) => {
    subTotal +=
      getQuantityByGiftCardId(giftCardsData, gifCard.selectedGiftCardId) || 0;
  });
  return subTotal;
};
