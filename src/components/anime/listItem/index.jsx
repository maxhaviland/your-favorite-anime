import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import {
  Card,
  CardMedia,
  CardActionArea,
  Typography,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { animeService } from '../../../services/animes';

import { actions } from '../../../store/ducks/animes';

import CustomDialog from '../../dialog';
import Details from '../../details';

import { useStyles } from './styles';

const ListItem = ({ anime }) => {
  const dispatch = useDispatch();
  const { addToast, removeAllToasts } = useToasts();
  const classes = useStyles();
  const [openDetails, setOpenDetails] = useState(false);

  const favoriteAnimes = useSelector((state) => state.animes.favorites);

  const handleOpenDetails = () => setOpenDetails(true);

  const handleCloseDetails = () => setOpenDetails(false);

  const favoriteAnimeAlreadyExists = (animeID) => {
    const animeAlreadyExists = animeService
      .favoriteAnimeAlreadyExists(favoriteAnimes, animeID);

    return animeAlreadyExists;
  };

  const deslikeAnimeFavorite = (animeFavorite) => {
    dispatch(actions.deslike(animeFavorite.id));
    removeAllToasts();
    const message = `${animeService.getNameAnime(animeFavorite.attributes.titles)} removed`;
    addToast(message, { appearance: 'error', autoDismiss: true });
  };

  const favoriteAnime = (animeFavorite) => {
    if (!favoriteAnimeAlreadyExists(animeFavorite.id)) {
      dispatch(actions.like(animeFavorite));
      removeAllToasts();
      const message = `${animeService.getNameAnime(anime.attributes.titles)} added to favorites :)`;
      addToast(message, { appearance: 'info', autoDismiss: true });
    }
  };

  const handleAnimeFavorite = (animeFavorite) => {
    if (favoriteAnimeAlreadyExists(anime.id)) {
      deslikeAnimeFavorite(animeFavorite);
    } else favoriteAnime(animeFavorite);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            onClick={handleOpenDetails}
            component="img"
            alt={anime.attributes.titles.en}
            src={anime.attributes.posterImage.large}
          />
          <IconButton
            onClick={() => handleAnimeFavorite(anime)}
            className={classes.favoriteButton}
          >
            <FavoriteIcon
              className={
                favoriteAnimeAlreadyExists(anime.id)
                  ? classes.favoriteIconSelected
                  : classes.favoriteIcon
              }
              fontSize="large"
            />
          </IconButton>
          <Typography noWrap align="center">
            {animeService.getNameAnime(anime.attributes.titles)}
          </Typography>
        </CardActionArea>
      </Card>
      <CustomDialog open={openDetails} handleClose={handleCloseDetails}>
        <Details anime={anime} />
      </CustomDialog>
    </>
  );
};

export default ListItem;
