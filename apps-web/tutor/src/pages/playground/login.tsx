import { useState } from 'react'

import { reactQueryClient, withApi } from '@app/core/services'
import { useQueryClient } from '@tanstack/react-query'

import { throwFromResponse, withSSRError } from '@luminate/nextjs'
import { mainContract } from '@luminate/rest'
import { getQueryKey } from '@luminate/ts-rest-query'
import { Button, FormItem, Input } from '@luminate/ui'

export const getServerSideProps = withApi(async (_, api) => {
  const response = await api.auth.me()

  if (response.status !== 200) throwFromResponse(response)

  if (response.body !== null) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { headers, ...rest } = response

  return {
    props: {
      me: rest,
    },
  }
})

const LoginPage = withSSRError<typeof getServerSideProps>(({ me }) => {
  const { mutateAsync: loginAsTutorMutation } = reactQueryClient.auth.loginAsTutor.useMutation()
  const [userId, setUserId] = useState('tutor1')
  const queryClient = useQueryClient()
  const { data = me } = reactQueryClient.auth.me.useQuery()

  const loginAsTutor = async () => {
    const response = await loginAsTutorMutation({ body: { userId } })
    document.cookie = `tutorToken=${response.body.token};path=/`
    console.log(document.cookie)
    queryClient.invalidateQueries(getQueryKey(mainContract.auth.me))
  }

  return (
    <form
      className="flex flex-col gap-2 items-center justify-center mt-4 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormItem className="w-full">
        <Input placeholder="Username" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </FormItem>
      <div className="flex flex-row gap-2 w-full">
        <Button onClick={loginAsTutor} fullWidth>
          Login as a Tutor
        </Button>
      </div>
      <div className="break-all">Data: {JSON.stringify(data?.body)}</div>
    </form>
  )
})

export default LoginPage
