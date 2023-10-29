import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Header from '../header';
import Footer from '../footer';
import theme from '../../assets/theme/';
import footerRoutes from '../footer/footer.routes';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        {children}
        <Footer content={footerRoutes} />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
