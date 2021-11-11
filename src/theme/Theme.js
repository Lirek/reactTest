import { createMuiTheme, defaultTheme } from "react-admin";
import merge from "lodash/merge";

export const Theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      secondary: {
        main: "#56051c", // Not far from orange
      },
      background: {
        default: '#ffffff',
        paper: '#dac7c7',
      },
    }
  })
);