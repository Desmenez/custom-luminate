import { type DefaultSeoProps, DefaultSeo as NextDefaultSeo } from 'next-seo'
import merge from 'ts-deepmerge'

export const defaultSeoProps: DefaultSeoProps = {
  title: '',
  titleTemplate: '%s | MonkeyEveryday',
  defaultTitle: 'MonkeyEveryday',
  description:
    'เชื่อมโยงความรู้อย่างเป็นระบบ แบบที่ไม่เคยมีมาก่อน เรียนได้ตั้งแต่ ป.4 - ม.6 และมหาลัย. วิชาคณิต วิทย์ อังกฤษ ฟิสิกส์ เคมี ชีวะ พร้อมคลิปสอน แบบฝึกหัด ข้อสอบ คำใบ้ และเฉลยละเอียด.',
  additionalMetaTags: [
    {
      content: 'Monkey Everyday Co., Ltd.',
      name: 'author',
    },
    {
      content: '#00002D',
      name: 'theme-color',
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: 'MonkeyEveryday',
    images: [
      {
        alt: 'MonkeyEveryday',
        url: 'https://static.monkeyeveryday.com/client-file/images/og-thumbnail.jpg',
      },
    ],
    defaultImageHeight: 630,
    defaultImageWidth: 1200,
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}

export const DefaultSeo = (props: DefaultSeoProps) => {
  const mergedProps = merge(props, defaultSeoProps)
  return <NextDefaultSeo {...mergedProps} />
}
