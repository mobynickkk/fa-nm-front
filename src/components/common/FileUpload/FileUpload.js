import React from "react";
import PropTypes from "prop-types";

const FileUpload = ({ title, setFile }) => {

    return (
        <>
            <div>
                <input className="file-upload" type="file" name="file" id={title} onChange={event => {
                    setFile(event.target.files[0]);
                }}/>
                <label form={title} >
                    <span className="input__file-button-text">{title}</span>
                </label>
            </div>
        </>
    );
}

FileUpload.propTypes = {
    title: PropTypes.string,
    setFile: PropTypes.func,
}

export default FileUpload;
