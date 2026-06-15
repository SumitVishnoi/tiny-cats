import express, { type Request, type Response } from "express"
import catRouter from "./routes/cat.routes.ts"
import aiRouter from "./routes/ai.routes.ts"
import recommendRouter from "./routes/aiRecommend.routes.ts"

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response)=> {
    res.json("hello world")
})

app.use("/api/cats", catRouter)
app.use("/api/ai", aiRouter)
app.use("/api/airecommend", recommendRouter)

export default app