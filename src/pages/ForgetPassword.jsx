import React, { useState } from "react";
import ForgetPass from "../components/ForgetPasswordComponents/ForgetPass";
import ForgetPassEmail from "../components/ForgetPasswordComponents/ForgetPassEmail";

function ForgetPassword() {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <>
      {isOtpSent ? (
        <ForgetPass
          username={username}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <ForgetPassEmail
          setIsOtpSent={setIsOtpSent}
          username={username}
          setUsername={setUsername}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </>
  );
}

export default ForgetPassword;
