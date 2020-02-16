import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const StandardTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  spacing: 1,
});

export default StandardTheme;
