import { getDataAPI } from '../utils/fetching-return-data';

export const usePaginationCharacters = (characters, setCharacters) => {
  const onPrevious = async () => {
    const data = await getDataAPI(characters.info?.prev);
    setCharacters(data);
  };

  const onNext = async () => {
    const data = await getDataAPI(characters.info?.next);
    setCharacters(data);
  };
  return { onPrevious, onNext };
};
