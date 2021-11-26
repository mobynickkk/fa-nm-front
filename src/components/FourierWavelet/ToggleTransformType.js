import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import "./fourierWavelet.css";

const ToggleTransformType = ({ transformType, setTransformType }) => {

    return (
        <ToggleButtonGroup
            className="toggle-group"
            color="primary"
            value={transformType}
            exclusive
            onChange={(event, value) => setTransformType(value)}
        >
            <ToggleButton value="fourier">Фурье</ToggleButton>
            <ToggleButton value="wavelet">Вейвлет</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleTransformType;
