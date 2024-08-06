import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface PageTitleProps extends TypographyProps {
  children: React.ReactNode;
}

/**
 * Renders a page title with specified props.
 *
 * @component
 * @param {PageTitleProps} props - The props for the PageTitle component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the PageTitle component.
 * @param {object} props.sx - The custom styling for the PageTitle component.
 * @returns {JSX.Element} The rendered PageTitle component.
 */
const PageTitle: React.FC<PageTitleProps> = ({ children, ...props }) => (
  <Typography
    variant="h4"
    component="h1"
    color="primary"
    textAlign="center"
    sx={{ maxWidth: '100%', marginBottom: '50px', ...props.sx }}
    {...props}
  >
    {children}
  </Typography>
);

export default PageTitle;
