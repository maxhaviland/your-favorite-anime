import React from 'react';
import {
  List,
  Typography,
  ListItem, 
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

import FavoriteAnimes from '../anime/favorite'

const ListItemsMenu = ({iconColor = "#8f2eff"}) => {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <FavoriteIcon color="secondary"/>
        </ListItemIcon>
        <ListItemText primary="Favorite Animes" />
      </ListItem>
      <FavoriteAnimes />
    </List>
  )
}

export default ListItemsMenu;