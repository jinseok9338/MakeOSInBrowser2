import Popover from '@material-ui/core/Popover';
import React from "react"

type StartPopUpMenuProps = {
    el: HTMLDivElement | null
    handleClose: () => void

}

const StartPopUpMenu = ({ el, handleClose }: StartPopUpMenuProps) => {
 
    const open = Boolean(el)

    return (<Popover
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        open={open}
        anchorEl={el as HTMLDivElement}
        onClose={()=>handleClose()}
    >
        The content of the Popover.
    </Popover>)
}

export default StartPopUpMenu;

// make context that contains open and close function and refElement and wrap the Start Menu 