import React from 'react'

import { ChakraProvider} from '@chakra-ui/react'

import Main from './components/Main'
export default function App(){
return (
    <ChakraProvider>
 
      <Main  />
 
    </ChakraProvider>
  )
}