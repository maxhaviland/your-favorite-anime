import { animeService } from '../../services/animes'

const types  = {
  like: '@like/anime',
  deslike: '@deslike/anime',
  get: '@get/animes',
  success: '@success/animes',
  failure: '@failure/animes',
  clear: '@clear/animes',
}

const actions = {
  selected: (anime) => ({
    type: types.selected,
    payload: anime
  }),
  like: (anime) => ({
    type: types.like,
    payload: anime
  }),
  deslike: (id) => ({
    type: types.deslike,
    payload: id
  }),
  get: () => ({
    type: types.get,
  }),
  success: (response) => ({
    type: types.success,
    payload: response
  }),
  failure: (response) => ({
    type: types.failure,
    payload: response
  }),
  clear: () => ({
    type: types.clear
  })
}

const initialState = {
  data: [],
  count: 0,
  favorites: [],
  loading: false,
  status: null
}

export default function animes (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.get:
      return { ...state, loading: true };
    case types.success: 
      console.log(1, payload)
      return { ...state, data: payload.data.data, count: payload.data.count, status: payload?.status }
    case types.failure: 
      return { ...state, status: payload?.status }
    case types.clear: 
      return initialState
    default:
      return state
  }
} 

export const asyncGetAnimes = (id = '') => dispatch => {
  dispatch(actions.get());

  animeService.get(id)
    .then(response => {
      response.status === 200 
      ? dispatch(actions.success(response))
      : dispatch(actions.failure(response))
    })    
    .catch(error => dispatch(actions.failure(error.response)))

}
