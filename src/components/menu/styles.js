import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawer: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
  },
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    position: 'fixed',
    padding: theme.spacing(4),
  },
}));
