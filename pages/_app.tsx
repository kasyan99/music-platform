import '@/styles/global.css'
import { Progress } from 'antd'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from 'store/store'

const store = setupStore()

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  //show progress if page start changing
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true)
    })
    router.events.on('routeChangeError', () => {
      setIsLoading(false)
    })
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false)
    })

    return () => {
      router.events.off('routeChangeStart', () => {
        setIsLoading(true)
      })
      router.events.off('routeChangeError', () => {
        setIsLoading(false)
      })
      router.events.off('routeChangeComplete', () => {
        setIsLoading(false)
      })
    }

  }, [router])
  return <Provider store={store}>
    {isLoading &&
      <Progress percent={100} status="active" showInfo={false} style={{ position: 'fixed', top: 50, left: 0, right: 0, zIndex: 100 }} strokeLinecap='square' />
    }
    <Component {...pageProps} />
  </Provider>
}
