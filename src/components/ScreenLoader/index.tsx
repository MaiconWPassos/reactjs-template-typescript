import React, { useContext } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

const ScreenLoader: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Container>
      <ClipLoader size={50} color={colors.primary} loading={true} />
    </Container>
  );
};

export default ScreenLoader;
