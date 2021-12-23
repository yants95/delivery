import { CreateDelivery } from '@/modules/deliveries/usecases/create-delivery/dtos'
import { prisma } from '@/database'
export class CreateDeliveryUsecase {
  async execute ({ item_name, client_id }: CreateDelivery): Promise<void> {
    await prisma.deliveries.create({
      data: {
        item_name,
        client_id
      }
    })
  }
}
