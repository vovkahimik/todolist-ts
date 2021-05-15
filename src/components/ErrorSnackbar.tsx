import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {RequestError, setAppErrorAC} from "./app/app-reducer";


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {
    // const [open, setOpen] = React.useState(true)
    const error = useSelector<RootState, RequestError>(state => state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            // setOpen(false)
            dispatch(setAppErrorAC(null))
        } else {
            setTimeout(() => dispatch(setAppErrorAC(null)), 5000)
        }
    }

    return (
        <Snackbar open={error !== null} autoHideDuration={1000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    )
}
