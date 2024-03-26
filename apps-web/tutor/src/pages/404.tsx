import { ErrorPage } from '@luminate/nextjs'

function NotFoundPage() {
  return <ErrorPage statusCode={404} message="ขออภัย ไม่พบหน้าที่ต้องการ" />
}

export default NotFoundPage
