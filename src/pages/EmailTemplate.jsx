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

function EmailTemplate() {
  const toast = useRef(null);
  const [isTemplateVisible, setIsTemplateVisible] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: "template 1",
      date: "02-12-2023",
    },
  ]);

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
            <h2>Email Templates</h2>
          </HeadTitle>
          <HeadButton>
            <div>
              <Button
                label="Create a template"
                onClick={() => setIsTemplateVisible(true)}
                style={{ fontSize: 13 }}
              />
              <Dialog
                visible={isTemplateVisible}
                maximizable
                style={{ width: "40vw", height: "50vh" }}
                onHide={() => setIsTemplateVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>Email template</h2>
                    <p>Create a custom email template</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="template-name">Template name</label>
                    <InputText
                      id="template-name"
                      value={templateName}
                      placeholder="Enter template name"
                      onChange={(e) => setTemplateName(e.target.value)}
                    />
                  </DialogField>
                  <DialogField>
                    <label htmlFor="subject-name">Email Subject</label>
                    <InputText
                      id="subject-name"
                      value={subjectName}
                      placeholder="Enter email subject"
                      onChange={(e) => setSubjectName(e.target.value)}
                    />
                  </DialogField>
                </DialogContainer>
              </Dialog>
            </div>
          </HeadButton>
        </GroupHead>
        <Divider />
        <GroupMain>
          <DataTable value={templates} tableStyle={{ maxWidth: "100%" }}>
            <Column field="id" header="Template id"></Column>
            <Column field="name" header="Template name"></Column>
            <Column field="date" header="Creation date"></Column>
            <Column header="Action" body={editBody}></Column>
          </DataTable>
        </GroupMain>
      </GroupContainer>
    </>
  );
}

export default EmailTemplate;
