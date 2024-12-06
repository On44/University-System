import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  // State to manage settings
  const [systemSettings, setSystemSettings] = useState({
    universityName: "XYZ University",
    semester: "Fall 2024",
    theme: "light",
  });

  const [userPermissions, setUserPermissions] = useState({
    canAddUser: true,
    canEditUser: true,
    canDeleteUser: false,
    canManageCourses: true,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    passwordStrength: "medium",
  });

  const handleSystemSettingsChange = (e) => {
    setSystemSettings({
      ...systemSettings,
      [e.target.name]: e.target.value,
    });
  };

  const handlePermissionsChange = (e) => {
    setUserPermissions({
      ...userPermissions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSecuritySettingsChange = (e) => {
    setSecuritySettings({
      ...securitySettings,
      [e.target.name]: e.target.value,
    });
  };

  const saveSettings = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="settings-content">
      <h2>System Settings</h2>

      <div className="section">
        <h3>General Settings</h3>
        <div className="form-group">
          <label>University Name</label>
          <input
            type="text"
            name="universityName"
            value={systemSettings.universityName}
            onChange={handleSystemSettingsChange}
          />
        </div>
        <div className="form-group">
          <label>Current Semester</label>
          <input
            type="text"
            name="semester"
            value={systemSettings.semester}
            onChange={handleSystemSettingsChange}
          />
        </div>
        <div className="form-group">
          <label>Theme</label>
          <select
            name="theme"
            value={systemSettings.theme}
            onChange={handleSystemSettingsChange}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>

      <div className="section">
        <h3>User Permissions</h3>
        <div className="permissions-list">
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="canAddUser"
                checked={userPermissions.canAddUser}
                onChange={handlePermissionsChange}
              />
              Can Add User
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="canEditUser"
                checked={userPermissions.canEditUser}
                onChange={handlePermissionsChange}
              />
              Can Edit User
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="canDeleteUser"
                checked={userPermissions.canDeleteUser}
                onChange={handlePermissionsChange}
              />
              Can Delete User
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="canManageCourses"
                checked={userPermissions.canManageCourses}
                onChange={handlePermissionsChange}
              />
              Can Manage Courses
            </label>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Security Settings</h3>
        <div className="form-group">
          <label>Two-Factor Authentication</label>
          <select
            name="twoFactorAuth"
            value={securitySettings.twoFactorAuth ? "enabled" : "disabled"}
            onChange={(e) =>
              handleSecuritySettingsChange({
                target: { name: "twoFactorAuth", value: e.target.value === "enabled" },
              })
            }
          >
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
        <div className="form-group">
          <label>Password Strength</label>
          <select
            name="passwordStrength"
            value={securitySettings.passwordStrength}
            onChange={handleSecuritySettingsChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button className="primary-button" onClick={saveSettings}>
        Save Settings
      </button>
    </div>
  );
}

export default Settings;
