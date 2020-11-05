import React from 'react';
import { useSelector } from 'react-redux';

import {
  Grid,
  Box
} from '@material-ui/core'

import ListItem from './ListItem';

const AnimeList = () => {
  const animes = useSelector(state => state.animes);

  const animeListItems = animes?.data.map(anime => (
    <Grid item>
      <ListItem key={anime.id} anime={anime} />
    </Grid>
  ))

  return animes.data.length > 0 && (
      <Grid 
        alignContent="center" 
        alignItems="center"
        justify="center"
        container 
        spacing={6} >
        {animeListItems}
      </Grid> 
  )
}
export default AnimeList;