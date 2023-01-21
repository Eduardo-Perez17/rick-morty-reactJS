import './HeaderSearch.scss';

import { Form } from '../Form';
import { Container } from '../Container';
import { Button } from '../Button';
import { Title } from '../Title';
import { Input } from '../Input';

const HeaderSearch = ({ title, placheholder, name, value, onChangeEvent, onEventClick }) => {
  return (
    <Container containerStyle='header__search'>
      <Title size='md'>Rick and Morty - {title}</Title>
      <Container containerStyle='header__search--form'>
        <Form eventOnChange={onEventClick}>
          <Input typeInput='text' placeholderInput={placheholder} nameInput={name} valueInput={value} eventInputOnChange={onChangeEvent} />
          <Button buttonType='button' buttonStyle='button button__header--search' buttonEventOnClick={onEventClick}>
            SEARCH
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default HeaderSearch;
