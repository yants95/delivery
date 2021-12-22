import { Request, Response } from "express";

import { FindAllAvailableUsecase } from "./find-all-available-usecase";

export class FindAllAvailableController {
 async handle (req: Request, res: Response) {
  try {
    const findAllAvailableUsecase = new FindAllAvailableUsecase()
    const deliveries = await findAllAvailableUsecase.execute()
    res.status(201).json(deliveries)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
