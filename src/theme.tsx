import { ComponentStyleConfig, extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config
  // styles: {
  //   global: {
  //     body: {
  //       // bg: 'black'
  //       // bg: 'bgDefault'
  //     }
  //   }
  // },
  // fonts: {
  //   // heading: "Rubik, san-serif",
  //   // body: "Montserrat san-serif"
  // },
  // colors: {
  //   bgDefault: "#2f2f2f",
  //   textDefault: {
  //     darker: "#8a8a8a",
  //     dark: "#9a9a9a",
  //     light: "#cacaca"
  //   }
  // },
  // components: {
  //   Heading
  // }
})

export default theme;