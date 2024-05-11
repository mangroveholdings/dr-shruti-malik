import { Html, Head, Main, NextScript } from 'next/document'

const nodeEnv = process.env.NODE_ENV;
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {nodeEnv === 'production' && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "mac79jdbej");
          `,
              }}
            />
          </>
        )}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
