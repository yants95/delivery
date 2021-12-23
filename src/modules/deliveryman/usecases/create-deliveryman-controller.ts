import { Request, Response } from 'express'

import { CreateDeliverymanUsecase } from '@/modules/deliveryman/usecases'

export class CreateDeliverymanController {
  async handle (req: Request, res: Response): Promise<void> {
    try {
      const createDeliverymanUsecase = new CreateDeliverymanUsecase()
      await createDeliverymanUsecase.execute(req.body)
      res.sendStatus(201)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
