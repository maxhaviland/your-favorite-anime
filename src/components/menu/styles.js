import { makeStyles } from '@material-ui/core/styles'
import { grey, red } from '@material-ui/core/colors'

export const useStyles = makeStyles(theme => ({
  drawer: {
    background: '#000000',
    color: '#8f2eff'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));