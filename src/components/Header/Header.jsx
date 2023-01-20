import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../utils/endPoints';
import { HEADER_ICON } from '../../utils/images';
import './_header.scss';

import { MenuNavBar } from '../MenuNavBar';
import { Container } from '../Container';
import { Title } from '../Title';
import { Image } from '../Image';

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);

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
            <MenuNavBar menuNavBarStyle='menu__header--navBar-a-items' />
          </Container>
        )}
      </Container>
      <MenuNavBar menuNavBarStyle='menu__header--navBar-a-items-desktop' />
    </Container>
  );
};

export default Header;
