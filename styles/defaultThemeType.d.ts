import { colors, colorsOptions } from "./colors/colors";
import { sizes, sizesOptions } from "./sizes/sizesType";

export module "@material-ui/core/styles/createTheme" {
  interface Theme {
    colors: colors;
    sizes: sizes;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    colors?: colorsOptions;
    sizes?: sizesOptions;
  }
}
