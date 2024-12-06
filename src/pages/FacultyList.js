import React, { useState } from "react";
import "./FacultyList.css"; // Import CSS for styling

const facultyData = [
  {
    id: 1,
    name: "Dr. John",
    department: "Computer Science",
    email: "jdoe@university.edu",
    phone: "754-456-7890",
    bio: "Dr. John is a senior lecturer specializing in Artificial Intelligence and Machine Learning.",
  },
  {
    id: 2,
    name: "Prof. Jane",
    department: "Physics",
    email: "jsmith@university.edu",
    phone: "734-567-8901",
    bio: "Prof. Jane Smith focuses on Quantum Mechanics and its applications in modern technology.",
  },
  {
    id: 3,
    name: "Dr. Emily",
    department: "Mathematics",
    email: "ejohnson@university.edu",
    phone: "745-678-9012",
    bio: "Dr. Emily researches numerical methods for complex mathematical models.",
  },
  // Add more faculty members as needed
];

function FacultyList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filteredFaculty = facultyData.filter((faculty) => {
    return (
      (filter === "All" || faculty.department === filter) &&
      faculty.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="faculty-list">
      <h1>Faculty List</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Physics">Physics</option>
          <option value="Mathematics">Mathematics</option>
          {/* Add more departments as needed */}
        </select>
      </div>
      <div className="faculty-grid">
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} className="faculty-card">
            <h2>{faculty.name}</h2>
            <p><strong>Department:</strong> {faculty.department}</p>
            <p><strong>Email:</strong> <a href={`mailto:${faculty.email}`}>{faculty.email}</a></p>
            <p><strong>Phone:</strong> {faculty.phone}</p>
            {expanded === faculty.id ? (
              <>
                <p className="bio">{faculty.bio}</p>
                <button onClick={() => toggleExpand(faculty.id)} className="toggle-button">Show Less</button>
              </>
            ) : (
              <button onClick={() => toggleExpand(faculty.id)} className="toggle-button">View More</button>
            )}
          </div>
        ))}
      </div>
      {filteredFaculty.length === 0 && <p>No faculty members found.</p>}
    </div>
  );
}

export default FacultyList;
