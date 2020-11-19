import { makeStyles } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 240,
    '&:hover': {
      filter: 'contrast(160%)',
    },
  },
  media: {
    height: 100,
  },
  favoriteButton: {
    position: 'absolute',
    top: theme.spacing(0),
    right: theme.spacing(0),
  },
  favoriteIcon: {
    color: grey[300],
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 100,
    padding: theme.spacing(1),
    '&:hover': {
      color: red.A200,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
  },
  favoriteIconSelected: {
    color: red.A200,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 100,
    padding: theme.spacing(1),
    '&:hover': {
      color: grey[300],
      backgroundColor: 'rgba(255, 0, 0, 0.7)',
    },
  },
}));
