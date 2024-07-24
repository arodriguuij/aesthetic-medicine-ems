import { Area } from "../areas/areas.types";
import { Product } from "../products/products.types";

export type TreatmentType = "Facial" | "Corporal";
export type TreatmentStatus = "Active" | "Disabled";

export interface TreatmentQuestion {
  question: string;
  answer: string;
}

export interface TreatmentProperties {
  time: string;
  anesthesia: boolean;
  areas: number[];
  populatedAreas?: { id: Area["id"]; name: Area["name"] }[];
  duration: string;
  resultsTime: string;
}

export interface Treatment {
  id: number;
  title: string;
  subtitle: string;
  properties: TreatmentProperties;
  shortDescription: string;
  longDescription: string[];
  images: {
    main: string;
    clients: string[];
  };
  type: TreatmentType;
  status: TreatmentStatus;
  startTreatment: boolean;
  questions: TreatmentQuestion[];
  relatedTreatmentIds?: number[];
  relatedTreatments?: Treatment[];
  relatedProductsIds?: number[];
  relatedProducts?: Product[];
  priority: number;
}
