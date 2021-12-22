import { CreateDeliveryman } from "../dtos";

import { prisma } from '../../../database/prisma-client'
import { hash } from 'bcrypt'

export class CreateDeliverymanUsecase {
  async execute ({ username, password }: CreateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })
    if (deliveryman) throw new Error('Deliveryman already exists.')
    const hashedPassword = await hash(password, 10)
    await prisma.deliveryman.create({
      data: {
        username,
        password: hashedPassword
      }
    })
  }
}
