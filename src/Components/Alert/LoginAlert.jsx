import React from 'react';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";
import {AlertArea} from "./Styled";

const LoginAlert = ({ action, mainText, errorText}) => {

    return (
        <AlertArea>
            <Alert severity="error">
                <AlertTitle>
                    {mainText}
                    <CloseIcon onClick={action} />
                </AlertTitle>
                {errorText} - <strong>check it out!</strong>
            </Alert>
        </AlertArea>
    );
};

export default LoginAlert;