import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  // styles: {
  //   global: {
  //     'html, body': {
  //       fontFamily: 'san-serif'
  //     }
  //   }
  // }
  fonts: {
    heading: "Rubik, san-serif",
    // body: "Montserrat san-serif"
  },
  colors: {
    bgDefault: "#2f2f2f",
    textDefault: {
      darker: "#8a8a8a",
      dark: "#9a9a9a",
      light: "#cacaca"
    }
  }
})

export default theme;