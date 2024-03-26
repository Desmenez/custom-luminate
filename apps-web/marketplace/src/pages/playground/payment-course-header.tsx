import { CourseHeader } from '@app/modules/payment/components/course-header'

import { PaymentPackageInfo } from '@luminate/rest'

const mockPackageInfo: PaymentPackageInfo = {
  liveCourseId: 'liveCourse1',
  type: 'FUSION',
  name: 'คอร์สสดพิชิต เคมี สอวน.',
  courseCoverUrl:
    'https://media.discordapp.net/attachments/1144562842285117450/1144567104037732443/course-cover.png?width=1400&height=776',
  courseStickerUrl:
    'https://media.discordapp.net/attachments/1144562842285117450/1144567103773483058/course-sticker.png?width=800&height=360',
  startDate: '2023-08-17T02:29:44.614Z',
  endDate: '2023-09-16T02:29:44.614Z',
  registrationDeadline: '2023-09-23T02:29:44.614Z',
  startingPrice: 1000,
  learningTypeOptions: {
    online: { price: 1000, features: ['LIVE', 'RECORDING', 'EXERCISE', 'QUIZ'] },
    onsite: {
      price: 1500,
      features: ['ONSITE', 'RECORDING', 'EXERCISE', 'QUIZ'],
      availableSeats: 15,
      onsiteAddress: '',
    },
  },
  addonOptions: [
    {
      id: 'addon1',
      name: '+ 3 เดือน',
      price: 1000,
      durationDays: 90,
      features: ['FUNDAMENTAL', 'RECORDING', 'EXERCISE'],
    },
    {
      id: 'addon2',
      name: '+ 6 เดือน',
      price: 2000,
      durationDays: 180,
      features: ['FUNDAMENTAL', 'RECORDING', 'EXERCISE'],
    },
  ],
  receiveMaterialOptions: {
    shipping: { price: 100 },
    pickup: {
      pickupAddress: ['Hello World', 'Nice to meet you'].join('\n'),
    },
  },
}

export default function PlaygroundPaymentCourseDetail() {
  return (
    <CourseHeader
      type={mockPackageInfo.type}
      name={mockPackageInfo.name}
      courseCoverUrl={mockPackageInfo.courseCoverUrl}
      courseStickerUrl={mockPackageInfo.courseStickerUrl}
      startDate={mockPackageInfo.startDate}
      endDate={mockPackageInfo.endDate}
      registrationDeadline={mockPackageInfo.registrationDeadline}
      price={mockPackageInfo.startingPrice}
    />
  )
}
