import { CreateClientDTO } from "./dtos";

import { prisma } from '../../../../database/prisma-client'
import { hash } from 'bcrypt'

export class CreateClientsUsecase {
  async execute ({ username, password }: CreateClientDTO) {
    const client = await prisma.clients.findFirst({
      where: { 
        username: {
          equals: username,
          mode: 'insensitive'
        }
      } 
    })
    if (client) throw new Error('Client already exists.')
    const hashedPassword = await hash(password, 10)
    await prisma.clients.create({
      data: {
        username,
        password: hashedPassword
      }
    })
  }
}
