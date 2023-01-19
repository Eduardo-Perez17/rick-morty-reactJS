import { useReturnDataAPI } from '../../context/useReturnDataAPI';
import { HOME_IMAGE } from '../../utils/images';

import { InfoDataAPIArticleHome } from '../InfoDataAPIArticleHome';
import { Container } from '../Container';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';
import { Image } from '../Image';

const HeaderArticle = () => {
  const { infoTvShow, error } = useReturnDataAPI();

  return (
    <>
      {!error ? (
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
          <Image srcImage={HOME_IMAGE.homeImage} altImage={HOME_IMAGE.homeImage} />
        </Container>
      ) : (
        <Container containerStyle='home__article--error'>
          <Title size='sm'>Ups...</Title>
          <Paragraph>there was an error... Please update the application</Paragraph>
          <Paragraph>If the error persists, contact the developers</Paragraph>
        </Container>
      )}
    </>
  );
};

export default HeaderArticle;
