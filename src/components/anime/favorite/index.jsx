import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import CustomDialog from '../../dialog';
import Details from '../../details';

import { animeService } from '../../../services/animes';
import { actions } from '../../../store/ducks/animes';

import { useStyles } from './styles';

const FavoriteAnimes = () => {
  const favoriteAnimes = useSelector((state) => state.animes.favorites);
  const [openDetails, setOpenDetails] = useState(false);
  const [anime, setAnime] = useState({});
  const { addToast, removeAllToasts } = useToasts();

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const selectedAnime = (animeSelected) => {
    setAnime(animeSelected);
    handleOpenDetails();
  };

  const deslikeAnime = (animeDeslike) => {
    dispatch(actions.deslike(animeDeslike.id));
    removeAllToasts();
    const message = `${animeService.getNameAnime(animeDeslike.attributes.titles)} removed`;
    addToast(message, { appearance: 'error', autoDismiss: true });
  };
  const clearFavorites = () => {
    dispatch(actions.clearFavorites());
    removeAllToasts();
    addToast('Favorites removed', { appearance: 'error', autoDismiss: true });
  };

  return (
    <>
      <List>
        {favoriteAnimes.map((favoriteAnime) => (
          <ListItem
            className={classes.root}
            onClick={() => selectedAnime(favoriteAnime)}
            key={favoriteAnime.id}
          >
            <ListItemAvatar>
              <Avatar
                variant="square"
                alt={animeService.getNameAnime(favoriteAnime.attributes.titles)}
                src={favoriteAnime.attributes.posterImage.large}
              />
            </ListItemAvatar>
            <ListItemText
              primary={animeService.getNameAnime(favoriteAnime.attributes.titles)}
            />
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => deslikeAnime(favoriteAnime)}
                className={classes.deleteIcon}
                color="secondary"
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {
        favoriteAnimes.length > 0 && (
          <Button
            size="large"
            fullWidth
            color="secondary"
            onClick={clearFavorites}
            startIcon={<DeleteForeverIcon />}
          >
            clear
          </Button>
        )
      }
      <CustomDialog open={openDetails} handleClose={handleCloseDetails}>
        <Details anime={anime} />
      </CustomDialog>
    </>
  );
};

export default FavoriteAnimes;
