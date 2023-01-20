import { Link } from 'react-router-dom';
import { CHARACTER } from '../../utils/endPoints';
import { useReturnDataAPI } from '../../context/useReturnDataAPI';

import { Paragraph } from '../../components/Paragraph';
import { HomeArticleInfo } from '../HomeArticleInfo';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { Container } from '../Container';

const HeaderHome = () => {
  const { error } = useReturnDataAPI();

  return (
    <Container containerStyle='home-grid'>
      <Paragraph paragraphStyle='transparent'>TV show</Paragraph>
      <Title size='xl'>Rick and Morty</Title>

      <Paragraph>
        A series that follows the misadventures of a scientist, Rick Sanchez, and his easily influenced grandson, Morty, who spend their time between domestic life and space, time, and space travel.
        intergalactic
      </Paragraph>
      <Button type='button' buttonStyle='button button__header--home'>
        <Link to={CHARACTER.path}>EXPLORE</Link>
      </Button>

      {!error ? (
        <HomeArticleInfo />
      ) : (
        <Container containerStyle='home__article--error'>
          <Title size='sm'>Ups...</Title>
          <Paragraph>there was an error... Please update the application</Paragraph>
          <Paragraph>If the error persists, contact the developers</Paragraph>
        </Container>
      )}
    </Container>
  );
};

export default HeaderHome;
