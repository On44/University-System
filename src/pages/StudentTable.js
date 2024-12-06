import React from 'react';

const StudentTable = () => {
  const students = [
    { id: 1, name: 'John Doe', email: 'john@example.com', program: 'Computer Science' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', program: 'Engineering' },
  ];

  return (
    <div className="container mt-5">
      <h3>Student List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
