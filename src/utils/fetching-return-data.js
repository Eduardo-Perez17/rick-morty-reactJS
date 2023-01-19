export const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

export const getDataAPI = async (path) => {
  const pathAPI = path;
  const dataPath = await getData(pathAPI);
  return dataPath;
};
