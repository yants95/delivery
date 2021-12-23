import { CreateClientsUsecase } from '@/modules/clients/usecases'

import { Request, Response } from 'express'
export class CreateClientController {
  async handle (req: Request, res: Response): Promise<void> {
    try {
      const createClientUsecase = new CreateClientsUsecase()
      await createClientUsecase.execute(req.body)
      res.sendStatus(201)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
