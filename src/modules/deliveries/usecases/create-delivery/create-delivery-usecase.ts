import { CreateDelivery } from './dtos';

import { prisma } from '../../../../database/prisma-client';

export class CreateDeliveryUsecase {
  async execute({ item_name, client_id }: CreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        client_id
      }
    })
    return delivery
  }
}
