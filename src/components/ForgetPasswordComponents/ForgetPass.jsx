import "../../../amplify";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import {
  FormContainer,
  FormInputs,
  Button,
  Input,
  Subtitle,
  Title,
  ButtonContainer,
  ResendButton,
} from "../../components/styles/Form.styles";
import { ErrorBox, ErrorMessage } from "../../components/styles/Global.styles";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

function ForgetPass({ username, isLoading, setIsLoading }) {
  // const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [code, setCode] = useState("");
  const [resendCode, setResendCode] = useState("");
  const [error, setError] = useState("");
  const [isDisbaled, setIsDisabled] = useState(true);
  const [timer, setTimer] = useState(60);
  const [isRunning, setIsRunning] = useState(true);

  //navigation
  const navigate = useNavigate();

  // timer for resend otp

  useEffect(() => {
    let interval = null;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        decrementTimer();
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setIsDisabled(false);
      setIsRunning(false);
      setTimer(60);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  function decrementTimer() {
    setTimer((prev) => prev - 1);
  }

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  // end of timer logic

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await Auth.forgotPasswordSubmit(username, code, userPassword).then(
        (data) => {
          console.log("Password Changed");
          navigate("/auth/user-login");
        }
      );
    } catch (error) {
      console.log("Error sending otp:", error);
      setError(error.message);
    }
    setIsLoading(false);
  };

  const handleResend = async () => {
    setIsLoading(true);
    setTimer(60);
    setIsRunning(true);
    setIsDisabled(true);
    console.log("Resending otp");
    try {
      await Auth.forgotPassword(username).then((data) => {
        console.log("Otp resent");
      });
    } catch (error) {
      console.log("Error sending otp:", error);
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <FormContainer>
      <FormInputs ai="center">
        {error ? (
          <ErrorBox>
            <ErrorMessage>{error}</ErrorMessage>
          </ErrorBox>
        ) : null}
        <Title>Reset Password</Title>
        <Subtitle>Please check your email for OTP</Subtitle>
        <Input
          type="number"
          placeholder="Enter OTP"
          name="email"
          onChange={(e) => setCode(e.target.value)}
          wt="100%"
          ht="60px"
        />
        <Input
          type="password"
          placeholder="Enter your password."
          name="password"
          wt="100%"
          ht="60px"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <ButtonContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button onClick={handleSubmit} wt="103px">
              {isLoading ? "Loading..." : "Confirm"}
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ResendButton
                disabled={isDisbaled}
                onClick={handleResend}
                wt="20"
              >
                Resend OTP
              </ResendButton>
              <small style={{ fontSize: 12, color: "red", fontWeight: 500 }}>
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
              </small>
            </div>
          </div>
        </ButtonContainer>
      </FormInputs>
      {isLoading ? <ProgressSpinner style={{ width: "40px" }} /> : null}
    </FormContainer>
  );
}

export default ForgetPass;
