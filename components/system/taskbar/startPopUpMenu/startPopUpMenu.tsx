import { Box, makeStyles, Theme } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import React, { useState, useEffect} from "react"

type StartPopUpMenuProps = {
    el: HTMLDivElement | null
    handleClose: () => void

}

const styles = makeStyles<Theme>((theme) => ({
    popover: {
        // pointerEvents: "none",
    },
}));

const StartPopUpMenu = ({ el, handleClose }: StartPopUpMenuProps) => {
 
   const classes = styles()
    
    return (<Popover
        className ={classes.popover}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        marginThreshold={0}
        disableEnforceFocus={true}
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