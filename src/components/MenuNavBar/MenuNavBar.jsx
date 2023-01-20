import React from 'react';
import { Link } from 'react-router-dom';
import { URL_NAVBAR } from '../../utils/endPoints';

import { Container } from '../Container';

const MenuNavBar = ({ menuNavBarStyle }) => {
  return (
    <Container containerStyle={menuNavBarStyle}>
      {URL_NAVBAR.map((url) => (
        <React.Fragment key={url.name}>
          <Link to={url.path}>{url.name}</Link>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default MenuNavBar;
