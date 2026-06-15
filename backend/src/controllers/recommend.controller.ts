import type { Request, Response } from "express";
import { aiRecommendService } from "../services/recommend.service.ts";


export async function aiRecommendController(req: Request, res:Response) {
    try {
        const {kidsFriendly, apartmentFriendly} = req.body

    const result = await aiRecommendService(kidsFriendly, apartmentFriendly)

    return res.status(200).json({
        success: true,
        message: "recommended reuslt",
        data: result
    })
    } catch (error) {
        console.log("error in ai recommendation", error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}   