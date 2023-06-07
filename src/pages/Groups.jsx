import {
  GroupContainer,
  HeadTitle,
  HeadButton,
  GroupHead,
  GroupMain,
  DialogContainer,
  DialogField,
  GroupUserData,
} from "../components/styles/Groups.styles";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState, useRef, useEffect } from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Papa from "papaparse";

function Groups() {
  const toast = useRef(null);
  const [isGroupVisible, setIsGroupVisible] = useState(false);
  const [isBulkVisible, setIsBulkVisible] = useState(false);
  const [groupDetails, setGroupDetails] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [fname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group 1",
      members: "1",
      date: "02-12-2023",
    },
  ]);

  const onUpload = async (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        setGroupDetails(results.data);
      },
    });
  };

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
            <h2>Users & Groups</h2>
          </HeadTitle>
          <HeadButton>
            <div>
              <Button
                label="Create a group"
                onClick={() => setIsGroupVisible(true)}
                style={{ fontSize: 13 }}
              />
              <Dialog
                visible={isGroupVisible}
                maximizable
                style={{ width: "40vw", height: "50vh" }}
                onHide={() => setIsGroupVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>User Group</h2>
                    <p>Create a target user group</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="group-name">Group name</label>
                    <InputText
                      id="group-name"
                      value={groupName}
                      placeholder="Enter group name"
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </DialogField>
                  <GroupUserData>
                    <InputText
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="First Name"
                      style={{ width: 120 }}
                    />
                    <InputText
                      value={fname}
                      onChange={(e) => setLname(e.target.value)}
                      placeholder="Last name"
                      style={{ width: 120 }}
                    />

                    <InputText
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      style={{ width: 120 }}
                    />
                    <InputText
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      placeholder="Position"
                      style={{ width: 120 }}
                    />
                  </GroupUserData>
                  <div style={{ marginTop: 10 }}>
                    <Button label="Add" style={{ fontSize: 13 }} />
                  </div>
                </DialogContainer>
              </Dialog>
            </div>
            <div>
              <Button
                label="Bulk import"
                outlined
                security="info"
                style={{ fontSize: 13, marginLeft: 10 }}
                onClick={() => setIsBulkVisible(true)}
              />
              <Dialog
                visible={isBulkVisible}
                style={{ width: "40vw", height: "50vh" }}
                onHide={() => setIsBulkVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>User Group</h2>
                    <p>Create a target user group</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="group-name">Group name</label>
                    <InputText
                      id="group-name"
                      value={groupName}
                      placeholder="Enter group name"
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </DialogField>
                  <DialogField>
                    <div>
                      <p>Upload a csv file to import your user group</p>
                    </div>
                    <div>
                      <input
                        type="file"
                        name="emailcsv"
                        accept=".csv"
                        // maxFileSize={1000000}
                        onChange={onUpload}
                        // onUpload={onUpload}
                        // url="/root/user-groups/upload"
                      />
                    </div>
                    <div style={{ marginTop: 5 }}>
                      <Button
                        label="Create a group"
                        onClick={() => setIsBulkVisible(false)}
                      />
                    </div>
                  </DialogField>
                </DialogContainer>
              </Dialog>
            </div>
          </HeadButton>
        </GroupHead>
        <Divider />
        <GroupMain>
          <DataTable value={groups} tableStyle={{ maxWidth: "100%" }}>
            <Column field="id" header="Group id"></Column>
            <Column field="name" header="Group name"></Column>
            <Column field="members" header="No of members"></Column>
            <Column field="date" header="Creation date"></Column>
            <Column header="Action" body={editBody}></Column>
          </DataTable>
        </GroupMain>
      </GroupContainer>
    </>
  );
}

export default Groups;
