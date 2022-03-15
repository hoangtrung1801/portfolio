import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const Heading: ComponentStyleConfig = {
  baseStyle: {
    marginBottom: '12px'
  }
}

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'black'
      }
    }
  },
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
  },
  components: {
    Heading
  }
})

export default theme;