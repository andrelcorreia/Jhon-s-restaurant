import Postgres, { PoolClient, QueryResultRow } from "pg";
import env from "../config/config";

const { Pool } = Postgres;

async function getConnection(): Promise<Postgres.Pool> {
  if (globalThis.databaseConnection) return globalThis.databaseConnection;

  const newConnection = new Pool({
    connectionString: env.DATABASE_URL,
    max: 20,
  });

  globalThis.databaseConnection = newConnection;
  return newConnection;
}

class PostgresClient {
  async query<T extends QueryResultRow>(
    query: string,
    params?: unknown[]
  ): Promise<Postgres.QueryResult<T>> {
    const pool = await getConnection();
    let client = await pool.connect();

    try {
      const result = await client.query<T>(query, params);
      return result;
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  }

  getTransactionClient() {
    return new PostgresTransactionClient();
  }

  endPool() {
    globalThis.databaseConnection?.end();
  }
}

export class PostgresTransactionClient {
  client: PoolClient;

  async getInstance() {
    const pool = await getConnection();
    this.client = await pool.connect();
  }

  async begin() {
    if (!this.client) await this.getInstance();
    await this.client.query("BEGIN");
  }

  async commit() {
    if (!this.client) await this.getInstance();
    await this.client.query("COMMIT");
  }

  async rollback() {
    if (!this.client) await this.getInstance();
    await this.client.query("ROLLBACK");
  }

  async query<T extends QueryResultRow>(
    query: string,
    params?: unknown[]
  ): Promise<Postgres.QueryResult<T>> {
    if (!this.client) await this.getInstance();
    const result = await this.client.query<T>(query, params);
    return result;
  }

  release() {
    this.client.release();
  }
}

export default new PostgresClient();
