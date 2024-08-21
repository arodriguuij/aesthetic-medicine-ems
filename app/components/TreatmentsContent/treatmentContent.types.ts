import { Treatment } from "@/app/types/treatments.types";

export interface ITreatmentsContent {
  title: string;
  subTitle: string;
  data?: Treatment[];
}
