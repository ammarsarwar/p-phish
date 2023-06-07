import {
  AddContainer,
  TeamContainer,
  SettingsContainer,
  SettingsHead,
  SettingsMain,
  ViewContainer,
} from "../components/styles/Settings.styles";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";

function Settings() {
  const [team, setTeam] = useState([
    { email: "aliirtaza@nigtingaletech.net", role: "Admin" },
    { email: "ammarsarwar@nigtingaletech.net", role: "Analyst" },
  ]);
  const [email, setEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  const roles = [
    { name: "Admin", code: "AD" },
    { name: "Analyst", code: "AN" },
  ];
  return (
    <>
      <SettingsContainer>
        <SettingsHead>
          <h2>Settings</h2>
        </SettingsHead>
        <SettingsMain>
          <TabView>
            <TabPanel header="Profile" style={{ fontSize: 14 }}>
              <p>edit team</p>
            </TabPanel>
            <TabPanel header="Team" style={{ fontSize: 14 }}>
              <TeamContainer>
                <AddContainer>
                  <div style={{ marginBottom: 30 }}>
                    <h2>Add members</h2>
                    <p>You can invite new members to your team</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      <div>
                        <label htmlFor="email">Email</label>
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        <InputText
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: "300px" }}
                          placeholder="member@email.com"
                        />
                        <Dropdown
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.value)}
                          options={roles}
                          optionLabel="name"
                          placeholder="Select role"
                          // className="w-full md:w-14rem"
                        />
                      </div>
                    </div>
                    <div>
                      <Button
                        label="invite"
                        style={{ fontSize: 15, position: "relative", top: 15 }}
                      />
                    </div>
                  </div>
                </AddContainer>
                <ViewContainer>
                  <div style={{ marginBottom: 30 }}>
                    <h2>My team</h2>
                  </div>
                  <div>
                    <DataTable value={team}>
                      <Column field="email" header="Email"></Column>
                      <Column field="role" header="Role"></Column>
                    </DataTable>
                  </div>
                </ViewContainer>
              </TeamContainer>
            </TabPanel>
            <TabPanel header="Plan" style={{ fontSize: 14 }}>
              <div style={{ padding: 20 }}>
                <h1 style={{ marginBottom: 12 }}>Your active plan is Basic</h1>
                <Button label="Upgrade" style={{ fontSize: 13 }} />
              </div>
            </TabPanel>
            <TabPanel header="Notifications" style={{ fontSize: 14 }}>
              <div style={{ padding: 20 }}>
                <h1>You have no notifications</h1>
              </div>
            </TabPanel>
          </TabView>
        </SettingsMain>
      </SettingsContainer>
    </>
  );
}

export default Settings;
