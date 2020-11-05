import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'
const theme = () => {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#000000'
      },
      secondary: {
        main: red[900],
      },
      text: {
        secondary: "#ffffff"
      }
    },
  });
}

export default theme;
