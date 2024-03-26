import { withApi } from '@app/core/services'
import { PaymentPackgeSelectionLayout } from '@app/modules/payment'

import { throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'

export const getServerSideProps = withApi(async (context, api) => {
  const courseId = context.query.courseId as string
  const response = await api.payment.getPackageInfo({ query: { liveCourseId: courseId } })
  if (
    response.status === 400 &&
    typeof response.body === 'object' &&
    response.body !== null &&
    'code' in response.body &&
    response.body.code === 'MARKETPLACE_ALREADY_HAS_COURSE'
  ) {
    return {
      redirect: {
        permanent: false,
        destination: `/course/${courseId}`,
      },
    }
  }
  if (response.status !== 200) throwFromResponse(response)

  return {
    props: {
      packageInfo: response.body,
    },
  }
})

const PackagePage = withSSRError<typeof getServerSideProps>((props) => {
  return <PaymentPackgeSelectionLayout {...props.packageInfo} />
})

export default PackagePage
