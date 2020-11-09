import React from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';

import BugIcon from '@material-ui/icons/BugReport';
import SearchIcon from '@material-ui/icons/Search';
import ListItem from '../listItem';
import Status from '../../status/status';

const AnimeList = () => {
  const animes = useSelector((state) => state.animes);
  const propsStatus = {
    color: 'secondary',
    style: { fontSize: '160px' },
    fontSize: 'large',
  };

  const animeListItems = animes.data.length > 0 && animes.data.map((anime) => (
    <Grid item style={{ margin: 12 }}>
      <ListItem key={anime.id} anime={anime} />
    </Grid>
  ));

  if (animes.status === 200 && animes.data.length === 0) {
    return <Status icon={<SearchIcon {...propsStatus} />} message="Not found 404" />;
  }
  if (animes.status === 500) {
    return <Status icon={<BugIcon {...propsStatus} />} message="Error 500" />;
  }
  if (animes.status === 200) {
    return animes.data.length > 0 && (
      <Grid
        alignContent="center"
        alignItems="center"
        justify="center"
        container
      >
        {animeListItems}
      </Grid>
    );
  }
  return <></>;
};
export default AnimeList;
