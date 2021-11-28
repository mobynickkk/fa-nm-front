import React, {useMemo, useState} from "react";
import "./fourierWavelet.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FourierWaveletForm from "./FourierWaveletForm";
import FourierWaveletGraphs from "./FourierWaveletGraphs";
import {EMPTY_GRAPHS, parseData, validateInput} from "./utils";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

const FourierWavelet = ({ calculateTransform }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [graphs, setGraphs] = useState(EMPTY_GRAPHS);

    const steps = useMemo(() => ["Введите данные для анализа", "Результаты"], []);

    const getGraphs = calculateTransform({
        url: 'http://127.0.0.1:5000/graphs/',
        parseDataCallback: parseData,
        checkDataCallback: validateInput,
        onSuccessCallback: setGraphs
    })

    return (
        <>
            <Stepper sx={{ marginLeft: '20vh', marginRight: '20vh' }} activeStep={activeStep}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === 0 ? (
                <FourierWaveletForm calculateTransform={getGraphs}/>
            ) : (
                <FourierWaveletGraphs graphs={graphs} setGraphs={setGraphs} calculateTransform={calculateTransform} />
            )}
            <Paper sx={{ position: 'fixed', width: '100%', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={activeStep}
                    onChange={(event, newValue) => {
                        setActiveStep(newValue);
                    }}
                >
                    <BottomNavigationAction label="Ввод данных" icon={<ArrowBackIosIcon />} />
                    <BottomNavigationAction label="Графики" icon={<ArrowForwardIosIcon />} />
                </BottomNavigation>
            </Paper>
        </>
    );
}

export default FourierWavelet;
