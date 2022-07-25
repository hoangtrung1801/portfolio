import { Head, Html, Main, NextScript } from "next/document";

export default function Document(props) {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                    rel="stylesheet"
                />

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <body className="prose-headings:font-headings">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
