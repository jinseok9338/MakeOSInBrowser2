import React, { ComponentType, createContext, useState } from "react";


type ApplicationContextType = {
    handlePopoverOpen: (el:HTMLElement | null) => void;
    handlePopoverClose: () => void
};
export const AnchorFunctionContext = createContext<ApplicationContextType | null>(null);

const startPopUpMenuContext = ({ children }:{ children: ComponentType }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    
    const handlePopoverOpen = (el: HTMLElement | null) => {
        setAnchorEl(el);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    
    return (
        < AnchorFunctionContext.Provider value={{ handlePopoverOpen, handlePopoverClose }
}>
    { children }
        </AnchorFunctionContext.Provider >
    )
};

export default startPopUpMenuContext;
