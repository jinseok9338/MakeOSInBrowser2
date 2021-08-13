import {
  createTheme,
} from "@material-ui/core/styles";
import { sizes } from "./sizes/sizes";
import { colors } from "./colors/colors";

// export const useDefaultTheme = makeStyles((theme: AugmentedTheme) =>
//   createStyles({
//     root: {
//       color: theme.colors.primary,
//     },
//   })
// );

const defaultTheme = createTheme({
  colors,
  sizes,
});

export default defaultTheme;
