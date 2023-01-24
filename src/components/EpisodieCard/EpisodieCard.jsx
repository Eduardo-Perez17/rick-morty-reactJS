import { Container } from '../Container';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';

const EpisodieCard = ({ episodes }) => {
  return (
    <Container containerStyle='episodie__card'>
      <Container containerStyle='episodie__card--header'>
        <Title size='lg'>{episodes.id}</Title>
        <Paragraph>EPISODE</Paragraph>
      </Container>
      <span></span>
      <Container containerStyle='episodie__card--article'>
        <Paragraph>{`Name: ${episodes.name}`}</Paragraph>
        <Paragraph>{`Air date: ${episodes.air_date}`}</Paragraph>
        <Paragraph>{`Season: ${episodes.episode}`}</Paragraph>
      </Container>
    </Container>
  );
};

export default EpisodieCard;
