import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React, { useContext } from "react";
import { colors } from "styles/colors/colors";
import { ProcessConsumer } from "contexts/process";
import StartPopUpMenu from "components/system/taskbar/startPopUpMenu/startPopUpMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    startbutton: {
      width: theme.sizes.startButton.width,
      height: theme.sizes.taskbar.height,
      background: theme.colors.light.secondary,
      paddingRight: 0,
      paddingLeft: 0,
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
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const fontStyle = {
    height: "22px",
    width: "22px",
    color: colors.light.bold,
  };

  return (
    <ProcessConsumer>
      {({ close, open }) => (
        <>
          <Container
            className={classes.startbutton}
            onClick={handleClick}
            title="start"
          >
            <FontAwesomeIcon style={fontStyle} icon={faWindows} />
          </Container>
          <StartPopUpMenu el={anchorEl} handleClose={handleClose} />
        </>
      )}
    </ProcessConsumer>
  );
};

export default StartButton;
