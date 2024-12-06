import React, { useState } from "react";
import "./AdminPage.css";

// Importing the individual page components
import Dashboard from "./Dashboard";
import UserManagement from "./UserManagement";
import CourseManagement from "./CourseManagement";
import DepartmentManagement from "./DepartmentManagement";
import Notifications from "./Notifications";
import Settings from "./Settings";

function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Navigation links with labels and keys
  const navLinks = [
    { key: "dashboard", label: "Dashboard" },
    { key: "users", label: "User Management" },
    { key: "courses", label: "Course Management" },
    { key: "departments", label: "Department Management" },
    { key: "notifications", label: "Notifications" },
    { key: "settings", label: "Settings" },
  ];

  // Render content dynamically based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
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
        return <div className="content">Select a tab to view details.</div>;
    }
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <h1>Admin Panel</h1>
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.key}
              className={activeTab === link.key ? "active" : ""}
              onClick={() => setActiveTab(link.key)}
              tabIndex={0} // Makes list items focusable
              onKeyDown={(e) => e.key === "Enter" && setActiveTab(link.key)} // Allows Enter key to activate
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default AdminPage;
