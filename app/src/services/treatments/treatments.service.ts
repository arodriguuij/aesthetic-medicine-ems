import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { TreatmentsServiceFunctions } from "./treatments.constants";
import { Treatment } from "../../../types/treatments.types";

export const getTreatmentsService = async (): Promise<Treatment[]> => {
  const { rows }: QueryResult<Treatment> = await executeFunction(
    TreatmentsServiceFunctions.GET_TREATMENTS,
    []
  );
  return rows as Treatment[];
};

export const getTreatmentByIdService = async (id: number) => {
  const { rows }: QueryResult<Treatment> = await executeFunction(
    TreatmentsServiceFunctions.GET_TREATMENT_BY_ID,
    [id]
  );
  return rows;
};

export const getTreatmentsFacialService = async () => {
  const { rows }: QueryResult<Treatment> = await executeFunction(
    TreatmentsServiceFunctions.GET_TREATMENTS_FACIAL,
    []
  );
  return rows;
};

export const getTreatmentsFacialNamesService = async () => {
  const {
    rows,
  }: QueryResult<{ id: Treatment["id"]; title: Treatment["title"] }> =
    await executeFunction(
      TreatmentsServiceFunctions.GET_TREATMENTS_FACIAL_NAMES,
      []
    );
  return rows;
};

export const getTreatmentsCorporalService = async () => {
  const { rows }: QueryResult<Treatment> = await executeFunction(
    TreatmentsServiceFunctions.GET_TREATMENTS_CORPORAL,
    []
  );
  return rows;
};

export const getTreatmentsCorporalNamesService = async () => {
  const {
    rows,
  }: QueryResult<{ id: Treatment["id"]; title: Treatment["title"] }> =
    await executeFunction(
      TreatmentsServiceFunctions.GET_TREATMENTS_CORPORAL_NAMES,
      []
    );
  return rows;
};

export const getTreatmentsByAreaId = async (id: number) => {
  const { rows }: QueryResult<Treatment> = await executeFunction(
    TreatmentsServiceFunctions.GET_TREATMENTS_BY_AREA_ID,
    [id]
  );
  return rows;
};
