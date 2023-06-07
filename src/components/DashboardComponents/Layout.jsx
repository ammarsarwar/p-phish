import {
  DashboardWrapper,
  SidebarContainer,
  MainPageContainer,
  Title,
  NavbarContainer,
  NavbarDiv,
  ToggleButton,
  Main,
} from "../styles/DashboardLayout.styles";
import MainSidebar from "./MainSidebar";
import { useState } from "react";
import { FiBell, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DashboardWrapper>
      <SidebarContainer collapsed={collapsed}>
        <MainSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </SidebarContainer>
      <MainPageContainer collapsed={collapsed}>
        <NavBar setCollapsed={setCollapsed} collapsed={collapsed} />
        <Main>
          <Outlet />
        </Main>
      </MainPageContainer>
    </DashboardWrapper>
  );
};

export default Layout;
