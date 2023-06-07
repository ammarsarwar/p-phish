import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const MainContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 10px;
`;

export const BackButton = styled.button`
  border: none;
  background-color: transparent;
  color: blue;
  margin-left: ${(props) => props.ml};
  cursor: pointer;
`;

export const Steppers = styled.div`
  width: 50vw;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TenantContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 30px; */
`;

export const TenantSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
`;
export const TenantMainForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

export const TenantForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TenantButtonWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;
