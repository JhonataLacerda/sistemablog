import { AppProps } from "next/app";
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from "../styles/theme";
import { AuthProvider } from "../context/AuthContext";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ParallaxProvider } from "react-scroll-parallax";



const  queryClient = new QueryClient()
function MyApp({Component, pageProps}: AppProps){
  return (
  <ParallaxProvider>
    <QueryClientProvider client={new QueryClient}>
    <ChakraProvider  theme={theme}>
      <AuthProvider>
        <Component {...pageProps}/>
      </AuthProvider>
    </ChakraProvider>
    </QueryClientProvider>

    </ParallaxProvider>

    
  )
}

export default MyApp