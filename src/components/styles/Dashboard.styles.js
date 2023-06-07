import styled from "styled-components";

export const DashboardContainer = styled.div`
  padding: 60px;
`;

export const DashboardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div``;

export const HeaderTenant = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const DashboardCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.cl};
  padding: 50px;
  border-radius: 10px;
  gap: 2px;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.09);
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 50%;
  gap: 50px;
`;

export const GraphContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardStats = styled.h1`
  position: relative;
  bottom: 10px;
`;

export const CardTitle = styled.h3`
  position: relative;
  bottom: 10px;
`;

export const CardDesc = styled.p`
  color: gray;
  font-size: 10px;
`;
