import CustomNProgress from "components/CustomNProgress";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <CustomNProgress />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
