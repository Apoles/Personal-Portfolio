import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../../gtag';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
