import { useContext, useEffect, useState } from "react";
import { GbaContext } from "react-gbajs";
import { loadFiles } from "utils/functions";


//First we need a way to import the file into the emulator
//Which means we need some sort of button first that loads the file into the emulator
//We need a seperate taskbar for the button
const libs = ["/libs/pokemon/PokemonGL.gba"];


export const useGBA = (
    id: string,
    url: string,
    containerRef: React.MutableRefObject<HTMLDivElement | null>
): void => {
    const {
        play,
    } = useContext(GbaContext);
   
    const [gameRom, setGameRom] = useState<unknown>();
   
    useEffect(() => {
        loadFiles(libs).then((bf) => {
            const gameRom = getGameRom();
        }).then(() => {
            play({ newRomBuffer: gameRom });
        });
    }, []);
    
};