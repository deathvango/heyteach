import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const StandardTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
  spacing: 0,
});

export default StandardTheme;
