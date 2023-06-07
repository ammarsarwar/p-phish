import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { TabView, TabPanel } from "primereact/tabview";
import Parser from "html-react-parser";
import { InputTextarea } from "primereact/inputtextarea";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog } from "primereact/dialog";

import {
  LandingPageNameField,
  GroupContainer,
  GroupDivder,
  GroupMain,
  EditorContainer,
} from "../../styles/Groups.styles";
const LandingPageName = ({ handleNext, handleBack }) => {
  const [text, setText] = useState("");
  const [selectedLandingPages, setSelectedLandingPages] = useState(null);
  const emailTemps = [
    { name: "GooglePassReset" },
    { name: "MicrosoftPassReset" },
    { name: "AmazonOrder" },
    { name: "BingLive" },
    { name: "Passport" },
    { name: "PS5Won" },
  ];
  const selectLandingPage = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const landingPageOption = (option) => {
    return (
      <div className="flex align-items-center">
        <div>{option.name}</div>
      </div>
    );
  };
  const handleNextSubmit = () => {
    console.log(selectedLandingPages);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <GroupContainer>
      <GroupMain>
        <GroupDivder>
          <LandingPageNameField>
            <label> Select the sending profile from the dropdown</label>
            <div style={{ display: "flex", gap: 5 }}>
              <Dropdown
                value={selectedLandingPages}
                onChange={(e) => setSelectedLandingPages(e.value)}
                options={emailTemps}
                optionLabel="name"
                placeholder="Select Landing Page"
                filter
                valueTemplate={selectLandingPage}
                itemTemplate={landingPageOption}
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
                header="What is a Landing Page"
                visible={visible}
                style={{ width: "50vw" }}
                onHide={() => setVisible(false)}
              >
                <p className="m-0">
                  A landing page is a standalone web page that a person "lands"
                  on after clicking through from an email. Phishing landing
                  pages are commonly found after a user clicks a link in a
                  malicious message or from being redirected during a web
                  browsing session and clicking on an ad or search result
                </p>
              </Dialog>
            </div>

            <label> Create a new Landing page</label>
            <div>
              <Button label="New"></Button>
            </div>
          </LandingPageNameField>
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
  );
};

export default LandingPageName;
