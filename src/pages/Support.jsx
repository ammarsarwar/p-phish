import {
  SupportContainer,
  SupportTitle,
  SupportHead,
  SupportMain,
  TicketContainer,
  SupportHistory,
  SupportTable,
  SupportFaq,
  TicketForm,
} from "../components/styles/Support.styles";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { Button } from "primereact/button";

function Support() {
  const [ticketNumber, setTicketNumber] = useState("");
  const [date, setDate] = useState(null);
  const [requestType, setRequestType] = useState(null);
  const issues = [
    { name: "Account Issue", code: "AI" },
    { name: "Campaign Issue", code: "PI" },
    { name: "Page Issue", code: "CI" },
    { name: "Email Issue", code: "EI" },
    { name: "Other", code: "OO" },
  ];
  const [subType, setSubType] = useState("");
  const subIssues = [
    { name: "Authentication Failed", code: "CI" },
    { name: "Campaign Error", code: "TI" },
    { name: "Landing Page Not Working", code: "PI" },
    { name: "Account Freezed", code: "AI" },
    { name: "Other", code: "OO" },
  ];

  const [ticketItems, setTicketItems] = useState([
    {
      issue: "Accounts Issue",
      subIssue: "Authentication Failed",
      date: "02-12-2023",
      status: "active",
    },
    {
      issue: "Campaign Issue",
      subIssue: "Campaign Eror",
      date: "02-12-2023",
      status: "resolved",
    },
    {
      issue: "Page Issue",
      subIssue: "Landing page not showing",
      date: "02-12-2023",
      status: "Resolved",
    },
  ]);

  useEffect(() => {
    const myticketnumber = Math.floor(Math.random() * 10000);
    setTicketNumber(myticketnumber);
  }, []);

  return (
    <>
      <SupportContainer>
        <SupportHead>
          <SupportTitle>
            <h2>Help & Support</h2>
            <p>When customers have problem, they open support ticket</p>
          </SupportTitle>
        </SupportHead>
        <Divider />
        <SupportMain>
          <TicketContainer>
            <TicketForm>
              <div>
                <h3>Create New Ticket</h3>
                <p>Fill up the information here, then click submit button</p>
              </div>
              <div style={{ marginTop: 20 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    marginBottom: 20,
                  }}
                >
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="request-type"
                      style={{
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      Request Type
                    </label>
                    <Dropdown
                      value={requestType}
                      onChange={(e) => setRequestType(e.value)}
                      options={issues}
                      optionLabel="name"
                      placeholder="Select request type"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "bold",
                        marginBottom: 10,
                      }}
                    >
                      Name
                    </label>
                    <InputText
                      id="name"
                      keyfilter="alpha"
                      style={{ width: "100%" }}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="number"
                      style={{
                        display: "block",
                        fontSize: "bold",
                        marginBottom: 10,
                      }}
                    >
                      Ticket number
                    </label>
                    <InputText
                      id="number"
                      keyfilter="num"
                      disabled
                      style={{ width: "100%" }}
                      value={ticketNumber}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="reason"
                      style={{
                        display: "block",
                        fontSize: "bold",
                        marginBottom: 10,
                      }}
                    >
                      Reason
                    </label>
                    <Dropdown
                      value={subType}
                      onChange={(e) => setSubType(e.value)}
                      options={subIssues}
                      optionLabel="name"
                      placeholder="Select your reason"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="date"
                      style={{
                        display: "block",
                        fontSize: "bold",
                        marginBottom: 10,
                      }}
                    >
                      Choose Date
                    </label>
                    <Calendar
                      value={date}
                      style={{ width: "100%" }}
                      placeholder="Choose request date"
                      onChange={(e) => setDate(e.value)}
                    />
                  </div>
                  <div style={{ flex: "auto" }}>
                    <label
                      htmlFor="alphanumeric"
                      style={{
                        display: "block",
                        fontSize: "bold",
                        marginBottom: 10,
                      }}
                    >
                      Remarks
                    </label>
                    <InputText
                      id="remarks"
                      keyfilter="alpha"
                      placeholder="Write your remarks"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button label="Submit ticket" style={{ fontSize: 13 }} />
              </div>
            </TicketForm>
          </TicketContainer>
          <SupportHistory>
            <SupportTable>
              <h3 style={{ marginBottom: 10 }}>Support history</h3>
              <DataTable value={ticketItems}>
                <Column field="issue" header="Issue"></Column>
                <Column field="subIssue" header="Reason"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="status" header="Status"></Column>
              </DataTable>
            </SupportTable>
            <SupportFaq>
              <h3 style={{ marginBottom: 10 }}>Frequently asked questions</h3>
              <Accordion>
                <AccordionTab header="Can analyst create a campaign?">
                  <p>
                    No! All the campaigns must be created with an admin account
                  </p>
                </AccordionTab>
                <AccordionTab header="How many users allowed in a free tier?">
                  <p>In free tier, you can add upto 15 users</p>
                </AccordionTab>
                <AccordionTab header="How much time it take to get a issue resolved?">
                  <p>It normally takes 24 hours for us to resolve your issue</p>
                </AccordionTab>
              </Accordion>
            </SupportFaq>
          </SupportHistory>
        </SupportMain>
      </SupportContainer>
    </>
  );
}

export default Support;
