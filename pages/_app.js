// this is the root component that will be used to wrap all the pages in the application

import { NotificationContextProvider } from '../store/notification-context'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta
            name='description'
            content='NextJS Events'
          />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  )
}
