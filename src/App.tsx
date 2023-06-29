import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={routers} />;
    </ChakraProvider>
  );
}

export default App;
