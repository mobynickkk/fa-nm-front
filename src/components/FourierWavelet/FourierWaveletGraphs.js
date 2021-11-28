import React from "react";
import Grid from "@mui/material/Grid";
import FourierWaveletGraph from "./FourierWaveletGraph";

const FourierWaveletGraphs = ({ graphs }) => {


    return (
        <Grid container sx={{ marginBottom: '15vh' }} spacing={{ xs: 2, md: 17 }} className="graphs" >
            <Grid item xs={6}>
                <FourierWaveletGraph item={graphs.main} main />
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
        </Grid>
    );
}

export default FourierWaveletGraphs;
