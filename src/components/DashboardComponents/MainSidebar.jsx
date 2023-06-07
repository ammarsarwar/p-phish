import { MainSidebarContainer } from "../styles/DashboardLayout.styles";

import {
  SidebarLogo,
  SidebarItems,
  SidebarSettingItems,
  Item,
} from "../styles/Sidebar.styles";
import { SidebarMainData, SidebarSettingsData } from "../../utils/SidebarData";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";

function MainSidebar({ collapsed }) {
  return (
    <MainSidebarContainer collapsed={collapsed}>
      {!collapsed ? (
        <SidebarLogo>
          <h3 style={{ fontSize: 24, textAlign: "center" }}>P Phish</h3>
        </SidebarLogo>
      ) : null}
      <SidebarItems collapsed={collapsed}>
        {!collapsed ? (
          <>
            {SidebarMainData.map((item, index) => {
              return (
                <Item key={index}>
                  <div style={{ marginLeft: 10 }}>{item.icon}</div>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      style={{ marginLeft: 10, textTransform: "capitalize" }}
                    >
                      {item.title}
                    </div>
                  </Link>
                </Item>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            {SidebarMainData.map((item, index) => {
              return (
                <Item key={index} style={{ display: "flex" }}>
                  <div>
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item.icon}
                    </Link>
                  </div>
                </Item>
              );
            })}
          </>
        )}
      </SidebarItems>
      <Divider />
      <SidebarSettingItems>
        {!collapsed ? (
          <>
            {SidebarSettingsData.map((item, index) => {
              return (
                <Item key={index} style={{ display: "flex" }}>
                  <div style={{ marginLeft: 10 }}>{item.icon}</div>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      style={{ marginLeft: 10, textTransform: "capitalize" }}
                    >
                      {item.title}
                    </div>
                  </Link>
                </Item>
              );
            })}
          </>
        ) : (
          <>
            {" "}
            {SidebarSettingsData.map((item, index) => {
              return (
                <Item key={index} style={{ display: "flex" }}>
                  <div>
                    <Link
                      to={item.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {item.icon}
                    </Link>
                  </div>
                </Item>
              );
            })}
          </>
        )}
      </SidebarSettingItems>
    </MainSidebarContainer>
  );
}

export default MainSidebar;
