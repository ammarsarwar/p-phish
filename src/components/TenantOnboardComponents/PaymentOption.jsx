import React from "react";
import { Wrapper } from "../styles/Global.styles";
import { Button } from "primereact/button";
import { useSelector } from "react-redux";
import { subsInfo } from "../../features/tenantFeature/subscriptionSlice";

function PaymentOption({ handleNext, handleBack }) {
  const myPlan = useSelector(
    (state) => state.subs.subscriptionDetails.subsType
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 200,
      }}
    >
      <h3 style={{ marginBottom: "50px", fontSize: "25px" }}>
        You opt for {myPlan} plan.
      </h3>
      <div style={{ display: "flex", gap: 20 }}>
        <Button
          label="Save & Continue"
          onClick={handleNext}
          style={{ fontSize: 12 }}
        />
        <Button
          outlined
          label="Back"
          onClick={handleBack}
          style={{ fontSize: 12 }}
        />
      </div>
    </div>
  );
}

export default PaymentOption;
