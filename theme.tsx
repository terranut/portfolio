import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  xs:'320px',
  sm: '1024px',
  md: '1300px',
  lg: '1440px',
  xl: '1920px',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    black_light:'#505050',
    red: '#d32f2f',
    grey:'#505050',
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