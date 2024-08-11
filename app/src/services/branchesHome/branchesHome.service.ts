import { QueryResult } from "pg";
import { executeFunction } from "../../database/database.utils";
import { branchesHomeServiceFunctions } from "./branchesHome.constants";
import { BranchHome } from "@/app/types/branchesHome.types";

export const getBranchesHomeService = async () => {
  const { rows }: QueryResult<BranchHome[]> = await executeFunction(
    branchesHomeServiceFunctions.GET_BRANCHES_HOME,
    []
  );

  return rows;
};
