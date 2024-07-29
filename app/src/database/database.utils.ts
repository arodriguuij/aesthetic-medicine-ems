import { QueryResult, QueryResultRow } from "pg";
import { getDataBaseConnection } from "./database";

export const executeFunction = async <TRow extends QueryResultRow = any>(
  dbFunction: string,
  params: any[] | null
): Promise<QueryResult<TRow>> => {
  if (!params) {
    return await getDataBaseConnection().query(`SELECT * FROM ${dbFunction}`);
  }
  const dbFunctionArgs = Array.from(
    { length: params.length },
    (_, index) => `$${index + 1}`
  );

  return await getDataBaseConnection().query(
    `SELECT * FROM ${dbFunction}(${dbFunctionArgs.join(", ")})`,
    params
  );
};
