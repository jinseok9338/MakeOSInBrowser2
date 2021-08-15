import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { colors } from "styles/colors/colors";
import { ProcessConsumer } from "contexts/process";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startbutton: {
      width: theme.sizes.startButton.width,
      height: theme.sizes.taskbar.height,
      background: theme.colors.light.secondary,
      paddingRight: 0,
      paddingLeft:0,
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
    height: "22px",
    width: "22px",
    color: colors.light.bold,
  };

  return (
    <ProcessConsumer>
      {
        ({ close, open }) => (
          <Container className={classes.startbutton}
          title="start"
          onClick={() => open('HelloWorld')}
          onDoubleClick={() => close('HelloWorld')}>
          <FontAwesomeIcon style={fontStyle} icon={faWindows} />
          </Container>
        )
      }
    </ProcessConsumer>
  );
};

export default StartButton;
