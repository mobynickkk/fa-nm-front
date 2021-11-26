import React, {useRef, useState} from "react";
import PropTypes from "prop-types";
import "./fileUpload.css";
import AlertTitle from "@mui/material/AlertTitle";
import TransitionAlert from "../TransitionAlert";
import Box from "@mui/material/Box";

const FileUpload = ({ title, setFile, format = 'csv' }) => {
    const [correctExtension, setCorrectExtension] = useState(true);
    const inputRef = useRef(null);

    return (
        <>
            <div>
                <input ref={inputRef} className="file-upload" type="file" name="file" id={title} onChange={event => {
                    if (event.target.files && event.target.files[0].name.split('.').pop() !== format) {
                        setCorrectExtension(false);
                        return;
                    }
                    setCorrectExtension(true);
                    setFile(event.target.files[0]);
                }}/>
                <label htmlFor={title} >
                    <span className="btn-3">{title}</span>
                </label>
            </div>
            <Box>
                {inputRef.current && inputRef.current.files.length > 0 && correctExtension &&
                    <TransitionAlert severity="success">
                        <AlertTitle>Успех</AlertTitle>
                        Файл {inputRef.current.files[0].name} <strong>успешно загружен!</strong>
                    </TransitionAlert>
                }
                {!correctExtension &&
                    <TransitionAlert severity="error">Загружать можно только файлы формата {format}!</TransitionAlert>
                }
            </Box>
        </>
    );
}

FileUpload.propTypes = {
    title: PropTypes.string,
    setFile: PropTypes.func,
}

export default FileUpload;
