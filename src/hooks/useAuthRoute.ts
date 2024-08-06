import { useAuthenticator } from '@aws-amplify/ui-react';

/**
 * Custom hook that checks if the user is authenticated and returns the authentication status.
 * @returns An object with the isAuthenticated property indicating if the user is authenticated.
 */
export const useAuthRoute = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  
  return {
    isAuthenticated: route === 'authenticated'
  };
};
