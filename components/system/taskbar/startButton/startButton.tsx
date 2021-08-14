import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { colors } from "../../../../styles/colors/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startbutton: {
      width: theme.sizes.startButton.width,
      height: theme.sizes.taskbar.height,
      background: theme.colors.light.secondary,
      position: "absolute",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&:hover": {
        background: theme.colors.light.primary,
      },
    },
  })
);

const StartButton = (): JSX.Element => {
  const classes = useStyles();
  const fontStyle = {
    height: "25px",
    width: "25px",
    color: colors.light.bold,
  };

  return (
    <Container className={classes.startbutton}>
      <FontAwesomeIcon style={fontStyle} icon={faWindows} />
    </Container>
  );
};

export default StartButton;
