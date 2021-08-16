import {
  AppBar,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { ProcessConsumer } from "contexts/process";
import { Rnd } from "react-rnd";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    windowBox: {
      background: theme.colors.light.primary,
      color: theme.colors.light.secondary,
      textAlign: "center",
      fontSize: "50px",
      paddingLeft: 0,
      paddingRight: 0,
      resize: "both"
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
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 350,
            height: 350,
          }}
        >
          <Container className={classes.windowBox}>
            <Container className={`handle ${classes.handle}`} >
              <FontAwesomeIcon
                className={classes.icon}
                icon={faWindowClose}
                onClick={() => close("HelloWorld")}
              />
            </Container>
            {children}
          </Container>
        </Rnd>
      )}
    </ProcessConsumer>
  );
};

export default Window;
