import { AreaTreatment, Treatment } from "../../../types/treatments.types";
import { getTreatmentByIdService } from "../../services/treatments/treatments.service";
import { Product } from "../../../types/products.types";
import { getProductByIdService } from "../../services/products";
import { getAreaByIdService } from "../../services/areas";

export const getPopulatedAreas = async (areas: number[]) => {
  const populateAreas: { id: AreaTreatment["id"]; name: AreaTreatment["name"] }[] = [];
  for (const areaId of areas) {
    const populateArea = await getAreaByIdService(areaId);
    populateAreas.push({
      id: populateArea[0].id,
      name: populateArea[0].name,
    });
  }
  return populateAreas;
};

export const getPopulatedRelatedTreatments = async (
  relatedTreatmentIds: number[]
) => {
  const relatedTreatments: Treatment[] = [];
  for (const treatmentId of relatedTreatmentIds) {
    const relatedTreatment: Treatment[] = await getTreatmentByIdService(
      treatmentId
    );
    if (relatedTreatment[0]) relatedTreatments.push(relatedTreatment[0]);
  }
  return relatedTreatments;
};

export const getPopulatedRelatedProducts = async (
  relatedProductIds: number[]
) => {
  const relatedProducts: Product[] = [];
  for (const productId of relatedProductIds) {
    const relatedProduct: Product[] = await getProductByIdService(productId);
    if (relatedProduct[0]) relatedProducts.push(relatedProduct[0]);
  }
  return relatedProducts;
};
