import { CustomNextPage } from '@luminate/nextjs'
import { Button, toast } from '@luminate/ui'

const Page: CustomNextPage = () => {
  return (
    <div className="flex items-start gap-2 flex-col">
      <Button onClick={() => toast.loading('Loading', { duration: 50000 })}>Loading</Button>
      <Button onClick={() => toast.success('Success', { duration: 50000 })}>Success</Button>
      <Button onClick={() => toast.error('Error', { duration: 50000 })}>Error</Button>
      <Button onClick={() => toast('Info', { duration: 50000 })}>Info</Button>
      <Button onClick={() => toast('Long Long Long Long Long Long Long Text', { duration: 50000 })}>
        Long Text
      </Button>
      <Button
        onClick={() =>
          toast.promise(
            new Promise((resolve, reject) =>
              setTimeout(() => {
                Math.random() > 0.5 ? resolve(false) : reject(true)
              }, 2000)
            ),
            {
              loading: 'Loading',
              success: 'Success',
              error: 'Error',
            }
          )
        }
      >
        Promise
      </Button>
    </div>
  )
}

Page.hideNavbar = false
Page.hideFooter = false

export default Page
