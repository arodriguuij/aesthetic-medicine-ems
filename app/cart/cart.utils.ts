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

export const calculateDiscount = (price: number, discount: number): number => {
  if (discount < 0 || discount > 99) {
    throw new Error("El porcentaje de descuento debe estar entre 0 y 99");
  }

  // Calcular el descuento como un decimal (por ejemplo, 99% sería 0.99)
  const decimalDiscount = discount / 100;

  // Calcular el valor del descuento
  const discountValue = price * decimalDiscount;

  // Calcular el precio final restando el descuento
  const finalPrice = price - discountValue;

  return finalPrice;
};
