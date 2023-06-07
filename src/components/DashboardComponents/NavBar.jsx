import {
  NavbarContainer,
  NavbarDiv,
  ToggleButton,
} from "../styles/DashboardLayout.styles";
import { FiBell, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Avatar } from "primereact/avatar";

function NavBar({ collapsed, setCollapsed }) {
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <NavbarContainer>
      <div style={{ position: "absolute", left: 15 }}>
        <ToggleButton onClick={toggleSidebar}>
          {!collapsed ? (
            <FiChevronLeft size={24} />
          ) : (
            <FiChevronRight size={24} />
          )}
        </ToggleButton>
      </div>
      <NavbarDiv>
        <div style={{ marginRight: 15 }}>
          <FiBell size={25} />
        </div>
        <div>
          <Avatar label="P" className="mr-2" size="large" shape="circle" />
        </div>
      </NavbarDiv>
    </NavbarContainer>
  );
}

export default NavBar;
