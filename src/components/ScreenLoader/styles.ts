import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;
