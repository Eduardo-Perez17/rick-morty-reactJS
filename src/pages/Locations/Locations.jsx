import { useState } from 'react';
import { URL_API_ENDPOINTS_SEARCH } from '../../utils/endPoints';
import { useReturnDataAPI } from '../../context/useReturnDataAPI';
import { useDataSearch } from '../../context/useDataSearch';
import { usePagination } from '../../context/usePagination';

import './location.scss';

import { IconReturnTop } from '../../components/IconReturnTop';
import { PaginationCharacter } from '../../components/PaginationCharacter';
import { LocationSearch } from '../../components/LocationSearch';
import { HeaderSearch } from '../../components/HeaderSearch';
import { Container } from '../../components/Container';

const Locations = () => {
  const [locationSearch, setLocationSearch] = useState('');
  const { locations, setLocations } = useReturnDataAPI();
  const { onPrevious, onNext } = usePagination(locations, setLocations);
  const { searchValue, getDataSearch } = useDataSearch(locationSearch);

  const locationSearchHandle = (event) => setLocationSearch(event.target.value);

  return (
    <Container containerStyle='location' idContainer='location'>
      <HeaderSearch
        title='Location'
        placheholder='location...'
        onChangeEvent={locationSearchHandle}
        value={locationSearch}
        name='input'
        onEventClick={() => getDataSearch(URL_API_ENDPOINTS_SEARCH.location)}
      />

      <PaginationCharacter next={locations.info?.next} prev={locations.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <Container containerStyle='article__location'>{locationSearch ? <LocationSearch locations={searchValue.results} /> : <LocationSearch locations={locations.results} />}</Container>

      <PaginationCharacter next={locations.info?.next} prev={locations.info?.prev} onPrevious={onPrevious} onNext={onNext} />

      <IconReturnTop hook='#location' />
    </Container>
  );
};

export default Locations;
