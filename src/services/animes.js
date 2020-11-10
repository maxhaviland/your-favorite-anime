import { api } from './api';

export const animeService = {
  async get({ limit = 12, offset = 0 }) {
    const params = {
      'page[limit]': limit,
      'page[offset]': offset,
    };
    const response = await api.get('/anime', { params });

    return response;
  },
  async getByName({ text, limit = 12, offset = 0 }) {
    const params = {
      'page[limit]': limit,
      'page[offset]': offset,
      'filter[text]': text,
    };
    const response = await api.get('/anime', { params });

    return response;
  },
  getNameAnime(titles) {
    return titles?.en || titles?.en_jp || titles?.ja_jp || '';
  },
};
