import { Treatment } from "../../../types/treatments.types";
import {
  getTreatmentByIdService,
  getTreatmentsCorporalNamesService,
  getTreatmentsCorporalService,
  getTreatmentsFacialNamesService,
  getTreatmentsFacialService,
  getTreatmentsService,
} from "../../services/treatments/treatments.service";
import {
  getPopulatedAreas,
  getPopulatedRelatedProducts,
  getPopulatedRelatedTreatments,
} from "./treatments.utils";

export const getTreatments = async () => {
  const treatments: Treatment[] = (await getTreatmentsService()) as Treatment[];
  for (const treatment of treatments) {
    treatment.properties.populatedAreas = await getPopulatedAreas(
      treatment.properties.areas
    );
  }
  return treatments;
};

export const getTreatmentsFacialNames = async () =>
  await getTreatmentsFacialNamesService();

export const getTreatmentsFacial = async () => {
  const treatments = await getTreatmentsFacialService();
  for (const treatment of treatments) {
    treatment.properties.populatedAreas = await getPopulatedAreas(
      treatment.properties.areas
    );
  }
  return treatments;
};

export const getTreatmentsCorporalNames = async () =>
  await getTreatmentsCorporalNamesService();

export const getTreatmentsCorporal = async () => {
  const treatments = await getTreatmentsCorporalService();
  for (const treatment of treatments) {
    treatment.properties.populatedAreas = await getPopulatedAreas(
      treatment.properties.areas
    );
  }
  return treatments;
};

//TODO: Refactor this method to calculate the related treatments in the DB function
export const getTreatmentById = async (thisId: number) => {
  const treatment = await getTreatmentByIdService(thisId);
  treatment[0].properties.populatedAreas = await getPopulatedAreas(
    treatment[0].properties.areas
  );
  if (treatment[0].relatedTreatmentIds)
    treatment[0].relatedTreatments = await getPopulatedRelatedTreatments(
      treatment[0].relatedTreatmentIds
    );

  if (treatment[0].relatedProductsIds)
    treatment[0].relatedProducts = await getPopulatedRelatedProducts(
      treatment[0].relatedProductsIds
    );

  return treatment;
};
