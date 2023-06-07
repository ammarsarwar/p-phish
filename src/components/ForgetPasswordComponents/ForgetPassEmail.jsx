import "../../../amplify";
import { Auth } from "aws-amplify";
import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormInputs,
  Button,
  Input,
  Subtitle,
  Title,
  ButtonContainer,
} from "../../components/styles/Form.styles";
// import { ErrorBox, ErrorMessage } from "../../components/styles/Global.styles";
import { Message } from "primereact/message";

function ForgetPassEmail({
  setIsOtpSent,
  username,
  setUsername,
  isLoading,
  setIsLoading,
}) {
  // const [error, setError] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await Auth.forgotPassword(username).then((data) => {
        console.log("otp sent");
        setIsOtpSent(true);
      });
    } catch (error) {
      console.log("Error sending otp:", error);
      setError(error.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setValidUserName(EMAIL_REGEX.test(username));
  }, [username]);

  // login regex
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailWarnings = "Please use a valid email address";

  return (
    <FormContainer>
      <FormInputs ai="center">
        <Title>Reset Password</Title>
        <Subtitle>Please enter your email</Subtitle>
        <Input
          type="email"
          placeholder="Enter you email"
          name="email"
          onChange={(e) => setUsername(e.target.value)}
          wt="100%"
          ht="50px"
          autoComplete="off"
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
        />
        {userNameFocus && username && !validUserName ? (
          <Message
            text={emailWarnings}
            severity="warn"
            style={{ fontSize: 12, marginBottom: 15, width: "100%" }}
          />
        ) : null}
        <ButtonContainer>
          <div>
            <Button onClick={handleSubmit} wt="103px">
              {isLoading ? "Loading" : "Send OTP"}
            </Button>
          </div>
        </ButtonContainer>
      </FormInputs>
    </FormContainer>
  );
}

export default ForgetPassEmail;
