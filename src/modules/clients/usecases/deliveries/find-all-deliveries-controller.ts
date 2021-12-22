import { Request, Response } from "express";

import { FindAllDeliveriesUsecase } from "./find-all-deliveries-usecase";

export class FindAllDeliveriesController {
 async handle (req: Request, res: Response) {
  try {
    const findAllDeliveriesUsecase = new FindAllDeliveriesUsecase()
    const deliveries = await findAllDeliveriesUsecase.execute(req.client_id)
    res.status(200).json(deliveries)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
