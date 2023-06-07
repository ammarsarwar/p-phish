import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { TabView, TabPanel } from "primereact/tabview";
import { InputTextarea } from "primereact/inputtextarea";
import EmailTemplate from "../../../pages/EmailTemplate";
import Parser from "html-react-parser";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog } from "primereact/dialog";

import {
  EmailNameField,
  GroupContainer,
  GroupDivder,
  GroupMain,
  EditorContainer,
} from "../../styles/Groups.styles";
const EmailTempName = ({ handleNext, handleBack }) => {
  const [text, setText] = useState("");
  const [selectedEmailTemp, setSelectedEmailTemp] = useState(null);
  const emailTemps = [
    { name: "GooglePassReset" },
    { name: "MicrosoftPassReset" },
    { name: "AmazonOrder" },
    { name: "BingLive" },
    { name: "Passport" },
    { name: "PS5Won" },
  ];
  const selectedEmailTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const emailOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };
  const handleNextSubmit = () => {
    console.log(selectedEmailTemp);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <GroupContainer>
        <GroupMain>
          <GroupDivder>
            <EmailNameField>
              <label> Select email template from the dropdown</label>
              <div style={{ display: "flex", gap: 5 }}>
                <Dropdown
                  value={selectedEmailTemp}
                  onChange={(e) => setSelectedEmailTemp(e.value)}
                  options={emailTemps}
                  optionLabel="name"
                  placeholder="Email Template"
                  filter
                  valueTemplate={selectedEmailTemplate}
                  itemTemplate={emailOptionTemplate}
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
                  header="What is Email Template"
                  visible={visible}
                  style={{ width: "50vw" }}
                  onHide={() => setVisible(false)}
                >
                  <p className="m-0">
                    Email Templates are pre-made email or website templates that
                    are designed to look like legitimate communications from a
                    trusted source, such as a bank or social media site. These
                    templates are often included in phishing kits and can be
                    used to create convincing phishing emails or websites.
                  </p>
                </Dialog>
              </div>
              <label> Create a new email template</label>
              <div>
                <Button label="New" onClick={EmailTemplate}></Button>
              </div>
            </EmailNameField>
            <EditorContainer>
              {" "}
              <TabView>
                <TabPanel header="HTML">
                  {/* <Editor
                          value={text}
                          onTextChange={(e) => setText(e.htmlValue)}
                          style={{ height: "320px" }}
                          headerTemplate={header}
                        /> */}
                  <InputTextarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    cols={100}
                    style={{ height: "320px", width: "100%" }}
                    placeholder="Write your code here"
                  />
                </TabPanel>
                <TabPanel header="Preview">
                  {text ? (
                    <div
                      className="m-0"
                      style={{ height: "320px", width: "100%", padding: 10 }}
                    >
                      {Parser(text)}
                    </div>
                  ) : (
                    <div
                      className="m-0"
                      style={{ height: "320px", width: "100%", padding: 10 }}
                    >
                      Nothing to show
                    </div>
                  )}
                </TabPanel>
              </TabView>
            </EditorContainer>
          </GroupDivder>
        </GroupMain>
        <div></div>
        <div
          style={{
            justifyContent: "flex-end",
            display: "flex",
            marginTop: 10,
            gap: 10,
          }}
        >
          <Button label="Back" outlined onClick={handleBack} />
          <Button label="Next" onClick={handleNextSubmit} />
        </div>
      </GroupContainer>
    </div>
  );
};

export default EmailTempName;
