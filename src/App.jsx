import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import Main from './components/Main'

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Main  />
    </ChakraProvider>
  )
}