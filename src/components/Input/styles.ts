import styled from 'styled-components';

export const ContainerInput = styled.fieldset`
  margin: 10px 0px;
  border: 0;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0px;
`;

export const InputField = styled.input`
  padding: 30px;
  height: 60px;
  width: 100%;
  color: ${({ theme: { colors } }) => colors.color};
  background: ${({ theme: { colors } }) => colors.light};
  border: ${({ theme: { colors } }) => colors.background};
  border-radius: 2px;
  font-size: 16px;
  font-weight: 500;
  border: 2.5px solid ${({ theme: { colors } }) => colors.light};
  transition: 0.25s;
  font-weight: 500;

  &::placeholder {
    font-weight: 700;
    font-size: 16px;
  }

  &:focus,
  &:active {
    border-color: ${({ theme: { colors } }) => colors.primary};
  }
`;
