import { api } from './api';

const animeService = {
  async get({ text = '', limit = 12, offset = 0 }) {
    const params = {
      'page[limit]': limit,
      'page[offset]': offset,
    };

    if (String(text).trim()) {
      params['filter[text]'] = text;
    }

    try {
      const response = await api.get('/anime', { params });

      if (response.status === 200) {
        return {
          animes: response.data.data,
          count: response.data.meta.count,
          status: response.status,
        };
      }
      return {
        animes: [],
        count: 0,
        status: response.status,
      };
    } catch (error) {
      return {
        animes: [],
        count: 0,
        status: 500,
      };
    }
  },

  getNameAnime(titles) {
    return titles?.en || titles?.en_jp || titles?.ja_jp || '';
  },

  favoriteAnimeAlreadyExists(favoriteAnimes, animeID) {
    const animeAlreadyExists = favoriteAnimes.find((favoriteAnime) => favoriteAnime.id === animeID);
    return animeAlreadyExists;
  },
};

export { animeService };
