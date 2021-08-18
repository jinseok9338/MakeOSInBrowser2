import StyledTaskbarEntries from "components/system/taskbar/taskbarEntries/StyledTaskbarEntries";
import { ProcessConsumer } from "contexts/process";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import React from "react";

const TaskbarEntry = dynamic(
    () => import("components/system/taskbar/taskbarEntry")
);

const TaskbarEntries = (): JSX.Element => (
    <StyledTaskbarEntries>
        <ProcessConsumer>
            {({ processes = {} }) => (
                <AnimatePresence>
                    {Object.entries(processes)
                        .filter(([, { closing }]) => !closing)
                        .map(([id, { icon, title }]) => (
                            <TaskbarEntry key={id} icon={icon} id={id} title={title} />
                        ))}
                </AnimatePresence>
            )}
        </ProcessConsumer>
    </StyledTaskbarEntries>
);

export default TaskbarEntries;
