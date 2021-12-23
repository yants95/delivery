import { CreateDeliveryman } from '@/modules/deliveryman/dtos'
import { prisma } from '@/database'

import { hash } from 'bcrypt'

export class CreateDeliverymanUsecase {
  async execute ({ username, password }: CreateDeliveryman): Promise<void> {
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
