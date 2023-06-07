import React, { useEffect, useState } from "react";
import {
  SubscriptionContainer,
  Wrap,
  MainTitle,
  SubTitle,
  PlansContainer,
  PlansCard,
  PlansCardFooter,
  PlansCardHeader,
  PlansCardBody,
  HeaderPrice,
  HeaderTitle,
  BodyText,
  HeaderWrap,
  Spacer,
} from "../styles/Subscription.styles";
import { plans } from "../../../Plans";
import { AiOutlineCheck } from "react-icons/ai";
import { Button } from "primereact/button";
// import * as AWS from "aws-sdk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { subsInfo } from "../../features/tenantFeature/subscriptionSlice";
// import { Dropdown } from "primereact/dropdown";

function Subscription({ handleNext, handleBack }) {
  const today = new Date().toDateString();
  const selectedCountry = useSelector(
    (state) => state.tenant.personalinfo.country
  );

  // for redux
  const dispatch = useDispatch();

  const [planDetails, setPlanDetails] = useState({
    subsType: "",
    subStartDate: "",
    subsActiveStatus: "",
    planCost: "",
    expiryDate: "",
  });

  const handleSubmit = (selectedPlan) => {
    (planDetails.subsType = selectedPlan.name),
      (planDetails.subStartDate = today),
      (planDetails.planCost = selectedPlan.localprice),
      (planDetails.expiryDate = "02-07-2023"),
      (planDetails.subsActiveStatus = "Active"),
      dispatch(subsInfo(planDetails));
    handleNext();
  };

  return (
    <SubscriptionContainer>
      <HeaderWrap>
        <MainTitle>
          <span style={{ fontWeight: "400", color: "#3A35EC" }}>Flexible</span>{" "}
          Plans
        </MainTitle>
        <SubTitle>Choose a plan that works best for you and your team</SubTitle>
      </HeaderWrap>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          marginBottom: 20,
        }}
      >
        <div>
          <Button label="Back" outlined onClick={handleBack} />
        </div>
        {/* <div style={{ marginLeft: 20 }}>
          <Dropdown
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Country"
            className="w-full md:w-14rem"
            style={{ width: 200, marginBottom: 20 }}
          />
        </div> */}
      </div>
      <PlansContainer>
        {plans.map((plan) => {
          return (
            <PlansCard key={plan.id} cl={plan.bgColor}>
              <PlansCardHeader>
                <Wrap>
                  <HeaderTitle cl={plan.txColor}>{plan.name}</HeaderTitle>
                  <HeaderPrice cl={plan.txColor}>
                    <span style={{ fontWeight: "300", fontSize: "20px" }}>
                      {selectedCountry === "USA"
                        ? plan.internationalprice
                        : plan.localprice}
                    </span>
                  </HeaderPrice>
                </Wrap>
                <Spacer />
                <PlansCardBody>
                  {plan.features.map((item, index) => {
                    return (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <AiOutlineCheck style={{ marginRight: 10 }} />
                        <BodyText cl={plan.txColor}>{item}</BodyText>
                      </div>
                    );
                  })}
                </PlansCardBody>
                <PlansCardFooter>
                  <Button
                    label={plan.btnText}
                    onClick={() => handleSubmit(plan)}
                  />
                </PlansCardFooter>
              </PlansCardHeader>
            </PlansCard>
          );
        })}
      </PlansContainer>
      {/* <div
        style={{
          marginTop: 20,
        }}
      >
        <BackButton onClick={handleBack}>Back</BackButton>
      </div> */}
    </SubscriptionContainer>
  );
}

export default Subscription;
