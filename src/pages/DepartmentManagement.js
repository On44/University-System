import React, { useState } from "react";
import "./DepartmentManagement.css"; // Optional: Add styling for the department management page

function DepartmentManagement() {
  const [departments, setDepartments] = useState([ 
  ]);
  const [newDepartmentName, setNewDepartmentName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editDepartment, setEditDepartment] = useState(null);

  // Add new department
  const handleAddDepartment = () => {
    if (newDepartmentName.trim() === "") return;

    const newDepartment = {
      id: departments.length + 1,
      name: newDepartmentName,
    };
    setDepartments([...departments, newDepartment]);
    setNewDepartmentName(""); // Clear input field
  };

  // Edit department details
  const handleEditDepartment = (department) => {
    setEditMode(true);
    setEditDepartment(department);
    setNewDepartmentName(department.name);
  };

  // Save edited department
  const handleSaveEdit = () => {
    if (newDepartmentName.trim() === "") return;

    const updatedDepartments = departments.map((department) =>
      department.id === editDepartment.id
        ? { ...department, name: newDepartmentName }
        : department
    );
    setDepartments(updatedDepartments);
    setEditMode(false);
    setEditDepartment(null);
    setNewDepartmentName(""); // Clear input field
  };

  // Delete department
  const handleDeleteDepartment = (id) => {
    const updatedDepartments = departments.filter(
      (department) => department.id !== id
    );
    setDepartments(updatedDepartments);
  };

  return (
    <div className="department-management">
      <h2>Department Management</h2>

      <div className="department-form">
        <input
          type="text"
          value={newDepartmentName}
          onChange={(e) => setNewDepartmentName(e.target.value)}
          placeholder="Enter department name"
        />
        <button onClick={editMode ? handleSaveEdit : handleAddDepartment}>
          {editMode ? "Save Changes" : "Add Department"}
        </button>
      </div>

      <div className="department-list">
        <h3>Department List</h3>
        {departments.length === 0 ? (
          <p>No departments available</p>
        ) : (
          <ul>
            {departments.map((department) => (
              <li key={department.id}>
                {department.name}
                <button
                  className="edit-btn"
                  onClick={() => handleEditDepartment(department)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteDepartment(department.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DepartmentManagement;
