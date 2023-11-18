import React, { useState } from "react";
import "./login.css";
import { Paper, TextField, Box, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Alert from "@mui/material/Alert";
import Lottie from "lottie-react";
import GIFimage from "./GIF.json";
import { Form, redirect } from "react-router-dom";

const isEmail = (email) => /^[^ ]+@[^ ]+\.[a-z]{2,4}$/i.test(email);

const isPassword = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/i.test(
        password
    );

const Login = () => {


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //form validity
    const [formvalid, setformvalid] = useState();

    //input given
    const [EmailInput, setEmailInput] = useState();
    const [UsernameInput, setUsernameInput] = useState();
    const [PasswordInput, setPasswordInput] = useState();

    //input error
    const [EmailError, setEmailError] = useState(false);
    const [UsernameError, setUsernameError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);

    //handle username error with onkeyup
    const handleUsername = () => {
        if (!UsernameInput) {
            setUsernameError(true);
            return;
        }
        setUsernameError(false);
    };

    //handle email error with onkeyup
    const handleEmail = () => {
        if (!isEmail(EmailInput)) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
    };

    //handle password error with onkeyup
    const handlePassword = () => {
        if (!isPassword(PasswordInput)) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
    };

    const handleSubmit = (e) => {
        if (UsernameError || !UsernameInput) {
            setformvalid("Please Enter Username.");
            return;
        }

        if (EmailError || !EmailInput) {
            setformvalid("Email is invalid. Please Re-Enter.");
            return;
        }
        if (PasswordError || !PasswordInput) {
            setformvalid("Password doesn't match. Please Re-Enter.");
            return;
        }
        setformvalid(null);
    };

    return (
        <div className="back">
            <Paper elevation={0} className="main_container">
                <Form className="LoginBox" method="post" action="/foodies">
                    <h1>Login</h1>
                    <div className="input_fields">
                        <Box className="Username">
                            <PersonIcon className="icons" />
                            <TextField
                                id="username_text"
                                label="Username"
                                type="username"
                                name="username"
                                variant="standard"
                                placeholder="Enter Username"
                                required
                                fullWidth
                                error={UsernameError}
                                value={UsernameInput}
                                onChange={(event) => setUsernameInput(event.target.value)}
                                onKeyUp={handleUsername}
                            />
                        </Box>
                        <Box className="Email">
                            <EmailIcon className="icons" />
                            <TextField
                                id="email_text"
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                variant="standard"
                                required
                                fullWidth
                                error={EmailError}
                                value={EmailInput}
                                onChange={(event) => setEmailInput(event.target.value)}
                                onKeyUp={handleEmail}
                            />
                        </Box>
                        <Box className="Password">
                            <div className="password_box">
                                <LockIcon className="icons" />
                                <TextField
                                    id="password_text"
                                    label="Password"
                                    name="password"
                                    placeholder="Enter Password"
                                    variant="standard"
                                    required
                                    fullWidth
                                    value={PasswordInput}
                                    onChange={(event) => setPasswordInput(event.target.value)}
                                    error={PasswordError}
                                    onKeyUp={handlePassword}
                                    type={showPassword ? "text" : "password"}
                                />
                            </div>
                            <div className="password_show">
                                <input
                                    type="checkbox"
                                    id="check"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                />
                                <p>{showPassword ? "Hide Password" : "Show Password"}</p>
                            </div>
                        </Box>
                    </div>
                    <div className="submit_btn">
                        <button onClick={handleSubmit} to="landing">
                            Login
                        </button>
                        {formvalid && <Alert severity="error">{formvalid}</Alert>}
                        <Link href="#">Forgot Password?</Link>
                    </div>
                    <div className="lower_links">
                        <p>Didn't have an Account?</p>
                        <Link href="#">Sign Up!</Link>
                    </div>
                </Form>
                <div className="image_container">
                    <Lottie loop={true} animationData={GIFimage} />
                </div>
            </Paper>
        </div>
    );
};

const Loginaction = async ({ request }) => {

    const data = await request.formData()

    const submission = {
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password")
    }
    console.log(submission);


    return redirect('/foodies/landing');

}

export { Login, Loginaction }
