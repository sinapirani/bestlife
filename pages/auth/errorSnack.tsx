import { useState } from "react"
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

    const { open, vertical, horizontal } = state

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
                message={state.message}
            />
        </Snackbar>
    )
}

export default ErorrSnack