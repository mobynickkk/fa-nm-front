import React, { useState } from "react";
import FourierWavelet from "./FourierWavelet/FourierWavelet";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {getSpectrogram, showLoading} from "../backend/utils";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Root = () => {
    const [bdOpen, setBdOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorText, setErrorText] = useState('');
    const showBackdrop = showLoading(setBdOpen);
    const showError = text => {
        setErrorOpen(true);
        setErrorText(text);
    }
    const showSpectrogram = () => console.log(11);

    const onClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setErrorOpen(false);
    }

    return (
        <>
            <main>
                <h1 style={{textAlign: 'center'}}>Фурье- и Вейвлет-Анализ</h1>

                <FourierWavelet calculateTransform={getSpectrogram(showBackdrop, showError, showSpectrogram)} />

            </main>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={bdOpen}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={errorOpen} autoHideDuration={6000}
                      onClose={onClose}>
                <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
                    {errorText}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Root;
