import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 450px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoLogin = styled.img`
  width: 50%;
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 65px;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.color};
  border: 0;
  transition: all 0.25s;
  font-size: 16px;
  font-weight: 700;
  margin: 10px 0px;
  border-radius: 2px;

  &:hover {
    background: ${({ theme: { colors } }) => darken(0.02, colors.primary)};
  }
`;
