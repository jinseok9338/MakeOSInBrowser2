import StyledDesktop from "components/system/Desktop/StyledDesktop";
import dynamic from "next/dynamic";
import React,{ useRef } from "react";
import  { ParticleEffectProp } from "./wallpapers/particlesEffect";
import particleProps from "./wallpapers/particlesEffect/particlesPropsConfig";
import useParticlesParamsConfig  from "./wallpapers/particlesEffect/useParticlesPropsConfig";
const ParticleEffect = dynamic(() => import("./wallpapers/particlesEffect"));

type DesktopProps = {
    children: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps): JSX.Element => {
     const desktopRef = useRef<HTMLElement | null>(null);
   
    if (process.browser) {
        require("pathseg");
    }

  

    const particleSetting = useParticlesParamsConfig(particleProps);

    return <StyledDesktop ref={desktopRef}>
        {children}
        <ParticleEffect ParticlesParamsConfig={particleSetting as ParticleEffectProp} />
    </StyledDesktop>;
};

export default Desktop;
