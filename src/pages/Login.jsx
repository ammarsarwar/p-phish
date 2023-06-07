import "../../amplify";
import { Auth } from "aws-amplify";
import React, { useRef, useEffect, useState } from "react";
import {
  FormContainer,
  FormInputs,
  Button,
  Input,
  Subtitle,
  Title,
  Sublink,
} from "../components/styles/Form.styles";
import { Link, useNavigate } from "react-router-dom";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const emailWarnings = "Please use a valid email address";
  const passwordWarnings = `Password must contain: A lower case letter, an upper case letter, a number`;

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  // login regex
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

  const handleSignIn = async () => {
    setIsLoading(true);
    // if button enabled with JS hack
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const user = await Auth.signIn(email, pwd);
      sessionStorage.setItem(
        "authToken",
        user.signInUserSession.accessToken.jwtToken
      );
      setIsLoading(false);
      navigate("/root/dashboard");
    } catch (error) {
      setErrMsg(error.message);
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormInputs>
        {errMsg ? (
          // <Alert
          //   ref={errRef}
          //   severity="error"
          //   style={{ marginBottom: 20, fontSize: 12 }}
          // >
          //   {errMsg}
          // </Alert>
          <Message
            ref={errRef}
            text={errMsg}
            severity="error"
            style={{ marginBottom: 20, fontSize: 10 }}
          />
        ) : null}
        <Title>Login to your account</Title>
        <Subtitle>Hi👋 Welcome to P Phish</Subtitle>
        <Input
          autoComplete="off"
          required
          type="email"
          placeholder="Enter you email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          validated={validEmail}
          ht="50px"
        />
        {emailFocus && email && !validEmail ? (
          // <Alert severity="error" style={{ fontSize: 14, marginBottom: 15 }}>
          //   Please use a valid email address
          // </Alert>
          <Message
            text={emailWarnings}
            severity="warn"
            style={{ fontSize: 12, marginBottom: 15 }}
          />
        ) : null}
        <Input
          autoComplete="off"
          required
          type="password"
          placeholder="Enter you password."
          name="password"
          onChange={(e) => setPwd(e.target.value)}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          validated={validPwd}
          ht="50px"
        />
        {pwdFocus && pwd && !validPwd ? (
          // <Alert severity="error" style={{ fontSize: 14, marginBottom: 15 }}>
          //   Password must contain:
          //   <br />
          //   A lower case letter
          //   <br />
          //   An upper case letter
          //   <br />A number
          // </Alert>
          <Message
            text={passwordWarnings}
            severity="warn"
            style={{ fontSize: 8, marginBottom: 15 }}
          />
        ) : null}
        <div>
          <Link
            to={"/auth/forget-password"}
            style={{
              textDecoration: "none",
            }}
          >
            <Sublink mb="15px" ta="right" fs="12px">
              Forgot Password?
            </Sublink>
          </Link>
          <Button
            onClick={handleSignIn}
            wt="100%"
            ht="40px"
            disabled={!validEmail || !validPwd ? true : false}
          >
            {isLoading ? "Loading" : "login"}
          </Button>
        </div>
        <div>
          <Sublink mt="15px" ta="center" fs="13px">
            <Link
              to="/auth/user-registration"
              style={{ textDecoration: "none" }}
            >
              I have not registered yet?
            </Link>
          </Sublink>
        </div>
      </FormInputs>
      {isLoading ? <ProgressSpinner style={{ width: "40px" }} /> : null}
    </FormContainer>
  );
}

export default Login;
