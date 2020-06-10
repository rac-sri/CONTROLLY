import express from "express";
import postWebhook from "../controllers/postWebhook.ts";
import tryCatch from "./tryCatch.ts";
import getWebhook from "../controllers/getWebhook.ts";
const router = express.Router();

router.post("/", tryCatch(postWebhook));
router.get("/", tryCatch(getWebhook));

export default router;
