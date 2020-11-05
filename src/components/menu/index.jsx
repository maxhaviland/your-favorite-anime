import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Drawer,
  IconButton
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ListItemsMenu from './list';
import Search from './search';

import { useStyles } from './styles'

const Menu = () => {
  const animes = useSelector(state => state.animes);
  const [openMenu, setOpenMenu] = useState(false);
  const classes = useStyles();

  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  useEffect(handleCloseMenu,[animes])

  return (
    <>
      <IconButton size="large" className={classes.menuButton} color="secondary" onClick={handleOpenMenu}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer classes={{paper: classes.drawer}}
        anchor="left" open={openMenu} onClose={handleCloseMenu}>
        <div className={classes.list}>
        <Search />
        <ListItemsMenu />
        </div>
      </Drawer>
    </>
  )
}

export default Menu