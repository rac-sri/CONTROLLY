import express from "express";
import postWebhook from "../controllers/postWebhook";
import tryCatch from "./tryCatch";
import getWebhook from "../controllers/getWebhook";
const router = express.Router();

router.post("/", tryCatch(postWebhook));
router.get("/", tryCatch(getWebhook));

export default router;
