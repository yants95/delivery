import { AuthenticateDeliveryman } from '../dtos';

import { prisma } from '../../../database/prisma-client';
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export class AuthenticateDeliverymanUsecase {
  async execute ({ username, password }: AuthenticateDeliveryman): Promise<string> {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username
      }
    })
    if (!deliveryman) throw new Error('Username/password incorrect.')
    const passwordMatch = await compare(password, deliveryman.password)
    if (!passwordMatch) throw new Error('Username/password incorrect.')
    const token = sign({ username }, String(process.env.JWT_SECRET_DELIVERYMAN), {
      subject: deliveryman.id,
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
  }
}
