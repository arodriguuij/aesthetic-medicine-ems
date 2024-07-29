import { TreatmentType } from "./treatments.types";

export interface Area {
  id: number;
  name: string;
  description: string;
  type: TreatmentType;
}
