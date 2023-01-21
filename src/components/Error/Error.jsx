import { CHARACTER_IMAGE } from '../../utils/images';

import { Container } from '../Container';
import { Paragraph } from '../Paragraph';
import { Image } from '../Image';

const Error = ({ errorText, children }) => {
  return (
    <Container containerStyle='error__data__API main__error'>
      <Container containerStyle='header__error'>
        <Image srcImage={CHARACTER_IMAGE.iconError} altImage={CHARACTER_IMAGE.iconError} />
        {children}
      </Container>
      <Paragraph>{errorText}</Paragraph>
    </Container>
  );
};

export default Error;
