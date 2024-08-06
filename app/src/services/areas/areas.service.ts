import { QueryResult } from "pg";
import { Area } from "../../../types/areas.types";
import { AreasServiceFunctions } from "./areas.constants";
import { executeFunction } from "../../database/database.utils";

export const getAreasService = async () => {
  const { rows }: QueryResult<Area[]> = await executeFunction(
    AreasServiceFunctions.GET_AREAS,
    []
  );
  return rows;
};

export const getAreaByIdService = async (id: number) => {
  const { rows }: QueryResult<Area> = await executeFunction(
    AreasServiceFunctions.GET_AREA_BY_ID,
    [id]
  );
  return rows;
};
