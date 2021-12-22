import { Request, Response } from "express";

import { AuthenticateClientUsecase } from "./authenticate-client-usecase";

export class AuthenticateClientController {
 async handle (req: Request, res: Response) {
  try {
    const authenticateClientUsecase = new AuthenticateClientUsecase()
    const token = await authenticateClientUsecase.execute(req.body)
    res.json(token)
  } catch (error) {
    res.status(500).json({ message: error })
  }
 } 
}
