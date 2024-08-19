import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { GiftCardsServiceFunctions } from "./giftCards.constants";
import { GiftCard, GiftCardForm } from "../../../types/giftCards.types";
import {
  GiftCardFormWithDiscountApplied,
  GiftCardFormWithDiscountAppliedGet,
} from "@/lib/card/cardSlide";

export const getGiftCardsService = async () => {
  const { rows }: QueryResult<GiftCard[]> = await executeFunction(
    GiftCardsServiceFunctions.GET_GIFT_CARDS,
    []
  );

  return rows;
};

export const postGiftCardsService = async (
  giftCard: GiftCardFormWithDiscountApplied
) => {
  const {
    nameBuyer,
    email,
    nameReceiver,
    message,
    selectedGiftCardId,
    finalPrice,
    discount,
    idPaymentStripe,
    clientId,
    created,
    currency,
    paymentMethod,
    status,
  } = giftCard;

  const { rows }: QueryResult<GiftCardFormWithDiscountAppliedGet> =
    await executeFunction(GiftCardsServiceFunctions.POST_GIFT_CARD_ADD, [
      nameBuyer,
      email,
      nameReceiver,
      message,
      selectedGiftCardId,
      finalPrice,
      discount,
      idPaymentStripe,
      clientId,
      created,
      currency,
      paymentMethod,
      status,
    ]);
  return rows;
};

export const getGiftCardByIdService = async (id: number) => {
  const { rows }: QueryResult<GiftCard> = await executeFunction(
    GiftCardsServiceFunctions.GET_GIFT_CARD_BY_ID,
    [id]
  );
  return rows;
};
