import React from 'react';
import {
  Grid,
} from '@material-ui/core';

import Menu from '../components/menu';
import AnimeList from '../components/anime/list';

const Home = () => (
  <>
    <Grid container alignContent="center">
      <Grid item md={1} sm={1} xl={1} xs={1} lg={1}>
        <Menu />
      </Grid>
      <Grid item md={10} sm={10} xl={10} xs={10} lg={10}>
        <AnimeList />
      </Grid>
    </Grid>
  </>
);

export default Home;
