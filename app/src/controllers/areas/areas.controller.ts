import { getAreaByIdService, getAreasService } from "../../services/areas";
import { getTreatmentsByAreaId } from "../../services/treatments/treatments.service";
import { getPopulatedAreas } from "../treatments/treatments.utils";

export const getAreas = async () => {
  return await getAreasService();
};

export const getAreasById = async (id: number) => {
  const area = await getAreaByIdService(id);
  const treatments = await getTreatmentsByAreaId(id);
  for (const treatment of treatments) {
    treatment.properties.populatedAreas = await getPopulatedAreas(
      treatment.properties.areas
    );
  }
  return {
    treatments,
    areaName: area[0].name,
    description: area[0].description,
  };
};
