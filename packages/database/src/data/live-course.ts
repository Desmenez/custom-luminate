import { addDays, addYears, subHours } from 'date-fns'

import {
  LiveCoursePlaybackLimitType,
  LiveCourseType,
  Prisma,
  PrismaClient,
} from '../generated/client'

const courseThumbnailUrls = [
  'https://media.discordapp.net/attachments/1144562842285117450/1144563109441314857/course-thumbnail-1.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563109734908014/course-thumbnail-2.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563110007545886/course-thumbnail-3.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563110330515517/course-thumbnail-4.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563110687023225/course-thumbnail-5.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563111018365058/course-thumbnail-6.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563111257456721/course-thumbnail-7.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563111546855444/course-thumbnail-8.png?width=880&height=1184',
  'https://media.discordapp.net/attachments/1144562842285117450/1144563111769145455/course-thumbnail-9.png?width=880&height=1184',
]

const courseCoverUrl =
  'https://media.discordapp.net/attachments/1144562842285117450/1144567104037732443/course-cover.png?width=1400&height=776'

const courseStickerUrl =
  'https://media.discordapp.net/attachments/1144562842285117450/1144567103773483058/course-sticker.png?width=800&height=360'

export async function seedLiveCourse(prisma: PrismaClient) {
  const day = 24 * 60 * 60 * 1000
  const startDate = new Date()
  const endDate = new Date(startDate.getTime() + 30 * day)
  await prisma.liveCourse.createMany({
    data: [
      {
        id: 'liveCourse1',
        name: 'Live Course 1',
        description: 'Auto generated live course 1',
        aboutCourse: 'About live course',
        isActive: true,
        isRecommended: true,
        courseThumbnailUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144563110330515517/course-thumbnail-4.png?width=880&height=1184',
        courseCoverUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144567104037732443/course-cover.png?width=1400&height=776',
        courseStickerUrl:
          'https://media.discordapp.net/attachments/1144562842285117450/1144567103773483058/course-sticker.png?width=800&height=360',
        startDate: startDate,
        endDate: endDate,
        lastEnrollmentDate: new Date(endDate.getTime() + 7 * day),
        tutorId: 'tutor1',
        subjectId: 'p',
        liveSessionsDescription: 'Live sessions description',
        playbackDurationLimit: 60,
        limitType: LiveCoursePlaybackLimitType.MINUTE,
        type: LiveCourseType.FUSION,
        onlinePrice: 1000,
        onsitePrice: 1500,
        originalOnlinePrice: 2000,
        originalOnsitePrice: 3000,
        onsiteMaxSeats: 15,
        onsiteAddress: [
          'MonkeyEveryday - Learning Space',
          'ชั้น 10 ตึก Siamscape สยามสแควร์ (เปิดทุกวัน 10:00-22:00 น.)',
          'โทร. 02-222-2222',
        ].join('\n'),
        enableRecordingPlayback: true,
        recordingRequiresSubscription: false,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: [
          'MonkeyEveryday - Learning Space',
          'ชั้น 10 ตึก Siamscape สยามสแควร์ (เปิดทุกวัน 10:00-22:00 น.)',
          'โทร. 02-222-2222',
        ].join('\n'),
        // fundamentalCourseIds: ['plan1', 'plan2'],
        // exerciseIds: ['plan1'],
        fundamentalCourseRequiresSubscription: true,
        grades: [10, 11, 12],
      },
      {
        id: 'liveCourse2',
        name: 'Live Course 2',
        description: 'Auto generated live course 2',
        aboutCourse: 'About live course',
        isActive: true,
        isRecommended: false,
        startDate: startDate,
        endDate: endDate,
        lastEnrollmentDate: new Date(endDate.getTime() + 7 * day),
        tutorId: 'tutor2',
        subjectId: 'e',
        liveSessionsDescription: 'Live sessions description',
        type: LiveCourseType.ONSITE,
        onsitePrice: 2000,
        originalOnsitePrice: 3000,
        hasQuiz: false,
        grades: [10, 11, 12],
      },
    ],
  })

  await prisma.liveCourse.update({
    where: {
      id: 'liveCourse1',
    },
    data: {
      fundamentalCourses: {
        createMany: {
          data: [
            {
              id: 'plan1',
              fundamentalCourseId: 'fundamentalCourse1',
              sheetUrl:
                'https://www.apollographql.com/Apollo-graphql-at-enterprise-scale-final.pdf',
            },
          ],
        },
      },
    },
  })
  await prisma.liveCourse.createMany({
    data: [
      {
        id: 'typeLive',
        name: 'Course with type: LIVE',
        type: LiveCourseType.LIVE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'typeTape',
        name: 'Course with type: TAPE',
        type: LiveCourseType.TAPE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 999,
        originalOnlinePrice: 2000,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'typeOnsite',
        name: 'Course with type: ONSITE',
        type: LiveCourseType.ONSITE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onsitePrice: 999,
        originalOnsitePrice: 2000,
        onsiteAddress: 'onsiteAddress',
        onsiteMaxSeats: 10,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'typeFusion',
        name: 'Course with type: FUSION',
        type: LiveCourseType.FUSION,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        onsitePrice: 1500,
        originalOnsitePrice: 2000,
        onsiteAddress: 'onsiteAddress',
        onsiteMaxSeats: 10,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'typeFusionOnlineOnly',
        name: 'Course with type: FUSION but online only',
        type: LiveCourseType.FUSION,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'typeFusionOnsiteOnly',
        name: 'Course with type: FUSION but onsite only',
        type: LiveCourseType.FUSION,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onsitePrice: 1000,
        originalOnsitePrice: 2000,
        onsiteAddress: 'onsiteAddress',
        onsiteMaxSeats: 10,
        hasShipping: true,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'noShipping',
        name: 'Course with hasShipping: false',
        type: LiveCourseType.LIVE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        hasShipping: false,
        hasPickUp: true,
        pickupAddress: 'pickupAddress',
        grades: [10, 11, 12],
      },
      {
        id: 'noPickup',
        name: 'Course with hasPickup: false',
        type: LiveCourseType.LIVE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        hasShipping: true,
        hasPickUp: false,
        grades: [10, 11, 12],
      },
      {
        id: 'noMaterial',
        name: 'Course with hasShipping: false and hasPickup: false',
        type: LiveCourseType.LIVE,
        description: 'Live course',
        aboutCourse: 'About live course',
        subjectId: 'p',
        isRecommended: false,
        tutorId: 'tutor2',
        startDate: new Date(),
        endDate: addDays(new Date(), 30),
        lastEnrollmentDate: addYears(new Date(), 1),
        isActive: true,
        onlinePrice: 1000,
        originalOnlinePrice: 2000,
        hasShipping: false,
        hasPickUp: false,
        grades: [10, 11, 12],
      },
    ],
  })

  await prisma.liveCourseAddon.createMany({
    data: [
      {
        id: 'addon1',
        name: '+ 3 เดือน',
        price: 1000,
        durationDays: 90,
        liveCourseId: 'liveCourse1',
      },
      {
        id: 'addon2',
        name: '+ 6 เดือน',
        price: 2000,
        durationDays: 180,
        liveCourseId: 'liveCourse1',
      },
    ],
  })

  await prisma.liveCoursePackage.createMany({
    data: [
      {
        id: 'liveCoursePackage1',
        title: 'Live Course Package 1',
        description: 'Auto generated live course package 1',
        price: 9001,
        liveCourseId: 'liveCourse1',
        packageType: 'LIVECOURSE_ONLY',
        durationUnit: 'MONTH',
        duration: 2,
      },
      {
        id: 'liveCoursePackage2',
        title: 'Live Course Package 2',
        description: 'Auto generated live course package 2',
        price: 9002,
        liveCourseId: 'liveCourse2',
        packageType: 'LIVECOURSE_ONLY',
        durationUnit: 'MONTH',
        duration: 2,
      },
    ],
  })

  await prisma.liveCourseChatRoom.createMany({
    data: [
      {
        liveCourseId: 'liveCourse1',
        platform: 'FACEBOOK',
        url: 'https://www.facebook.com/',
      },
      {
        liveCourseId: 'liveCourse1',
        platform: 'FACEBOOK',
        url: 'https://www.youtube.com/',
      },
    ],
  })

  await prisma.liveSession.createMany({
    data: [
      {
        id: 'liveSession1',
        description: 'Auto generated live session 1/1',
        name: 'Live Session 1',
        startTime: startDate,
        endTime: addYears(new Date(), 1),
        liveCourseId: 'liveCourse1',
        streamKey: 'dd832755cbb71a0c57f348da3007b1d5k3f27f65512b95716fe6a866da4fa1575',
        streamInputId: '3f27f65512b95716fe6a866da4fa1575',
        videoId: '509b0ae3a0558941839237c76ba15398',
      },
      {
        description: 'Auto generated live session 2/1',
        name: 'Live Session 2',
        startTime: new Date(startDate.getTime() + day),
        endTime: new Date(startDate.getTime() + day + 60 * 60 * 1000),
        liveCourseId: 'liveCourse1',
        streamKey: 'streamKey2',
        streamInputId: 'streamInputId1',
      },
      {
        description: 'Auto generated live session 1/2',
        name: 'Live Session 1',
        startTime: startDate,
        endTime: new Date(startDate.getTime() + 60 * 60 * 1000),
        liveCourseId: 'liveCourse2',
        streamKey: 'streamKey1',
        streamInputId: 'streamInputId1',
      },
      {
        description: 'Auto generated live session 2/2',
        name: 'Live Session 2',
        startTime: new Date(startDate.getTime() + day),
        endTime: new Date(startDate.getTime() + day + 60 * 60 * 1000),
        liveCourseId: 'liveCourse2',
        streamKey: 'streamKey2',
        streamInputId: 'streamInputId1',
      },
      {
        id: 'videoSession1',
        name: 'ติวสด หมูกระทะป๊ะปุ๊',
        description:
          'หมูกระทะป๊ะปุ๊ หมูกระทุปุ๊ป๊ะ ป๊ะปุ๊ป๊ะ ปุ๊ป๊ะ ปุ๊ป๊ะ หมูกระทะป๊ะปุ๊ หมูกระทุปุ๊ป๊ะ ป๊ะปุ๊ป๊ะ ปุ๊ป๊ะ ปุ๊ป๊ะ',
        startTime: subHours(startDate, 3),
        endTime: subHours(startDate, 3),
        liveCourseId: 'liveCourse1',
        streamKey: '',
        streamInputId: '',
        videoId: 'e1fbec131f4d509cedb38133c011ee6c',
      },
    ],
  })

  await prisma.liveCoursesOnUsers.createMany({
    data: [
      {
        liveCourseId: 'liveCourse1',
        userId: 'student1',
        learningType: 'ONSITE',
        expiresAt: addDays(endDate, 30),
      },
    ],
  })

  function getRandomType() {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        return LiveCourseType.LIVE
      case 1:
        return LiveCourseType.FUSION
      case 2:
        return LiveCourseType.ONSITE
      default:
        return LiveCourseType.TAPE
    }
  }

  function getRandomElement<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  // Recommended live courses
  const recommendedLiveCourses = Array.from({ length: 50 })
    .fill(null)
    .map((_, index) => {
      const type = getRandomType()
      return {
        id: `recommendedLiveCourse${index + 1}`,
        name: `คอร์สสด วิชาเคมี ${index + 1}`,
        description:
          'คอร์สสด เนื้อหาเคมีสำหรับสอบ A-Level ที่ครูเต้ได้ออกแบบ จัดทำโจทย์ รวมถึงจัดทำเนื้อหารูปแบบต่างๆ ขึ้นมาใหม่ ให้ตรงประเด็นที่สุด กระชับที่สุด พร้อมโจทย์เพื่อฝึกซ้อมสำหรับแต่ละหัวข้อ และคลายทุกข้อสงสัยผ่านการถามตอบในพื้นที่ออนไลน์ส่วนตัว',
        isActive: true,
        isRecommended: true,
        startDate: startDate,
        endDate: endDate,
        lastEnrollmentDate: new Date(endDate.getTime() + 7 * day),
        tutorId: 'tutor1',
        subjectId: 'p',
        liveSessionsDescription: 'Live sessions description',
        playbackDurationLimit: 60,
        limitType: LiveCoursePlaybackLimitType.MINUTE,
        type,
        onlinePrice: type === 'ONSITE' ? undefined : 1000,
        originalOnlinePrice: type === 'ONSITE' ? undefined : 2000,
        onsitePrice: type === 'ONSITE' || type === 'FUSION' ? 1000 : undefined,
        originalOnsitePrice: type === 'ONSITE' || type === 'FUSION' ? 2000 : undefined,
        courseThumbnailUrl: getRandomElement(courseThumbnailUrls),
        courseCoverUrl,
        courseStickerUrl,
        grades: [7, 8, 9, 10, 11, 12],
      }
    })
  await prisma.liveCourse.createMany({
    data: recommendedLiveCourses,
  })

  await prisma.liveCourse.update({
    where: {
      id: recommendedLiveCourses[0].id,
    },
    data: {
      liveSessions: {
        create: [
          {
            id: 'livingSession1',
            name: 'คอร์สสด เซียนเคมี พิชิตสอวน. ครั้งที่ 1',
            description: 'ประสบการณ์การติวสอบคัดเลือก สอวน.เคมี มานานกว่า 20 ปี',
            startTime: new Date('2000-08-01T00:00:00.000Z'),
            endTime: new Date('2200-08-01T01:00:00.000Z'),
            streamKey: 'dd832755cbb71a0c57f348da3007b1d5k3f27f65512b95716fe6a866da4fa1575',
            streamInputId: '3f27f65512b95716fe6a866da4fa1575',
          },
        ],
      },
    },
  })

  await prisma.liveCoursesOnUsers.createMany({
    data: Array.from({ length: 10 })
      .fill(null)
      .map((_, index) => {
        return {
          liveCourseId: recommendedLiveCourses[index].id,
          userId: 'student1',
          learningType: recommendedLiveCourses[index].type === 'ONSITE' ? 'ONSITE' : 'ONLINE',
          recentLiveSessionId: index % 3 === 1 ? 'videoSession1' : undefined,
          recentLiveSessionTimestampSeconds: index % 3 === 1 ? 50 : undefined,
          recentLiveSessionVideoLengthSeconds: index % 3 === 1 ? 120 : undefined,
          expiresAt: addDays(endDate, 30),
        }
      }),
  })

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  async function generateCommentsForLiveCourse(liveCourseId: string, numberOfComment: number) {
    await prisma.liveCourseComment.createMany({
      data: Array.from({ length: numberOfComment })
        .fill(null)
        .map((_, index) => {
          return {
            liveCourseId: liveCourseId,
            userId: `student${index + 2}`,
            stars: randomInt(0, 100) / 20,
            userUpdatedAt: Math.random() > 0.9 ? new Date() : null,
            description:
              'กรอบรูป คอนโทรล จัมโบ้แคมเปญลีกเดี้ยง รามาธิบดีไคลแม็กซ์หลวงปู่ล็อต ฉลุยโนติสเวิร์คไวอากร้าโค้ก เป็นไงราชบัณฑิตยสถานอุด้งรีไทร์โปรเจ็กต์ ช็อปปิ้ง ครูเสดเดชานุภาพตนเองชาร์ตบูม เลดี้บึ้มแพลน เอ็กซ์เพรส ดัมพ์กิมจิแอปเปิ้ลกษัตริยาธิราช แซวยอมรับเปเปอร์หลวงตา เตี๊ยมแอร์ชินบัญชรบาร์บีคิวทรู สหรัฐคอนโดมิเนียมคันยิ เนิร์สเซอรี่พาร์ทเนอร์แซ็กโซโฟนบาร์บีคิวโอวัลติน ไคลแม็กซ์สถาปัตย์แคร็กเกอร์',
          } satisfies Prisma.LiveCourseCommentCreateManyArgs['data']
        }),
    })
  }

  await generateCommentsForLiveCourse('liveCourse1', 50)
  await generateCommentsForLiveCourse('liveCourse2', 20)
  await generateCommentsForLiveCourse('typeOnsite', 20)

  for (let i = 0; i < 10; i++) {
    const nextCourse = getRandomElement(recommendedLiveCourses)
    await prisma.liveCourse.update({
      where: { id: recommendedLiveCourses[0].id },
      data: {
        suggestedNextCourses: {
          connect: {
            id: nextCourse.id,
          },
        },
      },
    })
  }
  for (let i = 0; i < 3; i++) {
    const previousCourse = getRandomElement(recommendedLiveCourses)
    await prisma.liveCourse.update({
      where: { id: recommendedLiveCourses[0].id },
      data: {
        suggestedPrerequisiteCourses: {
          connect: {
            id: previousCourse.id,
          },
        },
      },
    })
  }
}
