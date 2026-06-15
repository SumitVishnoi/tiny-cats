import type { Request, Response } from "express";
import { geminiAIResponse } from "../services/gemini.service.ts";


export async function askAIController(req: Request, res: Response) {
    try {
        const prompt = req.body.prompt

        const result = await geminiAIResponse(prompt)

        return res.status(200).json({
            success: true,
            message: "Content generated successfully",
            data: result
        })
    } catch (error) {
        console.log("error in ask AI", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}

