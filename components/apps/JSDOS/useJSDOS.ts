import { dosOptions, libs, pathPrefix } from "components/apps/JSDOS/config";
import useDosCI from "components/apps/JSDOS/useDosCI";
import { closeWithTransition } from "components/system/window/functions";
import useWindowSize from "components/system/window/useWindowSize";
import { useProcesses } from "contexts/process";
import type { DosInstance } from "emulators-ui/dist/types/js-dos";
import { useEffect, useState } from "react";
import { loadFiles } from "utils/functions";

const useJSDOS = (
    id: string,
    url: string,
    containerRef: React.MutableRefObject<HTMLDivElement | null>
): void => {
    const { updateWindowSize } = useWindowSize(id);
    const [dosInstance, setDosInstance] = useState<DosInstance>();
    const dosCI = useDosCI(id, url, containerRef, dosInstance);
    const { close } = useProcesses();

    useEffect(() => {
        if (!dosInstance && containerRef.current) {
            loadFiles(libs).then(() => {
                window.emulators.pathPrefix = pathPrefix;

                setDosInstance(
                    window.Dos(containerRef.current as HTMLDivElement, dosOptions)
                );
            });
        }
    }, [containerRef, dosInstance]);

    useEffect(() => {
        if (dosCI) {
            updateWindowSize(dosCI.height(), dosCI.width());

            dosCI.events().onMessage((_msgType, _eventType, command, message) => {
                if (command === "LOG_EXEC") {
                    const [dosCommand] = message
                        .replace("Parsing command line: ", "")
                        .split(" ");

                    if (dosCommand.toUpperCase() === "EXIT") {
                        closeWithTransition(close, id);
                    }
                }
            });

            dosCI
                .events()
                .onFrameSize((width, height) =>
                    updateWindowSize(height * 2, width * 2)
                );

            dosCI
                .events()
                .onExit(() =>
                    window.SimpleKeyboardInstances?.emulatorKeyboard?.destroy?.()
                );
        }
    }, [close, dosCI, id, updateWindowSize]);
};

export default useJSDOS;
