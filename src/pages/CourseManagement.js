import React, { useState } from "react";
import "./CourseManagement.css";

function CourseManagement() {
  const [courses, setCourses] = useState([
  ]);
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseDepartment, setNewCourseDepartment] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [departments, setDepartments] = useState([
    "Computer Science",
    "Mathematics",
    "Physics",
  ]);

  // Add new course
  const handleAddCourse = () => {
    if (newCourseName.trim() === "" || newCourseDepartment.trim() === "")
      return;

    const newCourse = {
      id: courses.length + 1,
      name: newCourseName,
      department: newCourseDepartment,
    };
    setCourses([...courses, newCourse]);
    setNewCourseName("");
    setNewCourseDepartment("");
  };

  // Add new department
  const handleAddDepartment = (newDepartment) => {
    if (newDepartment.trim() === "") return;

    setDepartments((prevDepartments) => [...prevDepartments, newDepartment]);
    setNewCourseDepartment(""); // Clear the department input
  };

  // Edit course details
  const handleEditCourse = (course) => {
    setEditMode(true);
    setEditCourse(course);
    setNewCourseName(course.name);
    setNewCourseDepartment(course.department);
  };

  // Save edited course
  const handleSaveEdit = () => {
    if (newCourseName.trim() === "" || newCourseDepartment.trim() === "")
      return;

    const updatedCourses = courses.map((course) =>
      course.id === editCourse.id
        ? { ...course, name: newCourseName, department: newCourseDepartment }
        : course
    );
    setCourses(updatedCourses);
    setEditMode(false);
    setEditCourse(null);
    setNewCourseName("");
    setNewCourseDepartment("");
  };

  // Delete course
  const handleDeleteCourse = (id) => {
    const updatedCourses = courses.filter((course) => course.id !== id);
    setCourses(updatedCourses);
  };

  return (
    <div className="course-management">
      <h2>Course Management</h2>

      <div className="course-form">
        <input
          type="text"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
          placeholder="Enter course name"
        />
        <select
          value={newCourseDepartment}
          onChange={(e) => setNewCourseDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
        <button onClick={editMode ? handleSaveEdit : handleAddCourse}>
          {editMode ? "Save Changes" : "Add Course"}
        </button>
      </div>

      {/* Add new department input */}
      <div>
        <input
          type="text"
          value={newCourseDepartment}
          onChange={(e) => setNewCourseDepartment(e.target.value)}
          placeholder="Enter new department"
        />
        <button onClick={() => handleAddDepartment(newCourseDepartment)}>
          Add Department
        </button>
      </div>

      <div className="course-list">
        <h3>Course List</h3>
        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                {course.name} - {course.department}
                <button
                  className="edit-btn"
                  onClick={() => handleEditCourse(course)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteCourse(course.id)}
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

export default CourseManagement;
