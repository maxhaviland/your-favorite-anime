import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { asyncGetAnimes } from './store/ducks/animes';

import Home from './pages/home';
import Spinner from './components/spinner';
import theme from './theme';
import './styles.css';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(asyncGetAnimes({ limit: 12 }));
  }, [dispatch]);

  return (
    <div className="App">
      <ToastProvider>
        <ThemeProvider theme={theme()}>
          <Spinner />
          <Home />
        </ThemeProvider>
      </ToastProvider>
    </div>
  );
}

export default App;
