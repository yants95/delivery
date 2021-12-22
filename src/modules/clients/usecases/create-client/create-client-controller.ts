import { Request, Response } from "express";

import { CreateClientsUsecase } from "./create-client-usecase";

export class CreateClientController {
 async handle (req: Request, res: Response) {
  try {
    const createClientUsecase = new CreateClientsUsecase()
    await createClientUsecase.execute(req.body)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
