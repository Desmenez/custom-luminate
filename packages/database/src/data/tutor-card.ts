import { PrismaClient } from '@prisma/client'

export const seedTutorCard = async (prisma: PrismaClient) => {
  await prisma.tutorCard.createMany({
    data: [
      {
        id: 'tutorCard1',
        order: 'A',
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144568346109558905/tutor-banner-1.png?width=920&height=616',
        altText: 'Tutor 1',
        tutorId: 'tutor1',
      },
      {
        id: 'tutorCard2',
        order: 'B',
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144568346352832582/tutor-banner-2.png?width=920&height=616',
        altText: 'Tutor 2',
        tutorId: 'tutor2',
      },
      {
        id: 'tutorCard3',
        order: 'C',
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144568346638041118/tutor-banner-3.png?width=920&height=616',
        altText: 'Tutor 3',
        tutorId: 'tutor3',
      },
      {
        id: 'tutorCard4',
        order: 'D',
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144568346889703455/tutor-banner-4.png?width=920&height=616',
        altText: 'Tutor 4',
        tutorId: 'tutor4',
      },
      {
        id: 'tutorCard5',
        order: 'E',
        imageUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144568347162316880/tutor-banner-5.png?width=920&height=616',
        altText: 'Tutor 5',
        tutorId: 'tutor5',
      },
    ],
  })
}
