import { Link } from 'react-router-dom';
import { CHARACTER } from '../../utils/endPoints';

import { Paragraph } from '../../components/Paragraph';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';

const HeaderHome = () => {
  return (
    <>
      <Paragraph paragraphStyle='transparent'>TV show</Paragraph>
      <Title size='xl'>Rick and Morty</Title>
      <Paragraph>
        A series that follows the misadventures of a scientist, Rick Sanchez, and his easily influenced grandson, Morty, who spend their time between domestic life and space, time, and space travel.
        intergalactic
      </Paragraph>
      <Button type='button' buttonStyle='button button__header--home'>
        <Link to={CHARACTER.path}>EXPLORE</Link>
      </Button>
    </>
  );
};

export default HeaderHome;
