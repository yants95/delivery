import { Request, Response } from "express";

import { CreateDeliveryUsecase } from "./create-delivery-usecase";

export class CreateDeliveryController {
 async handle (req: Request, res: Response) {
  try {
    const { item_name } = req.body
    const { client_id } = req
    const createDeliveryUsecase = new CreateDeliveryUsecase()
    const delivery = await createDeliveryUsecase.execute({ item_name, client_id })
    res.status(201).json(delivery)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
