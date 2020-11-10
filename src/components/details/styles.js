import { makeStyles } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
  },
  favoriteButton: {
    position: 'absolute',
    top: theme.spacing(-1.5),
    right: theme.spacing(-1.5),
  },
  favoriteIcon: {
    color: grey.A200,
    backgroundColor: grey[900],
    borderBottomLeftRadius: 7,
    padding: theme.spacing(1),
    '&:hover': {
      color: red.A200,
    },
  },
  title: {
    marginTop: theme.spacing(3),
  },
  mainBackground: {
    position: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.7,
    height: '100vh',
    width: '100vw',
    zIndex: 0,
  },
  secondaryBackground: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
    backgroundRepeat: false,
  },
}));
