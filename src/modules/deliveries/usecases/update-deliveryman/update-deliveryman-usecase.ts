import { prisma } from "../../../../database/prisma-client";

import { UpdateDeliveryman } from "./dtos";

export class UpdateDeliverymanUsecase {
  async execute ({ deliveryman_id, delivery_id }: UpdateDeliveryman) {
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
