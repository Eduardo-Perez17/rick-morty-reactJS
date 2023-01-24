import { useState } from 'react';
import { URL_API_ENDPOINTS_SEARCH } from '../../utils/endPoints';
import { useDataSearch } from '../../context/useDataSearch';
import { useReturnDataAPI } from '../../context/useReturnDataAPI';
import { usePagination } from '../../context/usePagination';

import './character.scss';

import { PaginationCharacter } from '../../components/PaginationCharacter';
import { CharactersSearch } from '../../components/CharactersSearch';
import { IconReturnTop } from '../../components/IconReturnTop';
import { HeaderSearch } from '../../components/HeaderSearch';
import { Container } from '../../components/Container';
import { Error } from '../../components/Error';
import { Title } from '../../components/Title';

const Characters = () => {
  const [characterInput, setCharacterInput] = useState('');
  const { characters, error, setCharacters } = useReturnDataAPI();
  const { searchValue, errorSearch, getDataSearch } = useDataSearch(characterInput);
  const { onPrevious, onNext } = usePagination(characters, setCharacters);

  const characterInputValueHandle = (event) => setCharacterInput(event.target.value);

  return (
    <Container containerStyle='character' idContainer='header'>
      <HeaderSearch title='Character' placheholder='characters...' name='input' onChangeEvent={characterInputValueHandle} onEventClick={() => getDataSearch(URL_API_ENDPOINTS_SEARCH.characters)} />
      {errorSearch && <Error errorText='There was a mistake. update the app'></Error>}

      <PaginationCharacter next={characters.info?.next} prev={characters.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <Container containerStyle='character__article'>
        {error && (
          <Error errorText='It seems that there was an error with the database, please update the application. If the error persists, contact the developers'>
            <Title size='md'>Oops...</Title>
          </Error>
        )}
        {characterInput ? <CharactersSearch characterValue={searchValue} /> : <CharactersSearch characterValue={characters} />}
      </Container>

      <PaginationCharacter next={characters.info?.next} prev={characters.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <IconReturnTop hook='#header' />
    </Container>
  );
};

export default Characters;
