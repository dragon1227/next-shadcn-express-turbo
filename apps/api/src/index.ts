import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import rootRouter from "./routes/root";

const app = express();

app.use(morgan("dev"));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const port = process.env.API_PORT || 5001;

app.listen(port, () => {
  console.log(`api running at port ${port}`);
});

app.use("/api", rootRouter);

app.get("/health", (req, res) => {
  res.json({ ok: true });
});
