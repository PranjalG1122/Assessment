import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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
  res.send("Hello World!");
});

export const printHelloWorld = (input: string) => {
  console.log(`Hello World! ${input}`);
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
