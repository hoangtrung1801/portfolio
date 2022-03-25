// import { extendTheme } from '@chakra-ui/react'
// import { createBreakpoints } from '@chakra-ui/theme-tools'

// const fonts = { mono: `'Menlo', monospace` }

// const breakpoints = createBreakpoints({
//   sm: '40em',
//   md: '52em',
//   lg: '64em',
//   xl: '80em',
// })

// const theme = extendTheme({
//   colors: {
//     black: '#16161D',
//   },
//   fonts,
//   breakpoints,
// })

// export default theme

import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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