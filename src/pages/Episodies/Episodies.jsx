import { useState } from 'react';
import { URL_API_ENDPOINTS_SEARCH } from '../../utils/endPoints';
import { useReturnDataAPI } from '../../context/useReturnDataAPI';
import { useDataSearch } from '../../context/useDataSearch';
import { usePagination } from '../../context/usePagination';

import './_episodie.scss';

import { PaginationCharacter } from '../../components/PaginationCharacter';
import { EpisodieSearch } from '../../components/EpisodieSearch';
import { HeaderSearch } from '../../components/HeaderSearch';
import { Container } from '../../components/Container';

const Episodies = () => {
  const [episodieSearch, setEpisodieSearch] = useState('');
  const { episodes, setEpisodes } = useReturnDataAPI();
  const { searchValue, getDataSearch } = useDataSearch(episodieSearch);
  const { onPrevious, onNext } = usePagination(episodes, setEpisodes);

  const episodeSearchHandle = (event) => setEpisodieSearch(event.target.value);

  return (
    <Container containerStyle='episodie'>
      <HeaderSearch
        title='Episodie'
        placheholder='episodie...'
        onChangeEvent={episodeSearchHandle}
        value={episodieSearch}
        name='input'
        onEventClick={() => getDataSearch(URL_API_ENDPOINTS_SEARCH.episodie)}
      />
      <PaginationCharacter next={episodes.info?.next} prev={episodes.info?.prev} onPrevious={onPrevious} onNext={onNext} />
      <Container containerStyle='episodie__article'>{episodieSearch ? <EpisodieSearch episodes={searchValue} episodieSearch={episodieSearch} /> : <EpisodieSearch episodes={episodes} />}</Container>
      <PaginationCharacter next={episodes.info?.next} prev={episodes.info?.prev} onPrevious={onPrevious} onNext={onNext} />
    </Container>
  );
};

export default Episodies;

// https://rickandmortyapi.com/api/episode/?name=pilot
