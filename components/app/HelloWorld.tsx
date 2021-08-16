import {
  createStyles,
  makeStyles,
  Theme as AugmentedTheme,
  Typography,
} from "@material-ui/core";
import React from "react";

export const useDefaultTheme = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      color: theme.colors.light.bolder,
    },
  })
);

const HelloWorld = (): JSX.Element => {
  const classes = useDefaultTheme();
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default HelloWorld;
