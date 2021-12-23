import { AuthenticateDeliverymanUsecase } from '@/modules/account/authenticate-deliveryman'

import { Request, Response } from 'express'

export class AuthenticateDeliverymanController {
  async handle (req: Request, res: Response): Promise<void> {
    try {
      const authenticateDeliverymanUsecase = new AuthenticateDeliverymanUsecase()
      const token = await authenticateDeliverymanUsecase.execute(req.body)
      res.json(token)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
