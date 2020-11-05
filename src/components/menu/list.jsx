import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const ListItemsMenu = ({iconColor = "#8f2eff"}) => {
  return (
    <List>
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon htmlColor={iconColor} />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItem>
    </List>
  )
}

export default ListItemsMenu;