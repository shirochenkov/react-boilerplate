import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  },
  shadows: [...Array(25)].map((e, i, a) => (a[i] = "none")),
  typography: {
    display1: {
      fontSize: "1.275rem",
      color: "rgba(0, 0, 0, 0.87);"
    },
    display2: {
      color: "rgba(0, 0, 0, 0.87);"
    },
    display3: {
      color: "rgba(0, 0, 0, 0.87);"
    },
    display4: {
      color: "rgba(0, 0, 0, 0.87);"
    },
    button: {
      textTransform: "none"
    },
    headline: {
      fontSize: "1.275rem"
    },
    subheading: {
      color: "rgba(0, 0, 0, 0.54)"
    }
  }
});

export default theme;
