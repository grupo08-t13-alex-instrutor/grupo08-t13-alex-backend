import "express-async-errors";
import express from "express";
import "reflect-metadata";
import cors from "cors"
import { listingAdsRoutes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/listingAds", listingAdsRoutes)

export default app;