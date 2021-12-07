import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FourierWaveletGraph = ({ item, main, onChange }) => {
    return (
        <>
            <h3>{item.title}</h3>
            {item.src ? (
                    <img
                        style={{
                            width: 400,
                            height: 350,
                            border: '1px solid white',
                            padding: 3,
                            borderRadius: 3
                        }}
                        alt={item.title}
                        src={item.src}
                    />
                ) : (
                    <Skeleton variant="rectangular" width={400} height={350} />
                )
            }
            {main && (
                <Box sx={{ marginTop: '2vh' }}>
                    <Typography>Срезать верхние частоты до:</Typography>
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
                </Box>
                )}
        </>
    );
}

export default FourierWaveletGraph;
