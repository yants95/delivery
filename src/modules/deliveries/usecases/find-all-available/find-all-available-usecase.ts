import { prisma } from '@/database'
import { Deliveries } from '@prisma/client'

export class FindAllAvailableUsecase {
  async execute (): Promise<Deliveries[]> {
    return await prisma.deliveries.findMany({
      where: {
        deliveryman_id: null,
        end_at: null
      }
    })
  }
}
