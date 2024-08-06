import { Pool, PoolConfig } from "pg";
import _once from "lodash/once";

export const POSTGRESQL_DEFAULT_PORT = 5432;
export const _getDataBaseConnection = () => {
  const sslConfig = process.env.NEXT_PUBLIC_LOCAL_DATA_BASE
    ? {}
    : {
        ssl: {
          rejectUnauthorized: false,
        },
      };

  console.log("SSL Config:", sslConfig, process.env.NEXT_PUBLIC_LOCAL_DATA_BASE); // Agregar mensaje de depuración

  const poolConfig: PoolConfig = process.env.NEXT_PUBLIC_LOCAL_DATA_BASE
    ? {
        host: process.env.NEXT_PUBLIC_HOST_DATA_BASE,
        port: +(
          process.env.NEXT_PUBLIC_PORT_DATA_BASE || POSTGRESQL_DEFAULT_PORT
        ),
        user: process.env.NEXT_PUBLIC_USER_DATA_BASE,
        password: process.env.NEXT_PUBLIC_PASSWORD_DATA_BASE,
        database: process.env.NEXT_PUBLIC_NAME_DATA_BASE,
        ...sslConfig,
      }
    : {
        host: process.env.NEXT_PUBLIC_PROD_HOST_DATA_BASE,
        port: +(
          process.env.NEXT_PUBLIC_PROD_PORT_DATA_BASE || POSTGRESQL_DEFAULT_PORT
        ),
        user: process.env.NEXT_PUBLIC_PROD_USER_DATA_BASE,
        password: process.env.NEXT_PUBLIC_PROD_PASSWORD_DATA_BASE,
        database: process.env.NEXT_PUBLIC_PROD_NAME_DATA_BASE,
        ...sslConfig,
      };
  console.log("Database Connection Config:", poolConfig); // Agregar mensaje de depuración

  return new Pool(poolConfig);
};

export const getDataBaseConnection = _once(_getDataBaseConnection);
