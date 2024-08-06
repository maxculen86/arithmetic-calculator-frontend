import React from 'react';
import { View, Heading, Button } from '@aws-amplify/ui-react';

interface AuthenticatedViewProps {
  signOut?: () => void;
}

/**
 * Renders the authenticated view.
 * @param {Object} props - The component props.
 * @param {Function} props.signOut - The sign out function.
 * @returns {JSX.Element} - The rendered component.
 */
const AuthenticatedView: React.FC<AuthenticatedViewProps> = ({ signOut }) => (
  <View>
    <Heading level={4}>You are logged in!</Heading>
    {signOut && <Button onClick={signOut}>Sign out</Button>}
  </View>
);

export default AuthenticatedView;