import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Authenticator, View, ThemeProvider as AmplifyThemeProvider } from '@aws-amplify/ui-react';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout/Layout';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import ProtectedRoute from './components/Route/ProtectedRoute';
import baseTheme, { amplifyTheme } from './styles/themes';
import { ThemeProvider } from '@mui/material';
import RecordsPage from './pages/RecordsPage';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  console.log('Custom theme:', baseTheme); 
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <AmplifyThemeProvider theme={amplifyTheme}>
        <Authenticator.Provider>
          <Router>
            <Layout>
              <View>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route 
                    path="/" 
                    element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    } 
                  />
                  <Route 
                    path="/records" 
                    element={
                      <ProtectedRoute>
                        <RecordsPage />
                      </ProtectedRoute>
                    } 
                  />
                </Routes>
              </View>
            </Layout>
          </Router>
        </Authenticator.Provider>
      </AmplifyThemeProvider>
    </ThemeProvider>
  );
};

export default App;
