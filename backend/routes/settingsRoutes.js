import express from "express";

import {
  getSettings,
  updateSettings,
} from "../controllers/settingsController.js";

import uploadLogo from "../middleware/uploadLogo.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get Settings
router.get("/", getSettings);

// Update Settings
router.put(
  "/",
  protect,
  uploadLogo.fields([
    {
      name: "logo",
      maxCount: 1,
    },
    {
      name: "principalPhoto",
      maxCount: 1,
    },
  ]),
  updateSettings
);

export default router;