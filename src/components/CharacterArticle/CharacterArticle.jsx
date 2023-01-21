import { Container } from '../Container';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';
import { Image } from '../Image';

const CharacterArticle = ({ characterValue }) => {
  return (
    <>
      {characterValue && (
        <Container containerStyle='character__card'>
          <Container containerStyle='character__card--header'>
            <Image srcImage={characterValue.image} altImage={characterValue.image} />
          </Container>
          <Container containerStyle='character__card--article'>
            <Container containerStyle='character__card--article-header'>
              <Title size='md'>{characterValue.name}</Title>
              <Paragraph>{characterValue.status}</Paragraph>
            </Container>
            <Paragraph>{`Species: ${characterValue.species}`}</Paragraph>
            <Paragraph>{`Type: ${characterValue.type ? characterValue.type : 'N/A'}`}</Paragraph>
            <Paragraph>{`Gender: ${characterValue.gender}`}</Paragraph>
            <Paragraph>{`Origin: ${characterValue.origin.name}`}</Paragraph>
            <Paragraph>{`Location: ${characterValue.location.name}`}</Paragraph>
          </Container>
        </Container>
      )}
    </>
  );
};

export default CharacterArticle;
