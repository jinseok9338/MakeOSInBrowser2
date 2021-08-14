import { colors, colorsOptions } from "styles/colors/colorsType";
import { sizes, sizesOptions } from "styles/sizes/sizesType";

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
