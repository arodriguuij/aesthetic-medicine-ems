import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { branchesServiceFunctions } from "./branches.constants";
import { Branch } from "@/app/types/branches.types";

export const getBranchesService = async () => {
  const { rows }: QueryResult<Branch> = await executeFunction(
    branchesServiceFunctions.GET_BRANCHES,
    []
  );

  return rows;
};
