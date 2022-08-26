import { useEffect, useState } from "react"
import { Slide, SlideProps, Snackbar, SnackbarContent } from "@mui/material"
import { SnackbarOrigin } from "@mui/material"



interface stateInterface extends SnackbarOrigin {
    open: boolean,
    message: string
}
type TransitionProps = Omit<SlideProps, 'direction'>;
const transition = (props: TransitionProps) => {
    return <Slide {...props} direction='up' />
}

const ErorrSnack = (props) => {

    const state: stateInterface = props.state
    const setState = props.setState

    const { open, vertical, horizontal, message } = state

    useEffect(()=>{
        console.table([['open',open],['vertical',vertical],['horizental',horizontal],['message',message]]);
        console.log('open:',props.state.open);
        
    })

    return(
        <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            TransitionComponent={transition}
            autoHideDuration={2000}
            onClose={() => setState({ ...state, open: false })}
        >
            <SnackbarContent
                sx={{ 'background': 'red', color: 'black' }}
                message={message}
            />
        </Snackbar>
    )
}

export default ErorrSnack