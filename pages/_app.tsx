import { AppProps } from "next/app"
import 'semantic-ui-css/semantic.min.css'
import Layout from "@components/Layout/Layout"
import { CartProvider } from "@store/Cart"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    
        <CartProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartProvider>
    
    )
  }