import React, { useState } from 'react';
import {
  Paper,
  Input,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { asyncGetAnimes } from '../../store/ducks/animes';

const Search = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleText = ({ target }) => setText(target.value);

  const searchAnime = (event) => {
    if (text.trim()) {
      event.preventDefault();
      dispatch(asyncGetAnimes({ text }));
    }
  };

  return (
    <form onSubmit={searchAnime}>
      <Paper>
        <Input
          style={{ padding: 6 }}
          onChange={handleText}
          fullWidth
          placeholder="search your favorite anime"
          endAdornment={(
            <InputAdornment position="start">
              <IconButton onClick={searchAnime}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )}
        />
      </Paper>
    </form>
  );
};

export default Search;
