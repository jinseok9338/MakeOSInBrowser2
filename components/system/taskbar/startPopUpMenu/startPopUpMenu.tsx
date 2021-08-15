import { Box } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import React, { useState, useEffect} from "react"

type StartPopUpMenuProps = {
    el: HTMLDivElement | null
    handleClose: () => void

}

const StartPopUpMenu = ({ el, handleClose }: StartPopUpMenuProps) => {
 
   
    
    return (<Popover
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        open={!!el}
        anchorEl={el}
        onClose={() => handleClose()}
    >
        <Box>
            This is the box with popper
       </Box>
    </Popover>)
}

export default StartPopUpMenu;
//Problem with not updating the elment 