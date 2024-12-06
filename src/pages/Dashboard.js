import React from "react";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import DepartmentManagement from "./DepartmentManagement";
import Notifications from "./Notifications";
import Settings from "./Settings";

const Dashboard = ({ activeTab, tabs }) => {
  // Function to render content based on activeTab
  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <p>Welcome to the Admin Dashboard. Here's an overview of system statistics.</p>;
      case "users":
        return <UserManagement />;
      case "courses":
        return <CourseManagement />;
      case "departments":
        return <DepartmentManagement />;
      case "notifications":
        return <Notifications />;
      case "settings":
        return <Settings />;
      default:
        return <p>Select a tab to view its details.</p>;
    }
  };

  return (
    <div className="dashboard">
      <h2>{tabs && tabs[activeTab] ? tabs[activeTab] : "Dashboard"}</h2>
      <div className="dashboard-content">{renderTabContent()}</div>
    </div>
  );
};

export default Dashboard;
