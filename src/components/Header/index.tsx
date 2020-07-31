import React, { useContext } from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '~/assets/logo.png';
import { Context } from '~/context/AuthContext';

import { ContainerHeader, LinkHeader, ButtonLogout } from './styles';

const Header: React.FC = () => {
  const { authenticated, user, handleLogout } = useContext(Context);
  return (
    <ContainerHeader>
      <div className="logo">
        <LinkHeader to="/dashboard">
          <img src={logo} alt="logo" />
        </LinkHeader>
      </div>
      <div className="session">
        {authenticated && (
          <ButtonLogout onClick={handleLogout}>
            {user?.name}
            <FiLogIn />
          </ButtonLogout>
        )}
      </div>
    </ContainerHeader>
  );
};

export default Header;
