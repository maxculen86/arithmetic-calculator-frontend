import React from 'react';
import { Container, Box } from '@mui/material';

interface MainContentProps {
  children: React.ReactNode;
}

/**
 * MainContent component.
 * 
 * @component
 * @param {React.ReactNode} children - The content to be rendered inside the MainContent component.
 * @returns {React.ReactElement} The rendered MainContent component.
 */
const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
    <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        pt: '50px'
      }}>
        {children}
      </Box>
    </Container>
  </Box>
);

export default MainContent;
