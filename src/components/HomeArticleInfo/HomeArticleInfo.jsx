import { useReturnDataAPI } from '../../context/useReturnDataAPI';

import { InfoDataAPIArticleHome } from '../InfoDataAPIArticleHome';
import { Container } from '../Container';
import { Paragraph } from '../Paragraph';

const HomeArticleInfo = () => {
  const { infoTvShow } = useReturnDataAPI();
  return (
    <>
      <Container containerStyle='home-article'>
        <Paragraph>In this TV series you will find</Paragraph>
        {infoTvShow[0] && (
          <Container containerStyle='home__article--data-tv'>
            <InfoDataAPIArticleHome dataInfo={infoTvShow[0].infoEpisodie}>
              <Paragraph>Episodie</Paragraph>
            </InfoDataAPIArticleHome>
            <InfoDataAPIArticleHome dataInfo={infoTvShow[0].infoCharacter}>
              <Paragraph>Character</Paragraph>
            </InfoDataAPIArticleHome>
            <InfoDataAPIArticleHome dataInfo={infoTvShow[0].infoLocation}>
              <Paragraph>Location</Paragraph>
            </InfoDataAPIArticleHome>
          </Container>
        )}
      </Container>
    </>
  );
};

export default HomeArticleInfo;
