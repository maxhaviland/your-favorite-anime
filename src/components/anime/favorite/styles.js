import { makeStyles } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      filter: 'grayscale(160%)'
    }
  },
  deleteIcon: {
    color: 'grey',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
}));