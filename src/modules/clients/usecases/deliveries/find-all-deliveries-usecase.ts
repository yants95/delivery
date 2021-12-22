import { prisma } from "../../../../database/prisma-client";

export class FindAllDeliveriesUsecase {
  async execute (client_id: string) {
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
