import { useTheme, useMediaQuery } from '@mui/material';

/**
 * Custom hook that provides responsive information.
 * @returns An object containing the `isMobile` boolean value indicating if the current screen size is mobile.
 */
export const useResponsive = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return { isMobile };
};