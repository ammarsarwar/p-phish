import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import {
  GroupContainer,
  GroupMain,
  UserGroup,
} from "../../styles/Groups.styles";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Dialog } from "primereact/dialog";
const UserGroupName = ({ handleNext, handleBack }) => {
  const [selectedGroups, setSelectedGroups] = useState(null);
  const groups = [
    { name: "dev" },
    { name: "abc dept" },
    { name: "finance" },
    { name: "audit" },
    { name: "Paris" },
  ];
  const handleNextSubmit = () => {
    console.log(selectedGroups);
    handleNext();
  };
  const [visible, setVisible] = useState(false);
  return (
    <GroupContainer>
      <GroupMain>
        <UserGroup>
          <label> Select the user group from dropdown</label>
          <div style={{ display: "flex", gap: 5 }}>
            {" "}
            <MultiSelect
              value={selectedGroups}
              onChange={(e) => setSelectedGroups(e.value)}
              options={groups}
              optionLabel="name"
              filter
              placeholder="Select groups"
              maxSelectedLabels={3}
              style={{ width: 330 }}
            />
            <AiFillQuestionCircle
              style={{ fontSize: 25 }}
              onClick={() => setVisible(true)}
            />
            <Dialog
              header="What are Users and Groups"
              visible={visible}
              style={{ width: "50vw" }}
              onHide={() => setVisible(false)}
            >
              <p className="m-0">
                Select users or groups you want to send phishing email to
              </p>
            </Dialog>
          </div>

          <label> Create a new group</label>
          <div>
            <Button label="New"></Button>
          </div>
        </UserGroup>
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

export default UserGroupName;
