import { useNavigate } from "react-router-dom";
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
import CampaignForm from "./CampaignForm";

function Campaign() {
  const toast = useRef(null);

  const [campaignName, setCampaignName] = useState("");
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Campaign 1",
      date: "02-12-2023",
      status: "active",
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

  const navigate = useNavigate();
  const navigateCampaignForm = () => {
    navigate("/root/campaign/launch-campaign");
  };
  return (
    <>
      <Toast ref={toast} position="bottom-left" />
      <ConfirmDialog />
      <GroupContainer>
        <GroupHead>
          <HeadTitle>
            <h2>Campaigns</h2>
          </HeadTitle>
          <HeadButton>
            <div>
              <Button
                label="Create a campaign"
                onClick={navigateCampaignForm}
                style={{ fontSize: 13 }}
              />

              {/* <Dialog
                visible={isCampaignVisible}
                maximizable
                style={{ width: "40vw", height: "50vh" }}
                onHide={() => setIsCampaignVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>Campaign</h2>
                    <p>Create a new campaign</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="campaign-name">campaign name</label>
                    <InputText
                      id="campaign-name"
                      value={campaignName}
                      placeholder="Enter campaign name"
                      onChange={(e) => setCampaignName(e.target.value)}
                    />
                  </DialogField>
                  
                </DialogContainer>
              </Dialog> */}
            </div>
          </HeadButton>
        </GroupHead>
        <Divider />
        <GroupMain>
          <DataTable value={campaigns} tableStyle={{ maxWidth: "100%" }}>
            <Column field="id" header="Campaign id"></Column>
            <Column field="name" header="Campaign name"></Column>
            <Column field="date" header="Creation date"></Column>
            <Column field="status" header="Status"></Column>
            <Column header="Action" body={editBody}></Column>
          </DataTable>
        </GroupMain>
      </GroupContainer>
    </>
  );
}

export default Campaign;
