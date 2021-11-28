import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Slider from "@mui/material/Slider";

const FourierWaveletGraph = ({ item, main, onChange }) => {
    return (
        <>
            <h3>{item.title}</h3>
            {item.src ? (
                    <img
                        style={{
                            width: 400,
                            height: 350,
                        }}
                        alt={item.title}
                        src={item.src}
                    />
                ) : (
                    <Skeleton variant="rectangular" width={400} height={350} />
                )
            }
            {main && (
                <Slider
                    className="freq-regulation"
                    aria-label="Включенные частоты"
                    sx={{ width: 400 }}
                    defaultValue={item.maxFreq}
                    getAriaValueText={value => `${value} Hz`}
                    valueLabelDisplay="auto"
                    step={item.stepFreq}
                    marks
                    min={item.minFreq}
                    max={item.maxFreq}
                    onChangeCommitted={(event, value) => {
                        onChange(value);
                    }}
                />
                )}
        </>
    );
}

export default FourierWaveletGraph;
