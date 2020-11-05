import { makeStyles } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 'auto',
  },
  favoriteButton: {
    position: "absolute",
    top: theme.spacing(-1.5),
    right: theme.spacing(-1.5),
  },
  favoriteIcon: {
    color: grey[ 'A200'],
    backgroundColor: grey[900],
    borderBottomLeftRadius: 7,
    padding: theme.spacing(1),
    '&:hover': {
      color: red[ 'A200'],
    }
  },
  title: {
    marginTop: theme.spacing(3)
  }
}));