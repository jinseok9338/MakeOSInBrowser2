
import type { ComponentProcessProps } from "components/system/Apps/RenderComponent";
import ContainerComponent from "utils/ContainerComponent";
import StyledGBA from "./StyledGBA";


// Styled compoent is the styled component
//Children is Emulator itself

const GBA = ({ id }: ComponentProcessProps): JSX.Element =>
    ContainerComponent(id, useJSDOS, StyledGBA, emulator);

export default GBA;
