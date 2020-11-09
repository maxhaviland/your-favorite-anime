import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const favoriteAnime = (animeFavorite) => {
    dispatch(actions.like(animeFavorite));
    removeAllToasts();
    const message = `${animeService.getNameAnime(anime.attributes.titles)} added to favorites :)`;
    addToast(message, { appearance: 'info', autoDismiss: true });
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
            onClick={() => favoriteAnime(anime)}
            className={classes.favoriteButton}
          >
            <FavoriteIcon className={classes.favoriteIcon} fontSize="large" />
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
