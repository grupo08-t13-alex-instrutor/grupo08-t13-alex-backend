import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors"
import { listingAdsRoutes } from "./routes";
import handleError from "./errors/handleError";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/listingAds", listingAdsRoutes)

app.use(handleError);

export default app;