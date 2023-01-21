import { useState } from 'react';
import { useCharacterSearch } from '../../context/useCharacterSearch';
import { useReturnDataAPI } from '../../context/useReturnDataAPI';
import { usePaginationCharacters } from '../../context/usePaginationCharacters';

import './character.scss';

import { PaginationCharacter } from '../../components/PaginationCharacter';
import { CharactersSearch } from '../../components/CharactersSearch';
import { IconReturnTop } from '../../components/IconReturnTop';
import { HeaderSearch } from '../../components/HeaderSearch';
import { Container } from '../../components/Container';
import { Error } from '../../components/Error';
import { Title } from '../../components/Title';

const Characters = () => {
  const [characterInput, setCharacterInput] = useState();
  const { characters, error, setCharacters } = useReturnDataAPI();
  const { characterValue, errorSearch, getDataCharacterSearch } = useCharacterSearch(characterInput);
  const { onPrevious, onNext } = usePaginationCharacters(characters, setCharacters);

  const characterInputValueHandle = (event) => setCharacterInput(event.target.value);

  return (
    <Container containerStyle='character' idContainer='header'>
      <HeaderSearch title='Character' placheholder='characters...' name='input' onChangeEvent={characterInputValueHandle} onEventClick={getDataCharacterSearch} />
      {errorSearch && <Error errorText='There was a mistake. update the app'></Error>}

      <PaginationCharacter next={characters.info?.next} prev={characters.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <Container containerStyle='character__article'>
        {error && (
          <Error errorText='It seems that there was an error with the database, please update the application. If the error persists, contact the developers'>
            <Title size='md'>Oops...</Title>
          </Error>
        )}

        {characterValue.length === 0 ? <CharactersSearch characterValue={characters} /> : <CharactersSearch characterValue={characterValue} />}
      </Container>

      <PaginationCharacter next={characters.info?.next} prev={characters.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <IconReturnTop hook='#header' />
    </Container>
  );
};

export default Characters;
