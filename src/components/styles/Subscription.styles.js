import styled from "styled-components";

export const SubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const MainTitle = styled.h1`
  font-size: 45px;
  color: ${(props) => props.cl || "black"};
`;

export const SubTitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.cl || "black"};
  margin-top: 10px;
`;

export const PlansContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PlansCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 10px;
  background-color: ${(props) => props.cl || "#ffffff"};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const PlansCardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const PlansCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Spacer = styled.hr`
  border: 0;
  border-top: 1px solid #c9c7c7;
  width: 100%;
  margin-top: 15px;
`;
export const PlansCardBody = styled.div`
  margin-top: 15px;
`;

export const HeaderTitle = styled.h1`
  font-size: 22px;
  color: ${(props) => props.cl || "black"};
`;

export const HeaderPrice = styled.p`
  text-align: center;
  color: ${(props) => props.cl || "black"};
  font-size: 15px;
  line-height: 30px;
`;

export const BodyText = styled.p`
  line-height: 30px;
  color: ${(props) => props.cl || "black"};
`;
