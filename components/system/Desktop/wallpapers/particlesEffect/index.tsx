import React from "react";
import useParticlesParamsConfig from "components/system/Desktop/wallpapers/particlesEffect/useParticlesPropsConfig";
import Particle from "react-particles-js";

type ParticleEffectProp = {
    children: React.ReactChildren,
    useParticlesParamsConfig: typeof useParticlesParamsConfig
}

const ParticleEffect = ({ children, useParticlesParamsConfig }: ParticleEffectProp): JSX.Element => {

    return (
        <Particle params={{useParticlesParamsConfig}} >
            {children}
        </Particle>
    );
};

export default ParticleEffect;