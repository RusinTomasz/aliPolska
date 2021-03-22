import "../styles/globals.css";
import { FC } from "react";
import { AppProps } from "next/dist/next-server/lib/router/router";

/* Redux */
import { wrapper } from "../store/store";
import { Provider } from "react-redux";
import store from "../store/store";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
