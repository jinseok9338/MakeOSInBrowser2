import { createTheme } from "@material-ui/core/styles";
import { sizes } from "./sizes/sizes";
import { colors } from "./colors/colors";

const defaultTheme = createTheme({
  colors,
  sizes,
});

export default defaultTheme;
