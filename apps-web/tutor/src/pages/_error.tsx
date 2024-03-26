import { NextPage } from 'next'

import { ErrorPage } from '@luminate/nextjs'

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return <ErrorPage statusCode={statusCode} message={getErrorMessage(statusCode)} />
}

function getErrorMessage(statusCode: number) {
  if (statusCode === 404) {
    return 'ขออภัย ไม่พบหน้าที่ต้องการ'
  }
  return 'ขออภัย เกิดข้อผิดพลาดบางอย่าง'
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode: statusCode ?? 500 }
}

export default Error
