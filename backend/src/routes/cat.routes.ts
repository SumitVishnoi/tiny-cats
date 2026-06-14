import express from "express"
import { createCatController, getAllCatsController, getSingleCatController, recommendController, searchCatController } from "../controllers/cat.controller.ts"

const router = express.Router()

router.post("/create", createCatController)
router.get("/", getAllCatsController)
router.get("/:id", getSingleCatController)
router.get("/search/all", searchCatController)
router.get("/recommend", recommendController)

export default router