import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

pool.on("connect", () => {
  console.log("Connected to the database");
});
