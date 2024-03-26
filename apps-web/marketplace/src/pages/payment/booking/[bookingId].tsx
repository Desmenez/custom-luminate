import { withApi } from '@app/core/services'
import { PaymentMethodLayout } from '@app/modules/payment/layout/payment-method'

import { PaymentStatus } from '@luminate/database'
import { NotFoundError, throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'

export const getServerSideProps = withApi(async (context, api) => {
  const bookingId = context.query.bookingId as string
  const response = await api.payment.getBooking({ params: { bookingId: bookingId } })
  if (response.status !== 200) throwFromResponse(response)
  if (response.body === null) throw new NotFoundError()

  const booking = response.body
  const successCharge = booking.charges.find((charge) => charge.status === PaymentStatus.SUCCESS)
  if (successCharge) {
    return {
      redirect: {
        permanent: false,
        destination: `/payment/status/${successCharge.id}`,
      },
    }
  }

  return {
    props: {
      booking,
    },
  }
})

const PaymentMethodPage = withSSRError<typeof getServerSideProps>((props) => {
  return <PaymentMethodLayout booking={props.booking} />
})

export default PaymentMethodPage
