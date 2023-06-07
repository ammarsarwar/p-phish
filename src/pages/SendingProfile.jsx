import {
  GroupContainer,
  HeadTitle,
  HeadButton,
  GroupHead,
  GroupMain,
  DialogContainer,
  DialogField,
} from "../components/styles/Groups.styles";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useRef } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

function SendingProfile() {
  const toast = useRef(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "profile 1",
      date: "02-12-2023",
    },
  ]);

  // console.log(groupDetails);

  const accept = () => {
    toast.current.show({
      severity: "success",
      summary: "Confirmed",
      detail: "Record deleted successfully",
      life: 2000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Rejected",
      detail: "Record not deleted",
      life: 2000,
    });
  };

  const confirmDelete = (event) => {
    confirmDialog({
      message: `Do you want to delete ${event.name} record?`,
      header: "Delete Confirmation",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  const viewItem = (data) => {
    console.log(data);
  };

  const deleteItem = (data) => {
    confirmDelete(data);
  };

  const editBody = (data) => {
    return (
      <div style={{ display: "flex", gap: 5 }}>
        <Button
          label="view"
          style={{ fontSize: 12 }}
          onClick={(e) => viewItem(data)}
        />
        <Button
          onClick={(e) => deleteItem(data)}
          label="Delete"
          severity="danger"
          outlined
          style={{ fontSize: 12 }}
        ></Button>
      </div>
    );
  };

  return (
    <>
      <Toast ref={toast} position="bottom-left" />
      <ConfirmDialog />
      <GroupContainer>
        <GroupHead>
          <HeadTitle>
            <h2>Sending Profile</h2>
          </HeadTitle>
          <HeadButton>
            <div>
              <Button
                label="Create a profile"
                onClick={() => setIsProfileVisible(true)}
                style={{ fontSize: 13 }}
              />
              <Dialog
                visible={isProfileVisible}
                maximizable
                style={{ width: "40vw", height: "50vh" }}
                onHide={() => setIsProfileVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>Sending Profile</h2>
                    <p>Create a custom sending profile</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="profile-name">Profile name</label>
                    <InputText
                      id="profile-name"
                      value={profileName}
                      placeholder="Enter profile name"
                      onChange={(e) => setProfileName(e.target.value)}
                    />
                  </DialogField>
                </DialogContainer>
              </Dialog>
            </div>
          </HeadButton>
        </GroupHead>
        <Divider />
        <GroupMain>
          <DataTable value={profiles} tableStyle={{ maxWidth: "100%" }}>
            <Column field="id" header="profile id"></Column>
            <Column field="name" header="profile name"></Column>
            <Column field="date" header="Creation date"></Column>
            <Column header="Action" body={editBody}></Column>
          </DataTable>
        </GroupMain>
      </GroupContainer>
    </>
  );
}

export default SendingProfile;
