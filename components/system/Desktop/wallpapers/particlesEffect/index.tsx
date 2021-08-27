import React from "react";
import Particle, { IParticlesParams } from "react-particles-js";

export type ParticleEffectProp = {
    ParticlesParamsConfig: IParticlesParams
}

const ParticleEffect = ({ ParticlesParamsConfig }: ParticleEffectProp): JSX.Element => {

    return (
        <Particle style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }} params={ParticlesParamsConfig} />);
};


export default ParticleEffect;