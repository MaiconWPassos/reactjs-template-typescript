import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
}

export default App;
