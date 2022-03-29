import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/Layout";
import "../styles/global.css";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
