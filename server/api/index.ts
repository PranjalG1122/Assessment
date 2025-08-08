import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { pool } from "@/db/db";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["X-session-token"],
  })
);
app.use(cookieParser());

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.json({ message: "Hello World!", database_name: result.rows[0].current_database });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
