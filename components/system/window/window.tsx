import {
  AppBar,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { ProcessConsumer } from "contexts/process";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    windowBox: {
      background: theme.colors.light.bolder,
      color: theme.colors.light.secondary,
      position: "absolute",
      textAlign: "center",
      fontSize: "50px",
      paddingLeft: 0,
      paddingRight: 0,
      width: "350px",
    },
    handle: {
      cursor: "grab",
      height: "30px",
    },
    icon: {
      fontSize: "25px",
      top: "2px",
      right: "4px",
      position: "absolute",
      cursor: "pointer",
    },
  })
);

const Window = ({ children }: { children: React.ReactChild }): JSX.Element => {
  const classes = useStyles();

  return (
    <ProcessConsumer>
      {({ close }) => (
        <Draggable defaultPosition={{ x: 300, y: 400 }} handle=".handle">
          <Container className={classes.windowBox}>
            <AppBar className={`handle ${classes.handle}`} position="static">
              <FontAwesomeIcon
                className={classes.icon}
                icon={faWindowClose}
                onClick={() => close("HelloWorld")}
              />
            </AppBar>
            {children}
          </Container>
        </Draggable>
      )}
    </ProcessConsumer>
  );
};

export default Window;


