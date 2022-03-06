import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  xs:'10em',
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    red: '#d32f2f',
    grey_light:'#fafafa',
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
       background:"black"
      }
    }
  },
})

export default theme