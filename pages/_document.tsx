import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (MyApp: FC<AppProps>) => (props: any) =>
            sheet.collectStyles(<MyApp {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
