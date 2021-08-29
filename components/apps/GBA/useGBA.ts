import useTitle from "components/system/window/useTitle";
import { useFileSystem } from "contexts/fileSystem";
import { useContext, useEffect, useState } from "react";
import { GbaContext } from "react-gbajs";
import { EMPTY_BUFFER } from "utils/constants";
import { loadFiles } from "utils/functions";
import { RufflePlayer } from "../Ruffle/types";


//First we need a way to import the file into the emulator
//Which means we need some sort of button first that loads the file into the emulator
//We need a seperate taskbar for the button
const libs = "/libs/pokemon/PokemonGL.gba";


export const useGBA = (
    id: string,
    url: string,
    containerRef: React.MutableRefObject<HTMLDivElement | null>
): void => {
    const [player, setPlayer] = useState<RufflePlayer>();
    const {
        play,
    } = useContext(GbaContext);
    const { fs } = useFileSystem();
    const { appendFileToTitle } = useTitle(id);

   //url needs to be Pokemon game url
    useEffect(() => {
        fs?.readFile(libs, (error, contents = EMPTY_BUFFER) => {
            if (!error) {
                //This is type casting not preferred method 
                play({ newRomBuffer: contents as (Uint8Array | undefined), restoreState: undefined });
                
            }
        });
    
    }, []);
    
};