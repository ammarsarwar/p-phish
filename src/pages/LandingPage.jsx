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
import { Editor } from "primereact/editor";
import { EditorContainer } from "../components/styles/LandingPage.styles";
import { TabView, TabPanel } from "primereact/tabview";
import { InputTextarea } from "primereact/inputtextarea";
import Parser from "html-react-parser";

function LandingPage() {
  const toast = useRef(null);
  const [text, setText] = useState("");
  const [isLandingVisible, setIsLandingVisible] = useState(false);
  const [LandingName, setLandingName] = useState("");
  const [LandingPages, setLandingPages] = useState([
    {
      id: 1,
      name: "page 1",
      date: "02-12-2023",
    },
  ]);

  console.log(text);

  const editorHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
        <button className="ql-code-block" aria-label="Code"></button>
        <button className="ql-size" aria-label="Size"></button>
      </span>
    );
  };

  const header = editorHeader();

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
            <h2>Landing Page</h2>
          </HeadTitle>
          <HeadButton>
            <div>
              <Button
                label="Create a page"
                onClick={() => setIsLandingVisible(true)}
                style={{ fontSize: 13 }}
              />
              <Dialog
                visible={isLandingVisible}
                maximizable
                style={{ width: "50vw", height: "50vh" }}
                onHide={() => setIsLandingVisible(false)}
              >
                <DialogContainer>
                  <div>
                    <h2>Landing Page</h2>
                    <p>Create a custom landing page</p>
                  </div>
                  <Divider />
                  <DialogField>
                    <label htmlFor="landing-name">Name</label>
                    <InputText
                      id="landing-name"
                      value={LandingName}
                      placeholder="Enter page name"
                      onChange={(e) => setLandingName(e.target.value)}
                    />
                  </DialogField>
                  <EditorContainer>
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
                          cols={30}
                          style={{ height: "320px", width: "100%" }}
                          placeholder="Write your code here"
                        />
                      </TabPanel>
                      <TabPanel header="Preview">
                        {text ? (
                          <div
                            className="m-0"
                            style={{ height: "320px", padding: 10 }}
                          >
                            {Parser(text)}
                          </div>
                        ) : (
                          <div
                            className="m-0"
                            style={{ height: "320px", padding: 10 }}
                          >
                            Nothing to show
                          </div>
                        )}
                      </TabPanel>
                    </TabView>
                  </EditorContainer>
                  <div style={{ marginTop: 15 }}>
                    <Button label="create" />
                  </div>
                </DialogContainer>
              </Dialog>
            </div>
          </HeadButton>
        </GroupHead>
        <Divider />
        <GroupMain>
          <DataTable value={LandingPages} tableStyle={{ maxWidth: "100%" }}>
            <Column field="id" header="Page id"></Column>
            <Column field="name" header="Page name"></Column>
            <Column field="date" header="Creation date"></Column>
            <Column header="Action" body={editBody}></Column>
          </DataTable>
        </GroupMain>
      </GroupContainer>
    </>
  );
}

export default LandingPage;
