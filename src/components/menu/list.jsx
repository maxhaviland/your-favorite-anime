import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import FavoriteAnimes from '../anime/favorite';

const ListItemsMenu = () => (
  <List>
    <ListItem>
      <ListItemIcon>
        <FavoriteIcon color="secondary" />
      </ListItemIcon>
      <ListItemText primary="Favorite Animes" />
    </ListItem>
    <FavoriteAnimes />
  </List>
);

export default ListItemsMenu;
