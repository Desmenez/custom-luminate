import MonkeyEverydayLogo from '@app/assets/monkey-everyday-logo.svg'
import {
  faFacebook,
  faInstagram,
  faLine,
  faTiktok,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/pro-regular-svg-icons'
import NextLink from 'next/link'

import { FontAwesomeIcon } from '@luminate/ui'

// clone and modify from everyday repo
export const Footer = () => {
  return (
    <footer className="h-full border-t bg-gray-950 p-4 text-xs text-white laptop:p-12 laptop:text-base">
      <div className="grid h-full grid-cols-1 laptop:grid-cols-2 desktop:mx-auto desktop:max-w-[1040px]">
        <div className="flex flex-col justify-between space-y-4 laptop:mr-1 laptop:flex-row laptop:space-x-6 laptop:space-y-0 desktop:space-x-12">
          <div className="laptop:max-w-[17.5rem]">
            <FooterAddressInfoMainOffice />
          </div>
        </div>
        <div className="mt-4 flex shrink-0 flex-col items-center laptop:mt-0 laptop:h-full laptop:items-end">
          <div className="laptop:order-3">
            <FooterIconSocialMediaRow />
          </div>
          <div className="mt-4 laptop:order-1 laptop:mt-0">
            <MonkeyEverydayLogo className="h-12 laptop:h-16 w-[181px]" />
          </div>
          <div className="hidden flex-1 laptop:order-2 laptop:block" />
          <div className="mt-2 text-center laptop:order-4 laptop:text-right">
            <FooterTextPolicy />
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterAddressInfoMainOffice = () => {
  return (
    <div className="font-light flex flex-col items-start">
      <p className="font-bold">บริษัท มังกี้เอเวอรี่เดย์ จํากัด</p>
      <p>(สำนักงานใหญ่)</p>
      <p className="mt-1 laptop:mt-2">
        5 ซอยลาดพร้าว 101 ซอย 45 แขวงคลองจั่น เขตบางกะปิ กรุงเทพมหานคร 10240
      </p>

      <a href="tel:0949032323" className="mt-2 inline-flex items-center space-x-2 laptop:mt-4">
        <FontAwesomeIcon className="h-4 w-4 laptop:h-5 laptop:w-5" icon={faPhone} />
        <p>094 903 2323</p>
      </a>
      <a href="tel:0991697887" className="mt-1 inline-flex items-center space-x-2">
        <FontAwesomeIcon className="h-4 w-4 laptop:h-5 laptop:w-5" icon={faPhone} />
        <p>099 169 7887</p>
      </a>
      <a href="tel:0990354141" className="mt-1 inline-flex items-center space-x-2">
        <FontAwesomeIcon className="h-4 w-4 laptop:h-5 laptop:w-5" icon={faPhone} />
        <p>099 035 4141</p>
      </a>

      <a
        href="mailto:support@monkeyeveryday.com?subject=Contact customer support"
        className="mt-2 inline-flex items-center space-x-2 laptop:mt-4"
      >
        <FontAwesomeIcon className="h-4 w-4 laptop:h-5 laptop:w-5" icon={faEnvelope} />
        <p className="break-all">support@monkeyeveryday.com</p>
      </a>
    </div>
  )
}

const FooterIconSocialMediaRow = () => {
  return (
    <div className="select-none flex gap-x-6">
      <a href="https://www.facebook.com/MonkeyEverydayOfficial/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faFacebook} />
      </a>
      <a href="https://twitter.com/monkeyeveryday" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/monkeyeveryday.official/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faInstagram} />
      </a>
      <a
        href="https://www.youtube.com/channel/UC72k8jnlOUgjuGcMsrZHtAg"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faYoutube} />
      </a>
      <a href="https://www.tiktok.com/@monkeyeveryday.official" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faTiktok} />
      </a>
      <a href="https://line.me/R/ti/p/%40monkeyeveryday" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="h-6 w-6 cursor-pointer" icon={faLine} />
      </a>
    </div>
  )
}

const FooterTextPolicy = () => {
  return (
    <div className="select-none text-xs font-regular text-gray-6">
      <p className="tablet:mt-4">
        <NextLink
          href="https://monkeyeveryday.com/terms"
          className="hover:underline hover:text-primary-hover active:text-primary-active"
        >
          เงื่อนไขการใช้บริการ
        </NextLink>{' '}
        |{' '}
        <NextLink
          href="https://monkeyeveryday.com/terms/policy"
          className="hover:underline hover:text-primary-hover active:text-primary-active"
        >
          นโยบายความเป็นส่วนตัว
        </NextLink>{' '}
        |{' '}
        <NextLink
          href="https://monkeyeveryday.com/terms/payment"
          className="hover:underline hover:text-primary-hover active:text-primary-active"
        >
          เงื่อนไขการชำระเงินและการส่งเสริมการขาย
        </NextLink>
      </p>
      <p className="mt-1">
        Copyright © {new Date().getFullYear()} Monkey Everyday Co., Ltd. All rights reserved
      </p>
    </div>
  )
}
