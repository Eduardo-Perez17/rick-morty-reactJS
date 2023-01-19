import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME, URL_NAVBAR } from '../../utils/endPoints';
import { HEADER_ICON } from '../../utils/images';
import './_header.scss';

import { Container } from '../Container';
import { Title } from '../Title';
import { Image } from '../Image';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    console.log('este es el toggle del menu del header');
    setMenuToggle(!menuToggle);
  };

  return (
    <Container containerStyle='menu__header'>
      <Link to={HOME.path}>
        <Title size='md'>Rick and Morty API</Title>
      </Link>
      <Container containerStyle='menu__header--navBar'>
        <Image srcImage={HEADER_ICON.menuIcon} altImage={HEADER_ICON.menuIcon} imageEventClick={handleMenuToggle} />
        {menuToggle && (
          <Container containerStyle='menu__header--navBar-a'>
            <Image srcImage={HEADER_ICON.closeIcon} altImage={HEADER_ICON.closeIcon} imageEventClick={handleMenuToggle} />

            <Container containerStyle='menu__header--navBar-a-items'>
              {URL_NAVBAR.map((url) => (
                <React.Fragment key={url.name}>
                  <Link to={url.path}>{url.name}</Link>
                </React.Fragment>
              ))}
            </Container>
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Header;
