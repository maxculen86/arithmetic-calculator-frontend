import React from 'react';
import { Authenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AuthenticatedView from './AuthenticatedView';
import { useAuthRedirect } from '../../hooks/useAuthRedirect';

/**
 * Renders the login component.
 * 
 * @returns The rendered login component.
 */
const Login: React.FC = () => {
  useAuthRedirect('/');

  return (
    <View width="100%">
      <Authenticator>
        {({ signOut }) => <AuthenticatedView signOut={signOut} />}
      </Authenticator>
    </View>
  );
};

export default Login;