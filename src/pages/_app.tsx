import type { AppProps } from 'next/app'
import React, { PropsWithChildren, useState } from 'react'
import '../../styles/globals.css'
import { Hydrate, QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
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

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps && pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        <AnimatePresence mode="wait" initial={false}>
          <AnimationLayout key={router.asPath}>
            <Component {...pageProps} />
          </AnimationLayout>
        </AnimatePresence>
      </Hydrate>
    </QueryClientProvider>
  )
}

const AnimationLayout = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 20, opacity: 0 }}
    transition={{
      duration: 0.4,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01]
    }}>
    {children}
  </motion.div>
)

export default MyApp
