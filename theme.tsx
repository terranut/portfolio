import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  xs:'320px',
  sm: '768px',
  md: '1368px',
  lg: '1920px',
  xl: '2000px',
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