import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'
import config from '@/config'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  console.log(config.apiURL)
  return <Component {...pageProps} />
}
