import { useState } from 'react'

import { reactQueryClient, withApi } from '@app/core/services'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { throwFromResponse } from '@luminate/nextjs'
import { withSSRError } from '@luminate/nextjs'
import { mainContract } from '@luminate/rest'
import { getQueryKey } from '@luminate/ts-rest-query'
import { Button, FormItem, Input } from '@luminate/ui'

export const getServerSideProps = withApi(async (_, api) => {
  const result = await api.auth.me()
  if (result.status !== 200) throwFromResponse(result)

  return {
    props: {
      me: result.body,
    },
  }
})

const LoginPage = withSSRError<typeof getServerSideProps>(({ me }) => {
  const { mutateAsync: loginAsStudentMutation } = reactQueryClient.auth.loginAsStudent.useMutation()
  const { mutateAsync: loginAsTutorMutation } = reactQueryClient.auth.loginAsTutor.useMutation()
  const router = useRouter()
  const [userId, setUserId] = useState('student1')
  const queryClient = useQueryClient()

  const loginAsStudent = async () => {
    const response = await loginAsStudentMutation({ body: { userId } })
    document.cookie = `token=${response.body.token};path=/`
    console.log(document.cookie)
    router.replace(router.asPath)
    queryClient.invalidateQueries(getQueryKey(mainContract.auth.me))
  }

  const loginAsTutor = async () => {
    const response = await loginAsTutorMutation({ body: { userId } })
    document.cookie = `token=${response.body.token};path=/`
    console.log(document.cookie)
    router.replace(router.asPath)
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
        <Button onClick={loginAsStudent} fullWidth>
          Login as a student
        </Button>
        <Button onClick={loginAsTutor} fullWidth>
          Login as a Tutor
        </Button>
      </div>
      <div className="break-all">Data: {JSON.stringify(me)}</div>
    </form>
  )
})

export default LoginPage
