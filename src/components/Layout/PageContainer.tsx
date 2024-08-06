import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface PageContainerProps extends BoxProps {
  children: React.ReactNode;
}

/**
 * A container component for pages.
 *
 * @component
 * @param {React.ReactNode} children - The content to be rendered inside the container.
 * @param {PageContainerProps} props - Additional props for the PageContainer component.
 * @returns {React.ReactElement} The rendered PageContainer component.
 */
const PageContainer: React.FC<PageContainerProps> = ({ children, ...props }) => (
  <Box
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '60px',
      ...props.sx
    }}
    {...props}
  >
    {children}
  </Box>
);

export default PageContainer;
