import { UpdateDelivery } from '@/modules/deliveries/usecases/update-delivery/dtos'
import { prisma } from '@/database'

import { Prisma } from '@prisma/client'

export class UpdateDeliveryUsecase {
  async execute ({ deliveryman_id, delivery_id }: UpdateDelivery): Promise<Prisma.BatchPayload> {
    return await prisma.deliveries.updateMany({
      where: {
        id: delivery_id,
        deliveryman_id
      },
      data: {
        end_at: new Date()
      }
    })
  }
}
