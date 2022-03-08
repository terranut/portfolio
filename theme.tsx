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
    red: '#d32f2f',
    white:'#fafafa',
    primary:'#5c6bc0',
    light:'#8e99f3',
    dark:'#26418f',

    grey1:"#212121",
    grey2:"#424242",
    grey3:"#37474f",
    grey4:"#263238",
    grey5:"#252525",
    grey6:"#2b2b2b",
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
        color:'#16161D'
      }
    }
  },
})

export default theme