import { ComponentStyleConfig, extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
}

const theme = extendTheme({
  config,
  fonts: {
    heading: 'Zen Kaku Gothic Antique, Rubik, san-serif',
    body: 'Zen Kaku Gothic Antique, Rubik, san-serif'
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              backgroundColor: 'white',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top'
            },
          },
        },
      },
    },
  },
  // styles: {
  //   global: {
  //     body: {
  //       // bg: 'black'
  //       // bg: 'bgDefault'
  //     }
  //   }
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