export interface GiftCard {
  id: number;
  quantity: number;
  image: string;
  description: string;
}

export interface GiftCardForm {
  selectedGiftCardId: number;
  nameBuyer: string;
  email: string;
  nameReceiver: string;
  message: string;
}

export interface GiftCardFormGet extends GiftCardForm {
  id: number;
}
