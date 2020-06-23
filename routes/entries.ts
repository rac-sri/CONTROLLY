import express from "express";
import tryCatch from "./tryCatch";
import entries from "../controllers/entries";

const router = express.Router();

router.get("/", tryCatch(entries));

export default router;
