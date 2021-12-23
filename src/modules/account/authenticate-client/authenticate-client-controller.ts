import { AuthenticateClientUsecase } from '@/modules/account/authenticate-client'

import { Request, Response } from 'express'
export class AuthenticateClientController {
  async handle (req: Request, res: Response): Promise<void> {
    try {
      const authenticateClientUsecase = new AuthenticateClientUsecase()
      const token = await authenticateClientUsecase.execute(req.body)
      res.json(token)
    } catch (error) {
      res.status(500).json({ message: error })
    }
  }
}
