import { animeService } from '../../services/animes';

const types = {
  like: '@like/anime',
  deslike: '@deslike/anime',
  clearFavorites: '@clearFavorites/animes',
  get: '@get/animes',
  success: '@success/animes',
  failure: '@failure/animes',
  clear: '@clear/animes',
};

export const actions = {
  selected: (anime) => ({
    type: types.selected,
    payload: anime,
  }),
  like: (anime) => ({
    type: types.like,
    payload: anime,
  }),
  deslike: (id) => ({
    type: types.deslike,
    payload: id,
  }),
  clearFavorites: () => ({
    type: types.clearFavorites,
  }),
  get: () => ({
    type: types.get,
  }),
  success: (response) => ({
    type: types.success,
    payload: response,
  }),
  failure: (response) => ({
    type: types.failure,
    payload: response,
  }),
  clear: () => ({
    type: types.clear,
  }),
};

const initialState = {
  data: [],
  count: 0,
  favorites: [],
  loading: false,
  status: null,
};

export default function animes(state = initialState, action) {
  const { type, payload } = action;
  const likedAnimes = state.favorites.filter((anime) => anime.id !== payload);
  const animeExists = state.favorites.find((anime) => anime.id === payload.id);

  switch (type) {
    case types.get:
      return { ...initialState, favorites: state.favorites, loading: true };
    case types.like:
      return animeExists
        ? { ...state }
        : { ...state, favorites: state.favorites.concat(payload) };
    case types.deslike:
      return { ...state, favorites: likedAnimes };
    case types.clearFavorites:
      return { ...state, favorites: [] };
    case types.success:
      return {
        ...state,
        data: payload.data.data,
        count: payload.data.count,
        status: payload?.status,
        loading: false,
      };
    case types.failure:
      return { ...state, status: payload.status, loading: false };
    case types.clear:
      return initialState;
    default:
      return state;
  }
}

export const asyncGetAnimes = ({ text, limit = 12, offset = 0 }) => (dispatch) => {
  const params = { text, limit, offset };
  dispatch(actions.get());

  const treatment = (response) => {
    // eslint-disable-next-line no-unused-expressions
    if (response.status === 200) {
      dispatch(actions.success(response));
    } else {
      dispatch(actions.failure(response));
    }
  };

  const error = (e) => dispatch(actions.failure(e.response));

  if (text?.trim()) {
    animeService.getByName(params)
      .then(treatment)
      .catch(error);
  } else {
    animeService.get(params)
      .then(treatment)
      .catch(error);
  }
};
