import React, { ChangeEvent } from 'react';

import { ContainerInput, InputField, LabelInput } from './styles';

interface InputProps {
  label?: string;
  id: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) => {
  return (
    <ContainerInput>
      {label && <LabelInput htmlFor={id}>{label}</LabelInput>}
      <InputField {...rest} id={id} />
    </ContainerInput>
  );
};

export default Input;
