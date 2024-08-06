import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <MainContent>{children}</MainContent>
  </>
);

export default Layout;
