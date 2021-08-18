import StyledStartButton from "components/system/taskbar/startButton/StyledStartButton";
import WindowsIcon from "components/system/taskbar/startButton/WindowsIcon";
import { useSession } from "contexts/session";
import React from "react";

const StartButton = (): JSX.Element => {
  const { startMenuVisible, toggleStartMenu } = useSession();

  return (
    <StyledStartButton
      active={startMenuVisible}
      title="Start"
      onClick={() => toggleStartMenu()}
    >
      <WindowsIcon />
    </StyledStartButton>
  );
};

export default StartButton;
