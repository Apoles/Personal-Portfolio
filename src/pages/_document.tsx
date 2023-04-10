import { GA_TRACKING_ID } from 'gtag';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
