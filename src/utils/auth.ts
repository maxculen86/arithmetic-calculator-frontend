import { fetchAuthSession } from '@aws-amplify/auth';

export async function getAuthToken(): Promise<string> {
  const { tokens } = await fetchAuthSession();
  const token = tokens?.idToken?.toString();
  
  if (!token) {
    throw new Error('No authentication token available');
  }
  
  return token;
}