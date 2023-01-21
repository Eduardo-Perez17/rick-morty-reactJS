import { useState } from 'react';

import { getDataAPI } from '../utils/fetching-return-data';
import { URL_API_ENDPOINTS_SEARCH } from '../utils/endPoints';

export const useCharacterSearch = (characterInput) => {
  const [characterValue, setCharacterValue] = useState([]);
  const [errorSearch, setErrorSearch] = useState(false);

  const getDataCharacterSearch = async (event) => {
    try {
      event.preventDefault();
      const character = characterInput;
      const getDataCharacter = await getDataAPI(`${URL_API_ENDPOINTS_SEARCH.characters}${character}`);
      setCharacterValue(getDataCharacter);
    } catch {
      setErrorSearch(true);
    }
  };

  return { characterValue, getDataCharacterSearch, errorSearch };
};
