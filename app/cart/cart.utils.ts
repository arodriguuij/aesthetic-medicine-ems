import { GiftCard } from "@/services/giftCards/giftCards.types";
import { GiftCardForm } from "@/lib/card/cardSlide";

export const getImageByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData?.find(({ id }) => id === giftCardId)?.image;

export const getDescriptionByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData?.find(({ id }) => id === giftCardId)?.description;

export const getQuantityByGiftCardId = (
  giftCardsData: GiftCard[],
  giftCardId: number
) => giftCardsData?.find(({ id }) => id === giftCardId)?.quantity;

export const getSubTotal = (
  giftCardsData: GiftCard[],
  giftCard: GiftCardForm
) => getQuantityByGiftCardId(giftCardsData, giftCard.selectedGiftCardId) || 0;
