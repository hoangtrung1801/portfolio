import { Box, ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "../app/store";
import Layout from "../components/Layout";
import "../styles/global.css";
import theme from "../theme";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/800.css";
import "@fontsource/rubik/900.css";
import "@fontsource/rubik-mono-one/400.css";
import "@fontsource/zen-kaku-gothic-antique/300.css"
import "@fontsource/zen-kaku-gothic-antique/400.css"
import "@fontsource/zen-kaku-gothic-antique/500.css"
import "@fontsource/zen-kaku-gothic-antique/700.css"
import "@fontsource/zen-kaku-gothic-antique/900.css"
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      loading && setLoading(false);
    }, 1000);
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Provider store={store}>
        {loading ? (
          <Box width="100vw" height="100vh" bgColor="black"></Box>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
        )}
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
