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

  const poolConfig: PoolConfig = {
    host: process.env.NEXT_PUBLIC_HOST_DATA_BASE,
    port: +(process.env.NEXT_PUBLIC_PORT_DATA_BASE || POSTGRESQL_DEFAULT_PORT),
    user: process.env.NEXT_PUBLIC_USER_DATA_BASE,
    password: process.env.NEXT_PUBLIC_PASSWORD_DATA_BASE,
    database: process.env.NEXT_PUBLIC_NAME_DATA_BASE,
    ...sslConfig,
  };

  return new Pool(poolConfig);
};

export const getDataBaseConnection = _once(_getDataBaseConnection);
