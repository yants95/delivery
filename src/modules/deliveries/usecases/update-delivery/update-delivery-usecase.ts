import { prisma } from "../../../../database/prisma-client";
import { UpdateDelivery } from "./dtos";

export class UpdateDeliveryUsecase {
  async execute ({ deliveryman_id, delivery_id }: UpdateDelivery) {
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
