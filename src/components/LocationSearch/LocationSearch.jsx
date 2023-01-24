import { Container } from '../../components/Container';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';

const LocationSearch = ({ locations }) => {
  return (
    <>
      {locations?.map((location) => (
        <Container key={location.id} containerStyle='location__card'>
          <Title size='md'>{location.name}</Title>
          <Paragraph>{`type: ${location.type}`}</Paragraph>
          <Paragraph>{`dimension: ${location.dimension}`}</Paragraph>
          <Paragraph>{`created: ${location.created}`}</Paragraph>
        </Container>
      ))}
    </>
  );
};

export default LocationSearch;
