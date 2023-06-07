import React, { useState, useRef } from "react";
import {
  TenantButtonWrap,
  TenantContainer,
  TenantForm,
  TenantMainForm,
  TenantSideBar,
} from "../styles/Onboarding.styles";
import { useDispatch } from "react-redux";
import { perInfo, orgInfo } from "../../features/tenantFeature/tenantInfoSlice";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

function TenantInfo({ handleNext }) {
  const [tenantInfo, setTenantInfo] = useState({
    orgName: "",
    domainName: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    province: "",
    address: "",
  });

  // for redux
  const dispatch = useDispatch();

  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "warn",
      summary: "Warning",
      detail: "Fields can't be empty",
    });
  };

  const handleNextSubmit = () => {
    if (
      tenantInfo.domainName === "" ||
      tenantInfo.orgName === "" ||
      personalInfo.address === "" ||
      personalInfo.city === "" ||
      personalInfo.country === "" ||
      personalInfo.province === "" ||
      personalInfo.firstName === "" ||
      personalInfo.lastName === ""
    ) {
      show();
    } else {
      dispatch(perInfo(personalInfo));
      dispatch(orgInfo(tenantInfo));
      handleNext();
    }
  };

  return (
    <TenantContainer>
      <Toast ref={toast} position="bottom-left" />
      <div style={{ display: "flex", marginTop: 50 }}>
        <TenantSideBar>
          <div>
            <h1 style={{ fontSize: 23 }}>Personal information</h1>
            <p style={{ fontSize: 15, color: "gray" }}>
              Please provide your personal information
            </p>
          </div>
          <div style={{ position: "relative", top: 350 }}>
            <h1 style={{ fontSize: 23 }}>Organization information</h1>
            <p style={{ fontSize: 15, color: "gray" }}>
              Please provide more information{" "}
            </p>
          </div>
        </TenantSideBar>
        <TenantMainForm>
          <TenantForm>
            <div
              style={{
                display: "flex",
                gap: 30,
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="firstname">First Name</label>
                <InputText
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      firstName: e.target.value,
                    })
                  }
                  placeholder="Ali"
                  style={{ width: 330 }}
                  value={personalInfo.firstName}
                  required
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="lastname">Last Name</label>
                <InputText
                  placeholder="Irtaza"
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      lastName: e.target.value,
                    })
                  }
                  style={{ width: 330 }}
                  value={personalInfo.lastName}
                  required
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="country">Country </label>
                <InputText
                  placeholder="USA"
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      country: e.target.value,
                    })
                  }
                  value={personalInfo.country}
                  required
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="provice">Province</label>
                <InputText
                  placeholder="California"
                  onChange={(e) =>
                    setPersonalInfo({
                      ...personalInfo,
                      province: e.target.value,
                    })
                  }
                  value={personalInfo.province}
                  required
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="City">City</label>
                <InputText
                  placeholder="San Diego"
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, city: e.target.value })
                  }
                  value={personalInfo.city}
                  required
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <label htmlFor="address">Address</label>
              <InputText
                placeholder="123 Kings Street"
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, address: e.target.value })
                }
                required
              />
            </div>
          </TenantForm>
          <Divider style={{ marginTop: 50, marginBottom: 50 }} />
          <TenantForm>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="organization">Organization</label>
                <InputText
                  placeholder="XYZ Company"
                  onChange={(e) =>
                    setTenantInfo({ ...tenantInfo, orgName: e.target.value })
                  }
                  value={tenantInfo.orgName}
                  required
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <label htmlFor="domain">Domain Name</label>
                <InputText
                  placeholder="xyzCompany.com"
                  onChange={(e) =>
                    setTenantInfo({ ...tenantInfo, domainName: e.target.value })
                  }
                  value={tenantInfo.domainName}
                  required
                />
              </div>
            </div>
          </TenantForm>
          <TenantButtonWrap>
            <Button label="Save & Continue" onClick={handleNextSubmit} />
          </TenantButtonWrap>
        </TenantMainForm>
      </div>
    </TenantContainer>
  );
}

export default TenantInfo;
