import {
  DashboardContainer,
  DashboardHeader,
  DashboardCards,
  HeaderTitle,
  HeaderTenant,
  Card,
  CardStats,
  CardTitle,
  CardDesc,
  CardContainer,
  GraphContainer,
} from "../components/styles/Dashboard.styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Email Sent", "Link Clicks", "Submitted data", "Email opened"],
  datasets: [
    {
      label: "# of events",
      data: [213, 111, 23, 111],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderTitle>
          <h1>Analytics Overview</h1>
        </HeaderTitle>
        <HeaderTenant>
          <p>Devsinc Campaign</p>
        </HeaderTenant>
      </DashboardHeader>
      <DashboardCards>
        <CardContainer>
          <Card cl="#e6f5f9">
            <CardStats>213</CardStats>
            <CardTitle>Email sent</CardTitle>
            <CardDesc>Email sent succesfully</CardDesc>
          </Card>
          <Card cl="beige">
            <CardStats>111</CardStats>
            <CardTitle>Email Opened</CardTitle>
            <CardDesc>Email sent succesfully</CardDesc>
          </Card>
          <Card cl="#EFFCEF">
            <CardStats>313</CardStats>
            <CardTitle>Link Clicks</CardTitle>
            <CardDesc>Email sent succesfully</CardDesc>
          </Card>
          <Card cl="#F4F6FA">
            <CardStats>23</CardStats>
            <CardTitle>Sumitted data</CardTitle>
            <CardDesc>Email sent succesfully</CardDesc>
          </Card>
        </CardContainer>
        <GraphContainer>
          <Pie data={data} />
        </GraphContainer>
      </DashboardCards>
    </DashboardContainer>
  );
}

export default Dashboard;
