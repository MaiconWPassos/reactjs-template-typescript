import React, { useEffect, ReactNode } from 'react';
import { Container } from './styles';
import Header from '~/components/Header';

interface LayoutProps {
  title: string;
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
