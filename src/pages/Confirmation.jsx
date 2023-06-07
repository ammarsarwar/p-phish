import "../../amplify";
import React, { useState, useEffect } from "react";
import { MainContainer } from "../components/styles/Global.styles";
import {
  FormInputs,
  Button,
  Input,
  Title,
  Subtitle,
} from "../components/styles/Form.styles";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import { ProgressSpinner } from "primereact/progressspinner";
import { Message } from "primereact/message";

function Confirmation() {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [validOtp, setValidOtp] = useState(false);
  const [otpFocus, setOtpFocus] = useState(false);

  const OTP_REGEX = /^\d+$/;
  const otp_warn = "Please enter valid OTP";

  useEffect(() => {
    setValidOtp(OTP_REGEX.test(code));
  }, [code]);

  // for route navigation
  const navigate = useNavigate();

  // for redux
  const username = useSelector((state) => state.auth.user);

  // user authentication
  const handleConfirmation = async () => {
    setIsLoading(true);
    const v1 = OTP_REGEX.test(code);
    if (!v1) {
      setErrMsg("Invalid OTP");
      return;
    }
    try {
      const { user } = await Auth.confirmSignUp(username, code);
      navigate("/onboarding");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
    setIsLoading(false);
  };

  return (
    <MainContainer>
      <FormInputs ai="center">
        <Title>Enter your OTP</Title>
        <Subtitle>Please check your email for OTP</Subtitle>
        {/* <Input
            wt="30%"
            type="number"
            placeholder="000000"
            name="otp"
            onChange={(e) => setCode(e.target.value)}
          /> */}
        <InputText
          placeholder="00000"
          keyfilter="int"
          value={code}
          style={{ marginBottom: 20, marginTop: 10 }}
          onChange={(e) => setCode(e.target.value)}
          onFocus={() => setOtpFocus(true)}
          onBlur={() => setOtpFocus(false)}
          validated={validOtp}
        />
        {otpFocus && code && !validOtp ? (
          <Message
            text={otp_warn}
            severity="warn"
            style={{ fontSize: 12, marginBottom: 15 }}
          />
        ) : null}
        <Button onClick={handleConfirmation}>
          {isLoading ? "Loading..." : "Confirm"}
        </Button>
      </FormInputs>
      {isLoading ? <ProgressSpinner style={{ width: "40px" }} /> : null}
    </MainContainer>
  );
}

export default Confirmation;
