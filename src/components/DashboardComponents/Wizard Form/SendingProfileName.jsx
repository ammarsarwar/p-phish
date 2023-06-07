import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog } from "primereact/dialog";
import {
  SendingProfileNameField,
  GroupContainer,
  GroupMain,
} from "../../styles/Groups.styles";
const SendingProfileName = ({ handleNext, handleBack }) => {
  const [selectedSendingProfileName, setSelectedSendingProfileName] =
    useState(null);
  const sendingProfileList = [
    { name: "Ammar Sarwar" },
    { name: "Irtaza" },
    { name: "AmazonOrder" },
    { name: "BingLive" },
    { name: "Passport" },
    { name: "PS5Won" },
  ];
  const selectSendingProfile = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const sendingProfileOption = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };

  const handleNextSubmit = () => {
    console.log(selectedSendingProfileName);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <GroupContainer>
      <GroupMain>
        <SendingProfileNameField>
          <label> Select the sending profile from dropdown</label>
          <div style={{ display: "flex", gap: 5 }}>
            <Dropdown
              value={selectedSendingProfileName}
              onChange={(e) => setSelectedSendingProfileName(e.value)}
              options={sendingProfileList}
              optionLabel="name"
              placeholder="Select Sending Profile"
              filter
              valueTemplate={selectSendingProfile}
              itemTemplate={sendingProfileOption}
              // className="w-full md:w-14rem"
              style={{ width: 330 }}
              showClear
              rules={{ required: "Value is required." }}
            />
            <AiFillQuestionCircle
              style={{ fontSize: 25 }}
              onClick={() => setVisible(true)}
            />
            <Dialog
              header="What is a Sending Profile"
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
            >
              <p className="m-0">
                A Sending Profile refers to the characteristics and attributes
                associated with the sender of a phishing email. It includes the
                information and elements used to establish credibility and
                deceive the recipient into believing that the email is
                legitimate.
              </p>
            </Dialog>
          </div>

          <label> Create a new Sending profile</label>
          <div>
            <Button label="New"></Button>
          </div>
        </SendingProfileNameField>
      </GroupMain>
      <div
        style={{
          justifyContent: "flex-end",
          display: "flex",
          marginTop: 243.5,
          gap: 10,
        }}
      >
        <Button label="Back" outlined onClick={handleBack} />
        <Button label="Next" onClick={handleNextSubmit} />
      </div>
    </GroupContainer>
  );
};

export default SendingProfileName;
