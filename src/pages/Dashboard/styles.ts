import styled from 'styled-components';

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.light};
`;
