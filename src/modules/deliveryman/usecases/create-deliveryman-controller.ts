import { Request, Response } from "express";

import { CreateDeliverymanUsecase } from "./create-deliveryman-usecase";

export class CreateDeliverymanController {
 async handle (req: Request, res: Response) {
  try {
    const createDeliverymanUsecase = new CreateDeliverymanUsecase()
    await createDeliverymanUsecase.execute(req.body)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
