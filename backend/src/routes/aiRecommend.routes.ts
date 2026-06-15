import express from "express"
import { recommendController } from "../controllers/cat.controller.ts"

const recommendRouter = express.Router()

recommendRouter.post("/recommendbyai", recommendController)

export default recommendRouter