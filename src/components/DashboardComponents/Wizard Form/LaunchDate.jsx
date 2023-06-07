import React from "react";
import { useState } from "react";
import {
  CampaignNameField,
  GroupContainer,
  GroupMain,
  LaunchDateField,
} from "../../styles/Groups.styles";
import { Dialog } from "primereact/dialog";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

const LaunchDate = ({ handleNext, handleBack }) => {
  const [date, setDate] = useState(null);
  const handleNextSubmit = () => {
    console.log(selectedSendingProfileName);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <GroupContainer>
      <GroupMain>
        <LaunchDateField>
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Select a launching date:</label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                style={{ width: 330 }}
                showButtonBar
                showTime
                hourFormat="12"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Select a Ending date:</label>
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                style={{ width: 330 }}
                showButtonBar
                showTime
                hourFormat="12"
              />
            </div>
          </div>
          <Dialog
            header="Review "
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => setVisible(false)}
          >
            <p className="m-0">Review all the changes</p>
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button label="Launch Campaign"></Button>
            </div>
          </Dialog>
        </LaunchDateField>
      </GroupMain>
      <div
        style={{
          justifyContent: "flex-end",
          display: "flex",
          marginTop: 320,
          gap: 10,
        }}
      >
        <Button label="Back" outlined onClick={handleBack} />
        <Button label="Review and Launch" onClick={() => setVisible(true)} />
      </div>
    </GroupContainer>
  );
};

export default LaunchDate;
