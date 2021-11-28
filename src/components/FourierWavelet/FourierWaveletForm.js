import FormGroup from "@mui/material/FormGroup";
import FileUpload from "../common/FileUpload/FileUpload";
import ToggleTransformType from "./ToggleTransformType";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const FourierWaveletForm = ({calculateTransform}) => {
    const [file, setFile] = useState(null);
    const [transformType, setTransformType] = useState("fourier");

    return (
        <Grid container spacing={2} direction="row" className="form__container">
            <Grid item xs={6}>
                <FormGroup className="form">
                    <FileUpload title={'Загрузите csv файл'} setFile={setFile} />
                    <div>
                        <ToggleTransformType transformType={transformType} setTransformType={setTransformType} />
                        <Button onClick={event => {
                            event.preventDefault();
                            calculateTransform({file, transformType});
                        }} variant="outlined">
                            Вычислить
                        </Button>
                    </div>
                </FormGroup>
            </Grid>
            <Grid item xs={6}>
                <Typography className="form">
                    {transformType === 'fourier' ? (
                        <p><strong>Анализ Фурье</strong> — направление в анализе, изучающее каким образом общие математические функции могут быть представлены
                            либо приближены через сумму более простых тригонометрических функций.</p>
                        ) : (
                        <p><strong>Вейвлет</strong> — математическая функция, позволяющая анализировать различные частотные компоненты данных.
                            График функции выглядит как волнообразные колебания с амплитудой, уменьшающейся до нуля вдали от начала координат.</p>
                        )}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                
            </Grid>
        </Grid>
    );
}

export default FourierWaveletForm;
