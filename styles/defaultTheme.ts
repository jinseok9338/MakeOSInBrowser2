import { createTheme } from "@material-ui/core/styles";
import { colors } from "./colors/colors";
import { sizes } from "./sizes/sizes";

const defaultTheme = createTheme({
  colors,
  sizes,
});

export default defaultTheme;
