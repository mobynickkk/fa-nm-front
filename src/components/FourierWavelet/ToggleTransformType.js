import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

const ToggleTransformType = ({ transformType, setTransformType }) => {

    return (
        <ToggleButtonGroup
            color="primary"
            value={transformType}
            exclusive
            onChange={setTransformType}
        >
            <ToggleButton value="fourier">Фурье</ToggleButton>
            <ToggleButton value="wavelet">Вейвлет</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default ToggleTransformType;
