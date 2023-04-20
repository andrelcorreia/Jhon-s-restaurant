import { client } from "../../../../database/pool";
import PostgresClient from "../../../lib/pgCliente";
import { IUserRepositories } from "../interfaces/iUserRepositories";
import { createUser, User, updateUser } from "../interfaces/user";

export class UserRepository implements IUserRepositories {
  async create(props: createUser): Promise<User> {
    console.log({ props });
    const query = `
    INSERT INTO users (name, email, password)
    VALUES($1,$2,$3)
    `;
    const rows = client.query(query, [props.name, props.email, props.password]);

    return rows;
  }

  async listAll(): Promise<User[]> {
    const query = await PostgresClient.query<User>(`
    SELECT u.id, u.name, u.email, u.active, u.registed_at,
    FROM users u
    `);

    return query;
  }

  listById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async listByEmail(email: string): Promise<User> {
    const query = await PostgresClient.query<User>(`
    SELECT * FROM users u
    WHERE u.email = $1
    `);

    return query;
  }

  update(props: updateUser): Promise<User> {
    throw new Error("Method not implemented.");
  }
  inactive(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
