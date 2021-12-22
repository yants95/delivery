import { Request, Response } from "express";

import { AuthenticateDeliverymanUsecase } from "./authenticate-deliveryman-usecase";

export class AuthenticateDeliverymanController {
 async handle (req: Request, res: Response) {
  try {
    const authenticateDeliverymanUsecase = new AuthenticateDeliverymanUsecase()
    const token = await authenticateDeliverymanUsecase.execute(req.body)
    res.json(token)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
