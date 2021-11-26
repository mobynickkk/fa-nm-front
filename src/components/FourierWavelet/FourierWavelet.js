import React, {useMemo, useState} from "react";
import Button from "@mui/material/Button";
import "./fourierWavelet.css";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FourierWaveletForm from "./FourierWaveletForm";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FourierWavelet = ({calculateTransform}) => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = useMemo(() => ["Введите данные для анализа", "Результаты"], []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === 0 ? (
                <FourierWaveletForm calculateTransform={calculateTransform}/>
            ) : (
                <p>hi</p>
            )}
            {activeStep === steps.length ? (
                <>
                    <Typography sx={{mt: 2, mb: 1}}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Box sx={{flex: '1 1 auto'}}/>
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </>
            ) : (
                <>
                    <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{mr: 1}}
                        >
                            Back
                        </Button>
                        <Box sx={{flex: '1 1 auto'}}/>

                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </>
            )}
        </>
    );
}

export default FourierWavelet;
