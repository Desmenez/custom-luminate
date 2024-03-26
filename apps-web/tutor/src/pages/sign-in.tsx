import { FormEvent, useId } from 'react'

import ShadowImage from '@app/assets/shadow.svg?url'
import TutorImage from '@app/assets/tutor.png'
import { CourseTypeChip } from '@app/components/course-type-chip'
import { GradientBackground } from '@app/components/gradient-background'
import { reactQueryClient, withApi } from '@app/core/services'
import jwt_decode from 'jwt-decode'
import NextImage from 'next/image'
import { useRouter } from 'next/router'
import { setCookie } from 'nookies'

import { throwFromResponse, withSSRError } from '@luminate/nextjs'
import { Button, Input, toast } from '@luminate/ui'

const LoginPage = withSSRError<typeof getServerSideProps>(() => {
  return (
    <div className="relative w-full flex-1 bg-bg-main-dkt">
      <GradientBackground />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-16 lg:flex-row lg:px-8 lg:pl-16">
        <div className="z-10 mx-4 flex w-full max-w-[412px] flex-col lg:w-full">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-white xl:text-xl">MonkeyEveryday</h2>
            <CourseTypeChip type="LIVE" />
          </div>
          <h1 className="mb-4 text-3xl font-semibold text-white xl:text-4xl">ระบบจัดการการสอนสด</h1>
          <p className="mb-10 text-lg text-gray-5">
            ระบบจัดการห้องเรียนสอนสด
            <br />
            ผ่านระบบ Live Streaming
          </p>
          <div className="w-full h-px bg-white/20" />
          <LoginForm />
          <div className="w-full h-px bg-white/20" />
          <div className="mt-12 flex justify-center gap-1">
            <div className="font-semibold text-yellow-400">ยังไม่มีบัญชี?</div>
            <a
              className="text-yellow-400 underline"
              href={'https://web.facebook.com/MonkeyEverydayOfficial/?_rdc=1&_rdr'}
              target="_blank"
              rel="noreferrer"
            >
              ติดต่อเจ้าหน้าที่
            </a>
          </div>
        </div>
        <div className="z-10 w-full flex-1 py-5 xl:pl-8">
          <NextImage className="w-full" src={TutorImage} alt="" />
        </div>
        <div className="absolute -left-1/2 bottom-0 right-0 lg:left-[15%]">
          <NextImage className="w-full" src={ShadowImage} alt="" />
        </div>
      </div>
    </div>
  )
})
export default LoginPage

function LoginForm() {
  const router = useRouter()
  const loginToastId = useId()

  const { mutate: mutateLogin, isLoading } =
    reactQueryClient.auth.loginTutorWithPassword.useMutation({
      onSuccess: (data) => {
        const { token } = data.body
        const decodedToken = jwt_decode<{ exp: number }>(token)

        // TODO: refactor cookie management logic
        setCookie(null, 'tutorToken', token, {
          expires: new Date(decodedToken.exp * 1000),
          path: '/',
        })

        window.location.replace((router.query.from as string) ?? '/')

        toast.success('เข้าสู่ระบบสำเร็จ', { id: loginToastId })
      },
      onError: () => {
        // TODO: proper error handling
        toast.error('ชื่อผู้ใช้หรือรหัสผ่านผิดพลาด', { id: loginToastId })
      },
    })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.target as HTMLFormElement)
    const username = data.get('username') as string
    const password = data.get('password') as string
    mutateLogin({ body: { username, password } })
  }

  return (
    <form className="py-10" onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input name="username" placeholder="ชื่อผู้ใช้งาน" type="text" disabled={isLoading} />
      </div>
      <div className="mb-6">
        <Input name="password" placeholder="รหัสผ่าน" type="password" disabled={isLoading} />
      </div>
      <Button disabled={isLoading} fullWidth type="submit">
        {isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
      </Button>
    </form>
  )
}

LoginPage.hideFooter = true

export const getServerSideProps = withApi(async (context, api) => {
  const me = await api.auth.me()
  if (me.status !== 200) throwFromResponse(me)

  if (me.body !== null) {
    const destination = (context.query.from as string) ?? '/'
    return {
      redirect: {
        permanent: false,
        destination,
      },
    }
  }

  return {
    props: {},
  }
})
