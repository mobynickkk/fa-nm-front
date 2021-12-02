import React from "react";
import Grid from "@mui/material/Grid";
import FourierWaveletGraph from "./FourierWaveletGraph";
import Typography from "@mui/material/Typography";

const FourierWaveletGraphs = ({ graphs, setGraphs, calculateTransform }) => {
    const handleFreqResponse = graphs => {
        setGraphs(prevGraphs => ({ ...graphs, main: prevGraphs.main, source: prevGraphs.source }));
    }

    const getGraphs = calculateTransform({
        url: 'https://fa-back.herokuapp.com/freq',
        headers: { 'Content-Type': 'application/json' },
        checkDataCallback: () => true,
        onSuccessCallback: handleFreqResponse
    })

    const handleFreqChange = value => {
        getGraphs({ values: graphs.values, maxFrequency: value })
    }

    return (
        <Grid container sx={{ marginBottom: '15vh' }} spacing={{ xs: 2, md: 10 }} className="graphs" >
            <Grid item xs={6}>
                <FourierWaveletGraph item={graphs.main} main onChange={handleFreqChange} />
            </Grid>
            <Grid item xs={6}>
                <FourierWaveletGraph item={graphs.changeable} />
            </Grid>
            <Grid item xs={6}>
                <FourierWaveletGraph item={graphs.source} />
            </Grid>
            <Grid item xs={6}>
                <FourierWaveletGraph item={graphs.target} />
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    <strong>Значение дисперсии</strong> для данного разложения составляет {graphs.dispersion}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default FourierWaveletGraphs;
