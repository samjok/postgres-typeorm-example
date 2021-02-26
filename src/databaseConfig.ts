import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { User } from '../src/models/User';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USERNAME),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_DATABASE),
  synchronize: true,
  logging: false,
  entities: [
    User,
  ]
};

export default config;