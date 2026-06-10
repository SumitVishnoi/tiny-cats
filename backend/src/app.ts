import express, { type Request, type Response } from "express"
import catRouter from "./routes/cat.routes.ts"

const app = express()

app.use(express.json())

app.get("/", (req: Request, res: Response)=> {
    res.json("hello world")
})

app.use("/api/cat", catRouter)

export default app