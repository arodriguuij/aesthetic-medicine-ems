import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { GiftCardsServiceFunctions } from "./giftCards.constants";
import { GiftCard, GiftCardForm } from "../../../types/giftCards.types";

export const getGiftCardsService = async () => {
  const { rows }: QueryResult<GiftCard[]> = await executeFunction(
    GiftCardsServiceFunctions.GET_GIFT_CARDS,
    []
  );

  return rows;
};

export const postGiftCardsService = async (giftCard: GiftCardForm) => {
  const { nameBuyer, email, nameReceiver, message, selectedGiftCardId } =
    giftCard;

  const { rows }: QueryResult<GiftCardForm> = await executeFunction(
    GiftCardsServiceFunctions.POST_GIFT_CARD_ADD,
    [nameBuyer, email, nameReceiver, message, selectedGiftCardId]
  );
  return rows;
};

export const getGiftCardByIdService = async (id: number) => {
  const { rows }: QueryResult<GiftCard> = await executeFunction(
    GiftCardsServiceFunctions.GET_GIFT_CARD_BY_ID,
    [id]
  );
  return rows;
};
