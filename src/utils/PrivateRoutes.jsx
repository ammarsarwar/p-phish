import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Auth } from "aws-amplify";

const PrivateRoutes = () => {
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((data) => console.log("dsgkhsfakg hello", data))
      .catch((err) => console.log(err));
  }, []);

  const authen = sessionStorage.getItem("authToken");
  return authen ? <Outlet /> : <Navigate to="/auth/user-login" />;
};

export default PrivateRoutes;
