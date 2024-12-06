import React, { useState } from "react";
import "./UserManagement.css";

function UserManagement() {
  const [users, setUsers] = useState([
  ]);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("Student");
  const [editMode, setEditMode] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Add new user
  const handleAddUser = () => {
    if (newUserName.trim() === "" || newUserEmail.trim() === "") return;

    const newUser = {
      id: users.length + 1,
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
    };
    setUsers([...users, newUser]);
    setNewUserName(""); // Clear input fields
    setNewUserEmail("");
    setNewUserRole("Student");
  };

  // Edit user details
  const handleEditUser = (user) => {
    setEditMode(true);
    setEditUser(user);
    setNewUserName(user.name);
    setNewUserEmail(user.email);
    setNewUserRole(user.role);
  };

  // Save edited user
  const handleSaveEdit = () => {
    if (newUserName.trim() === "" || newUserEmail.trim() === "") return;

    const updatedUsers = users.map((user) =>
      user.id === editUser.id
        ? { ...user, name: newUserName, email: newUserEmail, role: newUserRole }
        : user
    );
    setUsers(updatedUsers);
    setEditMode(false);
    setEditUser(null);
    setNewUserName(""); // Clear input fields
    setNewUserEmail("");
    setNewUserRole("Student");
  };

  // Delete user
  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      <div className="user-form">
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          placeholder="Enter user name"
        />
        <input
          type="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
          placeholder="Enter user email"
        />
        <select
          value={newUserRole}
          onChange={(e) => setNewUserRole(e.target.value)}
        >
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Admin">Admin</option>
          <option value="Lecturer">Lecturer</option>
        </select>
        <button onClick={editMode ? handleSaveEdit : handleAddUser}>
          {editMode ? "Save Changes" : "Add User"}
        </button>
      </div>

      <div className="user-list">
        <h3>User List</h3>
        {users.length === 0 ? (
          <p>No users available</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email} - {user.role}
                <button
                  className="edit-btn"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteUser(user.id)}
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

export default UserManagement;
