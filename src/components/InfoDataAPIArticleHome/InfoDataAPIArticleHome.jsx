import { Container } from '../Container';
import { Paragraph } from '../Paragraph';

const InfoDataAPIArticleHome = ({ dataInfo, children }) => {
  return (
    <Container containerStyle='home__article--data-info'>
      <Paragraph>{dataInfo}</Paragraph>
      {children}
    </Container>
  );
};

export default InfoDataAPIArticleHome;
