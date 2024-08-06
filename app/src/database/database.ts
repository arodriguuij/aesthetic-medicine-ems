import { Pool, PoolConfig } from "pg";
import _once from "lodash/once";

export const POSTGRESQL_DEFAULT_PORT = 5432;
export const _getDataBaseConnection = () => {
  let poolConfig: PoolConfig;
  console.log({
    env: process.env.NEXT_PUBLIC_DATA_BASE_ENVIRONMENT,
    checkProd: process.env.NEXT_PUBLIC_DATA_BASE_ENVIRONMENT === "prod",
    checkLocalhost:
      process.env.NEXT_PUBLIC_DATA_BASE_ENVIRONMENT === "localhost",
  });
  switch (process.env.NEXT_PUBLIC_DATA_BASE_ENVIRONMENT) {
    case "prod":
      poolConfig = {
        host: process.env.NEXT_PUBLIC_PROD_HOST_DATA_BASE,
        port: +(
          process.env.NEXT_PUBLIC_PROD_PORT_DATA_BASE || POSTGRESQL_DEFAULT_PORT
        ),
        user: process.env.NEXT_PUBLIC_PROD_USER_DATA_BASE,
        password: process.env.NEXT_PUBLIC_PROD_PASSWORD_DATA_BASE,
        database: process.env.NEXT_PUBLIC_PROD_NAME_DATA_BASE,
        ssl: {
          rejectUnauthorized: false,
        },
      };
      break;

    case "localhost":
      poolConfig = {
        host: process.env.NEXT_PUBLIC_HOST_DATA_BASE,
        port: +(
          process.env.NEXT_PUBLIC_PORT_DATA_BASE || POSTGRESQL_DEFAULT_PORT
        ),
        user: process.env.NEXT_PUBLIC_USER_DATA_BASE,
        password: process.env.NEXT_PUBLIC_PASSWORD_DATA_BASE,
        database: process.env.NEXT_PUBLIC_NAME_DATA_BASE,
      };
      break;
    default:
      poolConfig = {};
      break;
  }

  console.log("Database Connection Config:", poolConfig);

  return new Pool(poolConfig);
};

export const getDataBaseConnection = _once(_getDataBaseConnection);
