import React from 'react';

import { useDispatch } from 'react-redux';
import { asyncGetAnimes } from './store/ducks/animes'

import Menu from './components/menu'
import AnimeList from './components/anime/List'

import './styles.css'

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncGetAnimes())
  }, [])

  return (
    <div className="App">
      <Menu />
      <AnimeList />
    </div>
  );
}

export default App;
