import React, { createContext } from "react";
import "../../amplify";
import { Auth } from "aws-amplify";

const AccountContext = createContext();

// const region = import.meta.env.VITE_REGION;
// const userPoolId = import.meta.env.VITE_USER_POOL_ID;
// const userPoolWebClientId = import.meta.env.VITE_USER_POOL_APP_CLIENT_ID;

// //configuring aws with the client app
// Amplify.configure({
//   Auth: {
//     region,
//     userPoolId,
//     userPoolWebClientId,
//   },
// });

function Acounts(props) {
  const authenticate = async (username, password) => {
    await new Promise((resolve, reject) => {
      Auth.signIn(username, password, {
        onSuccess: (data) => {
          console.log("success", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.error("onFailure:", err);
          reject(err);
        },
      });
    });
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
}

export { Acounts, AccountContext };
