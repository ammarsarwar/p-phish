import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import PrivateRoutes from "./utils/PrivateRoutes";
import Confirmation from "./pages/Confirmation";
import Onboarding from "./pages/Onboarding";
import ForgetPassword from "./pages/ForgetPassword";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import EmailTemplate from "./pages/EmailTemplate";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Groups from "./pages/Groups";
import SendingProfile from "./pages/SendingProfile";
import CampaignForm from "./pages/CampaignForm";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="auth">
        <Route path="user-registration" element={<Registration />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="user-login" element={<Login />} />
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      {/* private routes to protect unAuth access to pages */}
      <Route element={<PrivateRoutes />}>
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="/root" element={<DashboardLayout />}>
          <Route path="/root/dashboard" element={<Dashboard />} />
          <Route path="/root/campaign" element={<Campaign />} />
          <Route
            path="/root/campaign/launch-campaign"
            element={<CampaignForm />}
          />
          <Route path="/root/email-template" element={<EmailTemplate />} />
          <Route path="/root/user-groups" element={<Groups />} />
          <Route path="/root/landing-page" element={<LandingPage />} />
          <Route path="/root/sending-profile" element={<SendingProfile />} />
          <Route path="/root/help" element={<Support />} />
          <Route path="/root/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
