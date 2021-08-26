import { ParticlesProps, IParticlesParams } from "react-particles-js";
import { particlePropsType } from "components/system/Desktop/wallpapers/particlesEffect/particlesPropsConfig";
import { useState, useEffect } from "react";



const useParticlesParamsConfig = (particleOptions: particlePropsType): IParticlesParams =>  {
    
    const randomProperty = function (obj: { [x: string]: IParticlesParams; }) {
        const keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };

    const [particleSetting, setParticleSetting] = useState<IParticlesParams>();

    useEffect(() => {
        setParticleSetting(() => randomProperty(particleOptions));
    },[]);
   

    return particleSetting as IParticlesParams ;
      
    
      
};


export default useParticlesParamsConfig;
