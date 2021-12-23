import { prisma } from '@/database'
import { UpdateDeliveryman } from '@/modules/deliveries/usecases/update-deliveryman/dtos'

import { Deliveries } from '@prisma/client'

export class UpdateDeliverymanUsecase {
  async execute ({ deliveryman_id, delivery_id }: UpdateDeliveryman): Promise<Deliveries> {
    return await prisma.deliveries.update({
      where: {
        id: delivery_id
      },
      data: {
        deliveryman_id
      }
    })
  }
}
