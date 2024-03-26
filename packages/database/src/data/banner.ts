import { PrismaClient } from '@prisma/client'

export const seedBanner = async (prisma: PrismaClient) => {
  await prisma.banner.createMany({
    data: [
      {
        id: 'banner1',
        name: 'Example live banner 1',
        order: 'A',
        isActive: true,
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144569910496862238/hero-banner.png?width=3840&height=1600',
        linkUrl: 'https://www.google.com',
      },
      {
        id: 'banner2',
        name: 'Example live banner 2',
        order: 'B',
        isActive: true,
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144569910496862238/hero-banner.png?width=3840&height=1600',
        linkUrl: 'https://www.google.com',
      },
    ],
  })
}
