import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ToggleTransformType from "./ToggleTransformType";
import FileUpload from "../common/FileUpload";

const FourierWavelet = () => {
    const [file, setFile] = useState(null);
    const [transformType, setTransformType] = useState("fourier");

    return (
        <Container className={'main-container'}>
            <br />
            <h1 style={{textAlign: 'center'}}>Фурье- и Вейвлет-Анализ</h1>
            <br />
            <FormGroup>
                <FileUpload title={'Загрузите csv файл'} setFile={setFile} />
                <ToggleTransformType transformType={transformType} setTransformType={setTransformType} />
                <Button variant="outlined">Вычислить</Button>
            </FormGroup>
        </Container>
    );
}

export default FourierWavelet;
