import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";

import {
  CampaignNameField,
  GroupContainer,
  GroupMain,
} from "../../styles/Groups.styles";
import { Button } from "primereact/button";

const CampaignName = ({ handleNext }) => {
  const [campaignInfo, setCampaignInfo] = useState({
    camName: "",
  });
  const dispatch = useDispatch();

  const handleNextSubmit = () => {
    console.log(campaignInfo);
    handleNext();
  };
  return (
    <div>
      <GroupContainer>
        <GroupMain>
          <CampaignNameField>
            <InputText
              onChange={(e) =>
                setCampaignInfo({
                  ...campaignInfo,
                  camName: e.target.value,
                })
              }
              placeholder="Enter Campaign Name"
              style={{ width: 330 }}
            />

            {/* <AiFillQuestionCircle
              style={{ fontSize: 25 }}
              onClick={() => setVisible(true)}
            />
            {visible ? (
              <div
                ref={overlayRef}
                className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top"
              >
                
              </div>
            ) : null} */}
          </CampaignNameField>
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
              marginTop: 243.5,
              gap: 10,
            }}
          >
            <Button label="Next" onClick={handleNextSubmit} />
          </div>
        </GroupMain>
      </GroupContainer>
    </div>
  );
};

export default CampaignName;
