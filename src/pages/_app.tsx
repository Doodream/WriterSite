import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import '../../styles/globals.css'
import { initializeApp } from 'firebase/app'
import * as process from 'process'
import { Hydrate, QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '@/components/common/Layout'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

function MyApp({ Component, pageProps }: AppProps) {
  const queryCache = new QueryCache()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache,
        defaultOptions: {
          queries: {
            staleTime: 0
          }
        }
      })
  )
  const app = initializeApp(firebaseConfig)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps && pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
