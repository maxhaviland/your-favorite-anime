import { api } from './api';

export const animeService = {
  get: async (id = '') => await api.get(`/anime/${id}`)
};
