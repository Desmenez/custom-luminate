import { ReactElement } from 'react'

import { Footer } from '@app/components/footer'
import { Navbar } from '@app/components/navbar'
import { ibmPlexSans, ibmPlexSansThai } from '@app/fonts'
import { LoadingProvider } from '@app/utils/loading'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CustomAppProps } from '@luminate/nextjs'
import { DefaultSeo, LocalBusinessJsonLd } from '@luminate/seo'
import { Toaster } from '@luminate/ui/handmade'
import '@luminate/ui/style.css'

import './style.css'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
})

export default function App({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.layout || ((page: ReactElement) => page)

  return (
    <LoadingProvider>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSans.style.fontFamily}, ${ibmPlexSansThai.style.fontFamily};
        }
      `}</style>
      <DefaultSeo dangerouslySetAllPagesToNoIndex={true} dangerouslySetAllPagesToNoFollow={true} />
      <LocalBusinessJsonLd />
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <main className="w-full min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col">
            {!Component.hideNavbar && <Navbar />}
            {getLayout(<Component {...pageProps} />)}
          </div>
          {!Component.hideFooter && <Footer />}
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </LoadingProvider>
  )
}
