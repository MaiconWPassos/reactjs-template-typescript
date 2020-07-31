import React, { useContext, useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { ContainerLogin, FormLogin, LogoLogin, ButtonSubmit } from './styles';

import Input from '~/components/Input';

import logo from '~/assets/logo.png';
import { Context } from '~/context/AuthContext';

import { toast } from 'react-toastify';
import history from '~/services/history';
import ScreenLoader from '~/components/ScreenLoader';

const Login: React.FC = () => {
  const { authenticated, handleLogin } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (authenticated) {
      history.push('/dashboard');
    }
  }, [authenticated]);

  const handleSubmit = async (event: FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const { email, password } = formData;
    const message = await handleLogin(email.trim(), password);

    if (message) {
      toast.error(message);
    }
    setLoading(false);
  };

  if (loading) return <ScreenLoader />;
  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit}>
        <LogoLogin src={logo} alt="logo" />

        <Input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <ButtonSubmit>Entrar</ButtonSubmit>
      </FormLogin>
    </ContainerLogin>
  );
};

export default Login;
