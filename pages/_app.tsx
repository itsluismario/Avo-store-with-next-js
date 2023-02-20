import { AppProps } from "next/app"
import 'semantic-ui-css/semantic.min.css'
import Layout from "@components/Layout/Layout"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
    )
  }