import { Request, Response } from "express";

import { CreateDeliveryUsecase } from "./create-delivery-usecase";

export class CreateDeliveryController {
 async handle (req: Request, res: Response) {
  try {
    const createDeliveryUsecase = new CreateDeliveryUsecase()
    const delivery = await createDeliveryUsecase.execute(req.body)
    res.status(201).json(delivery)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
