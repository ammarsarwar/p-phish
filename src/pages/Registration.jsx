import "../../amplify";
import { Auth } from "aws-amplify";
import React, { useState, useRef, useEffect } from "react";
import {
  FormContainer,
  FormInputs,
  Button,
  Input,
  Subtitle,
  Title,
  ButtonContainer,
  Sublink,
} from "../components/styles/Form.styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { globalUser } from "../features/authentication/userAuthSlice";
import { Message } from "primereact/message";
import { ProgressSpinner } from "primereact/progressspinner";

function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const emailWarnings = "Please use a valid email address";
  const passwordWarnings = `Password must contain: A lower case letter, an upper case letter, a number`;
  const confirmPasswordWarn = "Confirm password doesn't match ";
  // const nameWarn = "Enter a valid name";

  // useEffect(() => {
  //   setValidName(USER_REGEX.test(user));
  // }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    if (validPwd) {
      setValidMatch(pwd === matchPwd);
    }
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, matchPwd]);

  // login regex
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
  // const USER_REGEX = /^[A-z][A-z0-9-_]{2,23}$/;

  //redux logic
  const dispatch = useDispatch();

  const handleSignup = async () => {
    setIsLoading(true);
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: pwd,
        autoSignIn: {
          enabled: false,
        },
      });
      const authEmail = user.username;
      dispatch(globalUser(authEmail));
      sessionStorage.setItem(
        "authToken",
        "eyJraWQiOiJ4cUFLMHZrQUlWTmFNNDMzaDE5VCtSMnNCZFZvNlEwckUrUE8zSjZOc1FjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJlNTlhNDhmMi03ZjMxLTQzYTMtYjVhYS05YjRjMWRkMzdjMGYiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9WVlJNb3gzak4iLCJjbGllbnRfaWQiOiIxZzJlZWM2MWcxZGVvaGlnM2ZiZDE1ZWNmNyIsIm9yaWdpbl9qdGkiOiJkYmU5NmM3NC1lNTA1LTQxMjItOTI1Ni0zODQ0YTI5MWNhMWMiLCJldmVudF9pZCI6IjRhMGEyOTJhLTQzMDgtNDE0Ny04OGZhLTA1N2Y1YmNkZmJjZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2ODI5NDk1MTUsImV4cCI6MTY4Mjk1MzExNSwiaWF0IjoxNjgyOTQ5NTE1LCJqdGkiOiI2OGE0Mzg0OS1kYzg1LTQyNWMtOTViOS1iZjY5Yzk5YmUxZDEiLCJ1c2VybmFtZSI6ImU1OWE0OGYyLTdmMzEtNDNhMy1iNWFhLTliNGMxZGQzN2MwZiJ9.al-9BpZ5VXZkdWOu9cso5D9jKkSvxGIo-6_WAJ2xloXCin_nXFLGt8uXo8uK731o4uauFND-Q1YAaSUW2hecBY0-qM59iJeIuuiv8XfVt-MFCwcFVyvcr-aTZs_iSWHh-IB7mAw6xrO0fINKhFoubz_CVRXyM48bf7cBxdM51hZkGOyOLUYSvorXIHqqHTXtExBpa_pVua0uq1fdMzxeZrxbsuiFwP46DSzp8PNQiVjylbhmbvUOdWtLeIv45btRPanMrdcAtrTKtf-vEkre7fgLQGcXQCzXyO_MJ_mO9lLc7luhwvNxRWQMsiFSnE6Xg1ST4XEyBB5mK1AG9qjdlg"
      );
      navigate("/auth/confirmation");
    } catch (error) {
      console.log("Error signing up:", error);
      setErrMsg(error.message);
    }
    setIsLoading(false);
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
        <Title>Create an account</Title>
        <Subtitle>Hi👋 Welcome to P Phish</Subtitle>
        {/* <Input
          autoComplete="off"
          required
          type="name"
          placeholder="Enter your name"
          name="email"
          onChange={(e) => setUser(e.target.value)}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          validated={validName}
          ht="50px"
        /> */}
        {/* {userFocus && user && !validName ? (
          <Message
            text={nameWarn}
            severity="warn"
            style={{ fontSize: 12, marginBottom: 15 }}
          />
        ) : null} */}
        <Input
          autoComplete="off"
          required
          type="email"
          placeholder="Enter your email"
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
            style={{ fontSize: 12, marginBottom: 15, textAlign: "start" }}
          />
        ) : null}
        <Input
          autoComplete="off"
          required
          type="password"
          placeholder="Enter your password."
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
            style={{ fontSize: 12, marginBottom: 15, textAlign: "start" }}
          />
        ) : null}
        <Input
          autoComplete="off"
          required
          type="password"
          placeholder="Confirm your password"
          name="email"
          onChange={(e) => setMatchPwd(e.target.value)}
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
          validated={validMatch}
          ht="50px"
        />
        {matchFocus && matchPwd && !validMatch ? (
          // <Alert severity="error" style={{ fontSize: 14, marginBottom: 15 }}>
          //   Password does not match
          // </Alert>
          <Message
            text={confirmPasswordWarn}
            severity="warn"
            style={{ fontSize: 12, marginBottom: 15, textAlign: "start" }}
          />
        ) : null}
        <Button
          onClick={handleSignup}
          wt="100%"
          ht="40px"
          disabled={!validEmail || !validPwd ? true : false}
        >
          {isLoading ? "Loading..." : "Signup"}
        </Button>
        <div>
          <Sublink mt="15px" ta="center" fs="13px">
            <Link to="/auth/user-login" style={{ textDecoration: "none" }}>
              I already have an account
            </Link>
          </Sublink>
        </div>
      </FormInputs>
      {isLoading ? <ProgressSpinner style={{ width: "40px" }} /> : null}
    </FormContainer>
  );
}

export default Registration;
