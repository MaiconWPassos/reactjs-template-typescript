import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '~/styles/global';
import theme from '~/styles/theme';
import { AuthProvider } from './context/AuthContext';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
