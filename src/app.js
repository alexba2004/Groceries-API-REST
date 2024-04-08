import express from "express";
import morgan from "morgan";
import productsRouter from "./routes/product.routes.js";
//import { config } from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

//config();

app.use("/", productsRouter);

export default app;
