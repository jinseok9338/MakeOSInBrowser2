import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@material-ui/core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { colors } from "styles/colors/colors";
import { ProcessConsumer } from "contexts/process";
import StartPopUpMenu from "components/system/taskbar/startPopUpMenu/startPopUpMenu";
import { useStyles } from "./styledStartButton";

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
        <>
          <Container
            className={classes.startbutton}
            onClick={handleClick}
            title="start"
          >
            <FontAwesomeIcon style={fontStyle} icon={faWindows} />
          </Container>
          <StartPopUpMenu
            el={anchorEl}
            handleClose={handleClose}
          />
        </>
  );
};

export default StartButton;
