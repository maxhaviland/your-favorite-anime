import React from 'react';
import { ThemeProvider } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { asyncGetAnimes } from './store/ducks/animes';

import { ToastProvider } from 'react-toast-notifications'
import Menu from './components/menu'
import AnimeList from './components/anime/list'
import Spinner from "./components/spinner";
import theme from './theme';
import './styles.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncGetAnimes({limit:12}));
  }, [dispatch])

  return (
    <div className="App">
      <ToastProvider>
        <ThemeProvider theme={theme()}>
          <Spinner />
          <Menu />
          <AnimeList />
        </ThemeProvider>
      </ToastProvider>

    </div>
  );
}

export default App;
