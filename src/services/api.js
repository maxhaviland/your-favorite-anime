import Axios from 'axios';

export const api = Axios.create({
  baseURL: process.env.REACT_APP_KITSU_API
})
