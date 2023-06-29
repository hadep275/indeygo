import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AdminDashboardPage from "./AdminDashboardPage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import OrganizationPage from "./OrganizationPage";
import React, { useState } from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";
import SalePage from "./SalePage";
import FundraisingPage from "./FundraisingPage";

const DashboardPage = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const { user } = useAuth();
  if (user?.isAdmin) {
    return <AdminDashboardPage page={page} />;
  }
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onToggle={handleToggleSidebar}
        >
          <>
            <Menu iconShape="circle">
              {collapsed ? (
                <MenuItem
                  icon={<FaAngleDoubleRight />}
                  onClick={handleCollapsedChange}
                />
              ) : (
                <MenuItem
                  suffix={<FaAngleDoubleLeft />}
                  onClick={handleCollapsedChange}
                />
              )}
              <hr></hr>
              <MenuItem
                icon={<FaTachometerAlt />}
                component={<Link to="/Dashboard" />}
              >
                Dashboard
              </MenuItem>

                  <MenuItem
                    icon={<AddBusinessIcon />}
                    component={<Link to="/OrganizationPage" />}
                  >
                    Organizations
                  </MenuItem>

                  <MenuItem
                    icon={<AttachMoneyIcon />}
                    component={<Link to="/FundraisingPage" />}
                  >
                    Fundraisers
                  </MenuItem>
                  <MenuItem
                    icon={<ReceiptIcon />}
                    component={<Link to="/SalePage" />}
                  >
                    Sales
                  </MenuItem>
                  <hr></hr>
            
                  <MenuItem icon={<LogoutIcon /> } 
                  component = {<Link to="/Logout"/>}
                  >Logout</MenuItem>
                </Menu>
              </>
            {/* )} */}
          </Sidebar>
        {/* )} */}
        <div style={{ flex: 1 }}>
          {page === "OrganizationPage" && <OrganizationPage />}
          {page === "SalePage" && <SalePage />}
          {page === "FundraisingPage" && <FundraisingPage />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
