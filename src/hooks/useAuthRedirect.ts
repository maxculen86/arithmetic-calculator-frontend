import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

/**
 * Custom hook that redirects the user to a specified path if they are authenticated.
 * @param redirectPath - The path to redirect the user to.
 */
export const useAuthRedirect = (redirectPath: string) => {
  const navigate = useNavigate();
  const { route } = useAuthenticator((context) => [context.route]);

  useEffect(() => {
    if (route === 'authenticated') {
      navigate(redirectPath);
    }
  }, [route, navigate, redirectPath]);
};
