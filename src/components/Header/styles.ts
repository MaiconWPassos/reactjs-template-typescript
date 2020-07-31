import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerHeader = styled.header`
  padding: 5px 10px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  img {
    height: 70px;
  }
  div.logo {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    h4 {
      font-family: 'Ubuntu', sans-serif;
      font-size: 35px;
      margin-left: 10px;
      span {
        color: ${({ theme: { colors } }) => colors.primary};
      }
    }
  }
  div.session {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    a > img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      margin: 0px 10px;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  ${({ theme: { colors } }) => css`
    color: ${colors.color};
    span {
      color: ${colors.primary};
      transition: 0.2s;
      &:hover {
        color: ${colors.secondary};
      }
    }
  `}
  svg {
    margin-left: 10px;
  }
  img {
    height: 70px;
    margin: 0px 10px;
  }
`;

export const ButtonLogout = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  background: transparent;
  border: 0;
  padding: 20px 0px;
  ${({ theme: { colors } }) => css`
    color: ${colors.color};
    span {
      color: ${colors.primary};
      transition: 0.2s;
      &:hover {
        color: ${colors.secondary};
      }
    }
  `}
  svg {
    margin-left: 10px;
  }
  img {
    height: 70px;
    margin: 0px 10px;
  }
`;
