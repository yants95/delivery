import { UpdateDeliverymanUsecase } from '@/modules/deliveries/usecases'

import { Request, Response } from 'express'

export class UpdateDeliverymanController {
  async handle (req: Request, res: Response): Promise<void> {
    try {
      const { deliveryman_id } = req
      const { delivery_id } = req.params
      const updateDeliverymanUsecase = new UpdateDeliverymanUsecase()
      const delivery = await updateDeliverymanUsecase.execute({ deliveryman_id, delivery_id })
      res.status(201).json(delivery)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
