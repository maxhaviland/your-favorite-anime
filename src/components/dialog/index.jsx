import React from 'react';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';

const CustomDialog = ({ open, handleClose, children }) => {
  const classes = useStyles();

  return (
    <Dialog
      PaperProps={{
        style: {
          background: '#000000',
        },
      }}
      fullScreen
      open={open}
      onClose={handleClose}
    >
      <AppBar color="secondary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  );
};

export default CustomDialog;
