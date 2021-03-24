import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { createGlobalStyle } from "styled-components";

/* Redux */
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import store from "../store/store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: purple;
  }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
