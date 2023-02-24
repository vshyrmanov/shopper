import React, {useState} from 'react';
import {FormBox, TabsBox} from "./Styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <span>{children}</span>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const LoginForm = ({ helper, formValues, buttonLoader }) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <FormBox>
            <TabsBox>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sign in" {...a11yProps(0)} />
                    <Tab label="Register" {...a11yProps(1)} />

                </Tabs>
            </TabsBox>
            <TabPanel value={value} index={1}>
                <TextField
                    value={formValues.firstName}
                    onChange={helper.handleFirstName}
                    className="field" fullWidth label="First name" variant="standard" />
                <TextField
                    value={formValues.lastName}
                    onChange={helper.handleLastName}
                    id="outlined-basic" className="field" fullWidth label="Last name (Not required)" variant="standard" />
                <TextField
                    value={formValues.login}
                    onChange={helper.handleLogin}
                    id="outlined-basic" className="field" fullWidth label="Login" variant="standard" />
                <TextField
                    value={formValues.password}
                    onChange={helper.handlePassword}
                    id="outlined-basic" className="field" fullWidth label="Password" type="password" variant="standard" />
                <Button
                    onClick={helper.sendRegister}
                    variant="contained" color="success" fullWidth>{buttonLoader ? "Loading ..." : "Register"}</Button>
            </TabPanel>
            <TabPanel value={value} index={0}>
                <TextField
                    value={formValues.login}
                    onChange={helper.handleLogin}
                    id="outlined-basic" className="field" fullWidth label="Login" variant="standard"/>
                <TextField
                    value={formValues.password}
                    onChange={helper.handlePassword}
                    id="outlined-basic" className="field" fullWidth label="Password" type="password" variant="standard"/>
                <Button
                    onClick={helper.sendLogin}
                    variant="contained" color="success" fullWidth>{buttonLoader ? "Loading ..." : "Sign in"}</Button>
            </TabPanel>
        </FormBox>
    );
};

export default LoginForm;