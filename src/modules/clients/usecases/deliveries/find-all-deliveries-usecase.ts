import { prisma } from '@/database'

export class FindAllDeliveriesUsecase {
  async execute (client_id: string): Promise<any> {
    return await prisma.clients.findMany({
      where: {
        id: client_id
      },
      select: {
        deliveries: true,
        id: true,
        username: true
      }
    })
  }
}
