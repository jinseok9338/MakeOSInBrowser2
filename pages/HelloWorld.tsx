import {
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
  Typography,
} from "@material-ui/core";

const useDefaultTheme = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      color: theme.colors.light.bolder,
    },
  })
);

const HelloWorld = () => {
  const classes = useDefaultTheme();
  return (
    <Typography variant="h1" component="h2" className={classes.root}>
      Hello World
    </Typography>
  );
};

export default HelloWorld;
