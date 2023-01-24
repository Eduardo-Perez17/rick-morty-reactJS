import { useState } from 'react';

import { getDataAPI } from '../utils/fetching-return-data';

export const useDataSearch = (dataInput) => {
  const [searchValue, setSearchValue] = useState([]);
  const [errorSearch, setErrorSearch] = useState(false);

  const getDataSearch = async (url) => {
    try {
      const data = dataInput;
      const getData = await getDataAPI(`${url}${data}`);
      setSearchValue(getData);
    } catch {
      setErrorSearch(true);
    }
  };

  return { searchValue, getDataSearch, errorSearch };
};
