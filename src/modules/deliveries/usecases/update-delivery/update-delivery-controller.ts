import { UpdateDeliveryUsecase } from "./update-delivery-usecase";

import { Request, Response } from "express";

export class UpdateDeliveryController {
 async handle (req: Request, res: Response) {
  try {
    const { deliveryman_id } = req
    const { delivery_id } = req.params
    const updateDeliveryUsecase = new UpdateDeliveryUsecase()
    const delivery = await updateDeliveryUsecase.execute({ deliveryman_id, delivery_id })
    res.status(201).json(delivery)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
