import { blue, deepOrange } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme
const theme = createMuiTheme({
    palette: {
        type: "light",
        primary: blue,
        secondary: deepOrange,
    },
});

export default theme;
