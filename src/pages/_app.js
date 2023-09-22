import 'bootstrap/dist/css/bootstrap.min.css'
import "react-phone-input-2/lib/style.css";
import 'aos/dist/aos.css'; 
import '@/styles/globals.css'
import '@/styles/photo-ai.scss'
import Head from 'next/head'
import { useEffect } from 'react';
import AOS from 'aos'; 
import Script from 'next/script';
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-252119773-1" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-252119773-1', {
                page_path: window.location.pathname,
                });
                `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
