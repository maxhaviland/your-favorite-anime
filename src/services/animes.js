import { api } from './api';

export const animeService = {
  async get({ limit = 12, offset = 0 }) {
    const params = {
      'page[limit]': limit, 
      'page[offset]': offset,
    };
    return await api.get(`/anime`, { params });
  },
  async getByName({ text, limit = 12, offset = 0 }) {
    const params = {
      'page[limit]': limit, 
      'page[offset]': offset,
      'filter[text]': text
    }
    return await api.get(`/anime`, { params });
  },
  getNameAnime(titles) {
    return titles.en || titles.en_jp || titles.ja_jp || ''
  }
};
