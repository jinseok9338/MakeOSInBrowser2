import StyledTitlebar from "components/system/window/titleBar/styledTitlebar";
import useTitlebarContextMenu from "components/system/window/titleBar/useTitlebarContextMenu";
import useWindowActions from "components/system/window/titleBar/useWindowActions";
import {
    CloseIcon,
    MaximizedIcon,
    MaximizeIcon,
    MinimizeIcon,
} from "components/system/window/titleBar/WindowActionIcons";
import { useProcesses } from "contexts/process";
import { useSession } from "contexts/session";
import Button from "styles/common/Button"; // Copy button Style and change it to material ui theme 
import Icon from "styles/common/Icon";
import useDoubleClick from "utils/useDoubleClick";
import React from "react";

type TitlebarProps = {
    id: string;
};

const Titlebar = ({ id }: TitlebarProps): JSX.Element => {
    const {
        processes: {
            [id]: {
                autoSizing = false,
                icon = "",
                lockAspectRatio = false,
                title = "",
                maximized = false,
            } = {},
        },
    } = useProcesses();
    const { foregroundId } = useSession();
    const isForeground = id === foregroundId;
    const { onClose, onMaximize, onMinimize } = useWindowActions(id);
    const disableMaximize = autoSizing && !lockAspectRatio;
    const onClickClose = useDoubleClick(onClose);
    const onClickMaximize = useDoubleClick(onMaximize);

    return (
        <StyledTitlebar
            className="handle"
            foreground={isForeground}
            {...useTitlebarContextMenu(id)}
        >
            <Button as="h1" {...(!disableMaximize ? onClickMaximize : {})}>
                <figure>
                    <Icon src={icon} alt={title} imgSize={16} {...onClickClose} />
                    <figcaption>{title}</figcaption>
                </figure>
            </Button>
            <nav className="cancel">
                <Button className="minimize" onClick={onMinimize} title="Minimize">
                    <MinimizeIcon />
                </Button>
                <Button
                    className="maximize"
                    disabled={disableMaximize}
                    onClick={onMaximize}
                    title="Maximize"
                >
                    {maximized ? <MaximizedIcon /> : <MaximizeIcon />}
                </Button>
                <Button className="close" onClick={onClose} title="Close">
                    <CloseIcon />
                </Button>
            </nav>
        </StyledTitlebar>
    );
};

export default Titlebar;
