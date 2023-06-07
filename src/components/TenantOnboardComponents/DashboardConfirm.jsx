import { Wrapper } from "../styles/Global.styles";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";
import axios from "axios";
import { Divider } from "primereact/divider";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { Toast } from "primereact/toast";
import { useRef } from "react";

function DashboardConfirm({ handleNext, handleBack }) {
  const toast = useRef(null);
  const user = useSelector((state) => state.auth.user);
  const tenantDetails = useSelector((state) => state.tenant.organizationInfo);
  const personalDetails = useSelector((state) => state.tenant.personalinfo);
  const subscriptionDetails = useSelector(
    (state) => state.subs.subscriptionDetails
  );

  const show = () => {
    toast.current.show({
      severity: "info",
      summary: "Processing",
      detail: "Please wait while we process your information",
    });
  };

  const handleSubmit = async () => {
    show();
    await axios
      .post("https://8kwg5n1sw1.execute-api.us-east-1.amazonaws.com/Prod", {
        user,
        tenantDetails,
        personalDetails,
        subscriptionDetails,
      })
      .then(
        (response) => {
          console.log(response);
          handleNext();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <Wrapper>
      <Toast ref={toast} position="bottom-left" />
      <div style={{ width: "80%" }}>
        <Splitter style={{ height: "400px" }}>
          <SplitterPanel
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <h3>Organization</h3>
            <Divider />
            <p>Organization name ( {tenantDetails.orgName} )</p>
            <Divider />
            <p>Domain Name ( {tenantDetails.domainName} )</p>
            <Divider />
            <p>
              Full Name ( {personalDetails.firstName},{personalDetails.lastName}{" "}
              )
            </p>
            <Divider />
            <p>
              Location ( {personalDetails.city}, {personalDetails.province},{" "}
              {personalDetails.country} )
            </p>
            <Divider />
            <p>Address ( {personalDetails.address} )</p>
          </SplitterPanel>
          <SplitterPanel
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <h3>Plan</h3>
            <Divider />
            <p>Subscription Type ({subscriptionDetails.subsType})</p>
            <Divider />
            <p>Activation Status ( {subscriptionDetails.subsActiveStatus} )</p>
            <Divider />
            <p>Total Cost ( {subscriptionDetails.planCost} )</p>
            <Divider />
            <p>Subscription start ( {subscriptionDetails.subStartDate} )</p>
            <Divider />
            <p>Subscription Expiry ( {subscriptionDetails.expiryDate} )</p>
          </SplitterPanel>
        </Splitter>
      </div>
      <div style={{ marginTop: 20, color: "red" }}>
        <p>By submitting, you agree that all the information is correct</p>
      </div>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <Button
          style={{ fontSize: 13 }}
          label="Submit"
          onClick={handleSubmit}
        />
        <Button
          style={{ fontSize: 13 }}
          outlined
          label="Back"
          onClick={handleBack}
        />
      </div>
    </Wrapper>
  );
}

export default DashboardConfirm;
