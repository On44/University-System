import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  IconButton, 
  Typography 
} from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // Indigo Blue
    },
    secondary: {
      main: "#FFC107", // Yellow for accents
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#FFC107", // Yellow for highlights
    },
  },
});

const CourseTable = () => {
  const [courses, setCourses] = useState([]);

  // Sample data for courses, can be replaced by an API call
  const sampleCourses = [
    { id: 1, courseName: "Computer Science 101", instructor: "Dr. John Doe", credits: 3, semester: "Fall", department: "Computer Science" },
    { id: 2, courseName: "Mathematics 202", instructor: "Dr. Jane Smith", credits: 4, semester: "Spring", department: "Mathematics" },
    { id: 3, courseName: "Physics 303", instructor: "Dr. Albert Einstein", credits: 3, semester: "Fall", department: "Physics" },
    { id: 4, courseName: "Chemistry 404", instructor: "Dr. Marie Curie", credits: 4, semester: "Spring", department: "Chemistry" },
    { id: 5, courseName: "English Literature 505", instructor: "Dr. William Shakespeare", credits: 2, semester: "Fall", department: "Literature" },
  ];

  // Simulating fetching data from an API
  useEffect(() => {
    // Replace this with an API call in a real-world application
    setCourses(sampleCourses);
  }, []);

  // Delete Course handler (simulation)
  const handleDelete = (courseId) => {
    setCourses(courses.filter(course => course.id !== courseId));
  };

  // Render the Course Table
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          Course List
        </Typography>
        
        <TableContainer component={Paper} sx={{ marginTop: 4 }}>
          <Table sx={{ minWidth: 650 }} aria-label="course table">
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell>Instructor</TableCell>
                <TableCell>Credits</TableCell>
                <TableCell>Semester</TableCell>
                <TableCell>Department</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell component="th" scope="row">
                    {course.courseName}
                  </TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>{course.credits}</TableCell>
                  <TableCell>{course.semester}</TableCell>
                  <TableCell>{course.department}</TableCell>
                  <TableCell align="center">
                    {/* View Course Details Link */}
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/course-details/${course.id}`} // Link to course details page
                      sx={{ marginRight: 1, textTransform: 'none' }}
                    >
                      View Details
                    </Button>

                    {/* Edit Course Button */}
                    <IconButton
                      color="secondary"
                      component={Link}
                      to={`/edit-course/${course.id}`} // Link to edit course page
                      sx={{ marginRight: 1 }}
                    >
                      <EditIcon />
                    </IconButton>

                    {/* Delete Course Button */}
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(course.id)} // Deletes the course
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </ThemeProvider>
  );
};

export default CourseTable;
