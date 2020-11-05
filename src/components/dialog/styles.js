import { makeStyles } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));