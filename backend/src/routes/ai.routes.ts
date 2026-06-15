import express from "express"
import { askAIController } from "../controllers/ai.controller.ts"

const aiRouter = express.Router()

aiRouter.post("/ask", askAIController)

export default aiRouter