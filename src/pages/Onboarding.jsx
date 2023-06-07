import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  MainContainer,
  Steppers,
} from "../components/styles/Onboarding.styles";
import TenantInfo from "../components/TenantOnboardComponents/TenantInfo";
import Subscription from "../components/TenantOnboardComponents/Subscription";
import PaymentOption from "../components/TenantOnboardComponents/PaymentOption";
import DashboardRedirect from "../components/TenantOnboardComponents/DashboardRedirect";
import DashboardConfirm from "../components/TenantOnboardComponents/DashboardConfirm";
//prime
import { Steps } from "primereact/steps";
import { Image } from "primereact/image";
import Logo from "../assets/logo.jpg";

function Onboarding() {
  const [tenantInfo, setTenantInfo] = useState({
    orgName: "",
    domainName: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const items = [
    {
      label: "Tenant Information",
    },
    {
      label: "Subscription Plan",
    },
    {
      label: "Payment",
    },
    {
      label: "Confirmation",
    },
    {
      label: "Dashboard",
    },
  ];

  return (
    <>
      <Container>
        <LogoContainer>
          <Image src={Logo} alt="P-Phish" width="100" />
          <Steppers>
            <Steps
              style={{ fontSize: 13 }}
              model={items}
              activeIndex={activeStep}
              readOnly={true}
            />
          </Steppers>
        </LogoContainer>
        <MainContainer>
          {activeStep === 0 && <TenantInfo handleNext={handleNext} />}
          {activeStep === 1 && (
            <Subscription handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 2 && (
            <PaymentOption handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 3 && (
            <DashboardConfirm handleNext={handleNext} handleBack={handleBack} />
          )}
          {activeStep === 4 && <DashboardRedirect />}
        </MainContainer>
      </Container>
    </>
  );
}

export default Onboarding;
