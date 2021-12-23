import { Request, Response } from 'express'

import { FindAllAvailableUsecase } from '@/modules/deliveries/usecases'

export class FindAllAvailableController {
  async handle (_: Request, res: Response): Promise<void> {
    try {
      const findAllAvailableUsecase = new FindAllAvailableUsecase()
      const deliveries = await findAllAvailableUsecase.execute()
      res.status(201).json(deliveries)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
