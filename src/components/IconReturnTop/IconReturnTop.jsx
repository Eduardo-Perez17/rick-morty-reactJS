import { CHARACTER_IMAGE } from '../../utils/images';

import { Container } from '../Container';
import { Image } from '../Image';

const IconReturnTop = ({ hook }) => {
  return (
    <a href={hook}>
      <Container containerStyle='return-top'>
        <Image srcImage={CHARACTER_IMAGE.topReturn} altImage={CHARACTER_IMAGE.topReturn} />
      </Container>
    </a>
  );
};

export default IconReturnTop;
