import './_home.scss';

import { Container } from '../../components/Container';
import { HeaderHome } from '../../components/HeaderHome';
import { HeaderArticle } from '../../components/HeaderArticle';

const Home = () => {
  return (
    <Container containerStyle='home'>
      <HeaderHome />
      <HeaderArticle />
    </Container>
  );
};

export default Home;
