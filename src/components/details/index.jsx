import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Container,
} from '@material-ui/core';
import { animeService } from '../../services/animes';

import { useStyles } from './styles';

const Details = ({ anime }) => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" alignItems="center" alignContent="center">
      <Grid item md={3} sm={10}>
        <Card>
          <CardMedia
            component="img"
            alt={anime.attributes.titles.en}
            src={anime.attributes.posterImage.large}
          />
        </Card>
      </Grid>
      <Grid item md={6} sm={12}>
        <Container>
          <Typography className={classes.title} paragraph color="secondary" variant="h4">
            {animeService.getNameAnime(anime.attributes.titles)}
          </Typography>
          <Typography paragraph color="textSecondary" variant="caption">Synopsis</Typography>
          <Typography align="justify" color="textSecondary">{anime.attributes.synopsis}</Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Details;
