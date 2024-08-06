import React from 'react';
import { AppBar, Toolbar, Typography, Button, useTheme } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

/**
 * Header component for the arithmetic calculator frontend.
 * Renders the application header with navigation links and sign-in/sign-out functionality.
 */
const Header: React.FC = () => {
  const navigate = useNavigate();
  const { route, signOut } = useAuthenticator((context) => [context.route, context.signOut]);
  const theme = useTheme();

  const handleSignOut = () => {
    signOut();
    navigate('/login');
  };

  const isLoggedIn = route === 'authenticated';

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Arithmetic Calculator
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        {isLoggedIn ? (
          <>
            <Button color="inherit" component={RouterLink} to="/records">
              Records
            </Button>
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;