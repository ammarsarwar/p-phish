import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  background-color: white;
`;

export const SidebarContainer = styled.div`
  display: flex;
  width: ${(props) => (props.collapsed ? "60px" : "18rem")};
  flex-direction: column;
  /* box-shadow: 2px 1px 0px 0px rgba(0, 0, 0, 0.75); */
  align-items: center;
  background-color: #fafbfb;
  transition: width 0.5s;
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  /* border: 1px solid gray; */
  padding: 10px;
`;

export const NavbarDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const MainPageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100vh;
  /* background-color: #fafbfb; */
  background-color: white;
  transition: width 0.5s;
  overflow: scroll;
`;

export const MainSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

export const Title = styled.p``;

export const ToggleButton = styled.button`
  &:hover {
    color: gray;
  }
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Main = styled.div``;
