import { useState, useEffect } from 'react';
import { getDataAPI } from '../utils/fetching-return-data';
import { URL_API_ENDPOINTS } from '../utils/endPoints';

export const useReturnDataAPI = () => {
  const [infoTvShow, setInfoTvShow] = useState([]);
  const [error, setError] = useState(false);

  const returnDataAPI = async () => {
    const dataTvShowAPI = [];
    try {
      const dataCharacter = await getDataAPI(URL_API_ENDPOINTS.characters);
      const dataLocation = await getDataAPI(URL_API_ENDPOINTS.locations);
      const dataEpisodie = await getDataAPI(URL_API_ENDPOINTS.episodes);

      dataTvShowAPI.push({ infoCharacter: dataCharacter.info.count, infoLocation: dataLocation.info.count, infoEpisodie: dataEpisodie.info.count });

      setInfoTvShow(dataTvShowAPI);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    returnDataAPI();
  }, []);

  return { infoTvShow, error };
};
