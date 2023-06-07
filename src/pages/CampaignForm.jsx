import React from "react";
import { Steps } from "primereact/steps";
import { useState } from "react";
import {
  GroupContainer,
  GroupHead,
  GroupMain,
} from "../components/styles/Groups.styles";
import CampaignName from "../components/DashboardComponents/Wizard Form/CampaignName";
import EmailTempName from "../components/DashboardComponents/Wizard Form/EmailTempName";
import LandingPageName from "../components/DashboardComponents/Wizard Form/LandingPageName";
import LaunchDate from "../components/DashboardComponents/Wizard Form/LaunchDate";
import SendingProfileName from "../components/DashboardComponents/Wizard Form/SendingProfileName";
import UrlName from "../components/DashboardComponents/Wizard Form/UrlName";
import UserGroupName from "../components/DashboardComponents/Wizard Form/UserGroupName";

const CampaignForm = () => {
  const items = [
    {
      label: "Campaign Name",
    },
    {
      label: "Email Template",
    },
    {
      label: "Landing Page",
    },
    {
      label: "Sending Profile",
    },

    {
      label: "Users&Groups",
    },
    {
      label: "Launch date",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <GroupContainer>
        <GroupHead>
          <Steps
            style={{ fontSize: 13 }}
            model={items}
            activeIndex={activeStep}
            readOnly={true}
          />
        </GroupHead>
        <GroupMain>
          {activeStep === 0 && <CampaignName handleNext={handleNext} />}
          {activeStep === 1 && (
            <EmailTempName handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 2 && (
            <LandingPageName handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 3 && (
            <SendingProfileName
              handleNext={handleNext}
              handleBack={handleBack}
            />
          )}
          {/* {activeStep === 4 && (
            <UrlName handleNext={handleNext} handleBack={handleBack} />
          )} */}
          {activeStep === 4 && (
            <UserGroupName handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 5 && (
            <LaunchDate handleNext={handleNext} handleBack={handleBack} />
          )}
        </GroupMain>
      </GroupContainer>
    </>
  );
};

export default CampaignForm;
