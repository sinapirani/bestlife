import '../styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layout } from '../components/home/layout';
import {SessionProvider} from 'next-auth/react'


function MyApp({ Component, pageProps:{session,...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>

  )  
}

export default MyApp
