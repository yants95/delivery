import { prisma } from "../../../../database/prisma-client";

export class FindAllAvailableUsecase {
  async execute () {
    return await prisma.deliveries.findMany({
      where: {
        end_at: null
      }
    })
  }
}
