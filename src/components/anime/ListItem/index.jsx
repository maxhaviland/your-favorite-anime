import React from 'react';

import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  CardActions,
  IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

import { useStyles } from './styles'

const ListItem = ({ anime }) => {
  const classes = useStyles();
  const getNameAnime = (titles) => titles.en || titles.en_jp || titles.ja_jp || ''
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          alt={anime.attributes.titles.en}
          src={anime.attributes.posterImage.large} />
        <IconButton className={classes.favoriteButton}>
          <FavoriteIcon className={classes.favoriteIcon} fontSize="large"/>
        </IconButton>
        <Typography noWrap align="center">
          {getNameAnime(anime.attributes.titles)}
        </Typography>
      </CardActionArea> 
    </Card>
  )
}

export default ListItem;