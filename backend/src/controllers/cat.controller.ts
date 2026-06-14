import type { Request, Response } from "express";
import {
  createCatService,
  getAllCatsService,
  getSingleCatService,
  recommendService,
  searchCatService,
} from "../services/cat.service.ts";

export async function createCatController(req: Request, res: Response) {
  try {
    const result = await createCatService(req.body);

    return res.status(201).json({
      success: true,
      message: "Cat created successfully",
      data: result,
    });
  } catch (error) {
    console.log("error in create cat", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function getAllCatsController(req: Request, res: Response) {
  try {
    const result = await getAllCatsService();

    return res.status(200).json({
      success: true,
      message: "Fetched all cats successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error in get all cats",
      error,
    });
  }
}

export async function getSingleCatController(req: Request, res: Response) {
  try {
    const catId = req.params.id as string;
    const result = await getSingleCatService(catId);

    return res.status(200).json({
      success: true,
      message: "Fetched cat successfully",
      data: result,
    });
  } catch (error) {
    console.log("error in get single cat", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function searchCatController(req: Request, res: Response) {
  try {
    const q = req.query.q as string;

    const result = await searchCatService(q);

    return res.status(200).json({
      success: true,
      message: "searced cat successfully",
      data: result,
    });
  } catch (error) {
    console.log("error in search cat", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export async function recommendController(req: Request, res: Response) {
  try {
    const { kidsFriendly, apartmentFriendly } = req.body;

    const result = await recommendService(
      kidsFriendly,
      apartmentFriendly,
    );

    return res.status(200).json({
      success: true,
      message: "cat fetched",
      data: result,
    });
  } catch (error) {
    console.log("error in recommend cat", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}
