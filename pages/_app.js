import React from 'react';
import { ContextProvider } from '../components/hooks/ContextProvider';

const App = ({ Component, pageProps }) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
);

export default App;
