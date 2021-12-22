import { AuthenticateClient } from '../dtos';

import { prisma } from '../../../database/prisma-client';
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

export class AuthenticateClientUsecase {
  async execute ({ username, password }: AuthenticateClient): Promise<string> {
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    })
    if (!client) throw new Error('Username/password incorrect.')
    const passwordMatch = await compare(password, client.password)
    if (!passwordMatch) throw new Error('Username/password incorrect.')
    const token = sign({ username }, String(process.env.JWT_SECRET_CLIENT), {
      subject: client.id,
      expiresIn: process.env.JWT_EXPIRES_IN
    })
    return token
  }
}
