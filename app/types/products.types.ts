import { TreatmentType } from "./treatments.types";

export interface Product {
  id: number;
  name: string;
  branch: string;
  type: TreatmentType;
  quantity: number;
  description: string;
  images: string[];
  featured: boolean;
  benefits: string[];
  howToUse: string[];
  ingredients: string[];
  priority: number
}
