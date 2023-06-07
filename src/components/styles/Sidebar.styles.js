import styled from "styled-components";

export const SidebarLogo = styled.div`
  margin-top: 80px;
`;

export const SidebarItems = styled.div`
  margin-top: ${(props) => (props.collapsed ? "80px" : "40px")};
`;

export const SidebarSettingItems = styled.div``;

export const SidebarFooter = styled.div``;

export const Item = styled.div`
  display: flex;
  height: 60px;
  margin-top: 5px;
  padding: 10px;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e6f5f9;
  }
`;
