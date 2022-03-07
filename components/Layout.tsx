import React, { ReactNode, useState,useEffect } from 'react'
import Head from 'next/head'
import { Center,Box,Flex } from '@chakra-ui/layout'
import { Menu } from "./Menu";
import { routes } from "../data/routes";
import { useRouter } from "next/router";

const routesMap = {
  '/blog':'Blog',
  '/contact':'Contacto',
  '/':'José Mendoza',
  '/projects':'Proyectos',
  '/about':'Sobre mi',
}

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const router = useRouter();
  const [currentRoute,setCurrentRoute] = useState('current')

  useEffect(() => {
     setCurrentRoute(routesMap[router.pathname])
  }, [router]);


  return(
    <Center height="100vh" flexDirection="column">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex bg="dark" width="100vw" height="100vh" display="flex"  flexDirection={{ xs: 'column', md: 'row' }}>
        <Box border="20px solid" borderColor="dark" bg="grey_light" width={{xs:'',md:'50vw'}} height="100%" order={{ xs: '1', md: '0' }} overflow="scroll">
          <Box bg="light" color="black" width={{xs:'100vw',md:'50vw'}} p="2" >{currentRoute}</Box>
            {children}
          </Box>
        <Menu routes={routes}/>
      </Flex>
    </Center>
  )
}

export default Layout
