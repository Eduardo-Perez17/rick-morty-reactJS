import { getDataAPI } from '../utils/fetching-return-data';

export const usePagination = (dataPaginationAPI, setDataPaginationAPI) => {
  const onPrevious = async () => {
    const data = await getDataAPI(dataPaginationAPI.info?.prev);
    setDataPaginationAPI(data);
  };

  const onNext = async () => {
    const data = await getDataAPI(dataPaginationAPI.info?.next);
    setDataPaginationAPI(data);
  };
  return { onPrevious, onNext };
};
