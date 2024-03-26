import {
  type LocalBusinessJsonLdProps,
  LocalBusinessJsonLd as NextLocalBusinessJsonLd,
} from 'next-seo'
import merge from 'ts-deepmerge'

export const defaultLocalBussinessJsonLdProps: LocalBusinessJsonLdProps = {
  type: 'LocalBusiness',
  name: 'MonkeyEveryday',
  image:
    'https://images.ctfassets.net/dgznx7tsz3g0/1bCRdtm6TJLqPUbMphMqIh/cee00e36c1298e5dd4f53b2cc65e5000/profile.jpg',
  alternateName: 'MonkeyEveryday - เรียนพิเศษออนไลน์ติวออนไลน์',
  description:
    'MonkeyEveryday คือ Self - Learning Platform ที่ผู้เรียนสามารถเข้าถึงได้ฟรีตลอด 24 ชั่วโมง\n- เนื้อหาครอบคลุมหลายระดับ หลายวิชา ทั้งคณิต วิทย์ เคมี ฟิสิกส์ ชีวะ กาษาอังกฤษ ไทย สังคม พิเศษสุด! SAT และความถนัดแพทย์ (กสพท.)\n- ติวเพิ่มคะแนนสอบ ตะลุยโจทย์ O-net, Gat, Pat, 9 วิชาสามัญ\n- คลังข้อสอบเก่าย้อนหลัง พร้อมเฉลยละเอียดมากที่สุด และระบบวิเคราะห์จุดแข็ง - จุดอ่อนในตัว\n- แบบประเมินผู้เรียน เพื่อวางแผนการเรียนให้เหมาะสมกับเป้าหมายของแต่ละคนมากที่สุด \n- มีข่าวสารทางการศึกษาอัปเดตแบบไม่ตกเทรนด์',
  id: '',
  url: 'https://monkeyeveryday.com/',
  logo: 'https://images.ctfassets.net/dgznx7tsz3g0/1bCRdtm6TJLqPUbMphMqIh/cee00e36c1298e5dd4f53b2cc65e5000/profile.jpg',
  telephone: '+66949032323',
  email: 'mailto:support@monkeyeveryday.com',
  priceRange: '฿฿฿',
  address: {
    streetAddress: '215, Phaya Thai Rd, 10th Floor, Siamscape Building, Pathum Wan',
    addressLocality: 'Bangkok',
    postalCode: '10330',
    addressCountry: 'TH',
  },
  geo: {
    latitude: '13.744982913587377',
    longitude: '100.53069420723192',
  },
  openingHoursSpecification: {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/MonkeyEverydayOfficial/',
    'https://twitter.com/monkeyeveryday',
    'https://www.instagram.com/monkeyeveryday.official/',
    'https://www.youtube.com/channel/UC72k8jnlOUgjuGcMsrZHtAg%22',
    'https://www.tiktok.com/@monkeyeveryday.official%22',
    'https://line.me/R/ti/p/%40monkeyeveryday',
  ],
}

export const LocalBusinessJsonLd = (props: Partial<LocalBusinessJsonLdProps>) => {
  const mergedProps = merge(defaultLocalBussinessJsonLdProps, props) as LocalBusinessJsonLdProps
  return <NextLocalBusinessJsonLd {...mergedProps} />
}
