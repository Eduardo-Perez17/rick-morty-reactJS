export const URL_API = {
  path: `https://rickandmortyapi.com/api`,
};

export const URL_API_ENDPOINTS = {
  characters: 'https://rickandmortyapi.com/api/character',
  locations: 'https://rickandmortyapi.com/api/location',
  episodes: 'https://rickandmortyapi.com/api/episode',
};

export const URL_API_ENDPOINTS_SEARCH = {
  characters: 'https://rickandmortyapi.com/api/character/?name=',
};

export const HOME = {
  name: 'hogar',
  path: '/',
};

export const CHARACTER = {
  name: 'personajes',
  path: '/personajes',
};

export const LOCATION = {
  name: 'localizacion',
  path: '/localizacion',
};

export const EPISODIE = {
  name: 'episodios',
  path: '/episodios',
};

export const NOT_FOUND = {
  path: '*',
};

export const URL_NAVBAR = [CHARACTER, LOCATION, EPISODIE];
