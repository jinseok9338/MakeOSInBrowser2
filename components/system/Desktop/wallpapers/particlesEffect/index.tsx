import React from "react";
import Particle, { IParticlesParams } from "react-particles-js";

export type ParticleEffectProp = {
    ParticlesParamsConfig: IParticlesParams
}

const ParticleEffect = ({ ParticlesParamsConfig }: ParticleEffectProp): JSX.Element => {

    return (
        <Particle params={ ParticlesParamsConfig} />);
};


export default ParticleEffect;