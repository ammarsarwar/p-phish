import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog } from "primereact/dialog";
import {
  UrlField,
  GroupContainer,
  GroupMain,
} from "../../styles/Groups.styles";

const UrlName = ({ handleNext, handleBack }) => {
  const [urlName, setUrlName] = useState({
    url: "",
  });
  const handleNextSubmit = () => {
    console.log(urlName);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <GroupContainer>
      <GroupMain>
        <UrlField>
          <div style={{ display: "flex", gap: 5 }}>
            <InputText
              onChange={(e) =>
                setUrlName({
                  ...urlName,
                  url: e.target.value,
                })
              }
              placeholder="Enter URL http://192.168.0.1"
              style={{ width: 330 }}
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
        </UrlField>
      </GroupMain>
      <div
        style={{
          justifyContent: "flex-end",
          display: "flex",
          marginTop: 335,
          gap: 10,
        }}
      >
        <Button label="Back" outlined onClick={handleBack} />
        <Button label="Next" onClick={handleNextSubmit} />
      </div>
    </GroupContainer>
  );
};

export default UrlName;
