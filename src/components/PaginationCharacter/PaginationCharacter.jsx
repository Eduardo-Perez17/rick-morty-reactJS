import { Button } from '../Button';
import { Container } from '../Container';

const PaginationCharacter = ({ next, prev, onPrevious, onNext }) => {
  const handlePrevoius = () => onPrevious();
  const handleNext = () => {
    onNext();
  };

  return (
    <Container containerStyle='pagination__button'>
      {prev && (
        <Button buttonStyle='button' buttonEventOnClick={handlePrevoius}>
          previous
        </Button>
      )}
      {next && (
        <Button buttonStyle='button' buttonEventOnClick={handleNext}>
          next
        </Button>
      )}
    </Container>
  );
};

export default PaginationCharacter;
