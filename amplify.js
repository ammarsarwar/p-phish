import { Amplify, Auth } from "aws-amplify";

const region = import.meta.env.VITE_REGION;
const userPoolId = import.meta.env.VITE_USER_POOL_ID;
const userPoolWebClientId = import.meta.env.VITE_USER_POOL_APP_CLIENT_ID;

//configuring aws with the client app
Amplify.configure({
  Auth: {
    region,
    userPoolId,
    userPoolWebClientId,
  },
});
