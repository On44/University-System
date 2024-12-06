import React, { useState } from "react";
import "./CourseEnrollmentForm.css";

const CourseEnrollmentForm = () => {
  const [studentId, setStudentId] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [enrollmentDate, setEnrollmentDate] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const courses = [
    { code: "CS101", name: "Introduction to Programming" },
    { code: "ENG202", name: "Thermodynamics" },
    { code: "MTH301", name: "Calculus III" },
    { code: "BIO201", name: "Biology 101" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`Successfully enrolled in ${selectedCourse}`);
  };

  return (
    <div className="course-enrollment-container">
      <h3 className="course-enrollment-heading">Course Enrollment</h3>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="enrollment-form">
        <div>
          <label className="form-label">Student ID</label>
          <input
            type="text"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">Select Course</label>
          <select
            name="course"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select a course...</option>
            {courses.map((course) => (
              <option key={course.code} value={course.name}>
                {course.code} - {course.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label">Enrollment Date</label>
          <input
            type="date"
            name="enrollmentDate"
            value={enrollmentDate}
            onChange={(e) => setEnrollmentDate(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-button">
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default CourseEnrollmentForm;
