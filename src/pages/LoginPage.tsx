import React from 'react';
import { Box, Grid } from '@mui/material';
import Login from '../components/Auth/Login';
import PageContainer from '../components/Layout/PageContainer';
import { useResponsive } from '../hooks/useResponsive';
import PageTitle from '../components/Typhography/PageTitle';

const LoginPage: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <PageContainer>
      {!isMobile && <Grid item xs={6} />}
      <Box sx={{ width: '100%', gap: '60px' }}>
        <PageTitle>Welcome to Challenge</PageTitle>
        <Login />
      </Box>
    </PageContainer>
  );
};

export default LoginPage;