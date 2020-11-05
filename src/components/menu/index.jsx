import React, { useState } from 'react'
import {
  Drawer,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ListItemsMenu from './list';

import { useStyles } from './styles'

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <>
      <IconButton onClick={handleOpenMenu}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer classes={{paper: classes.drawer}}
        anchor="left" open={openMenu} onClose={handleCloseMenu}>
        <div className={classes.list}>
        <ListItemsMenu />

        </div>
      </Drawer>
    </>
  )
}

export default Menu