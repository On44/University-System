import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseEnrollmentForm from "./pages/CourseEnrollmentForm";
import CourseTable from "./pages/CourseTable";
import FacultyList from "./pages/FacultyList";
import Notifications from "./pages/Notifications";
import StudentList from "./pages/StudentList";
import OfferForm from "./pages/OfferForm";
import StudentTable from "./pages/StudentTable";
import Footer from "./components/Footer"; // Optional
import LecturerDashboard from "./pages/LecturerDashboard"; // Lecturer Dashboard
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import CourseManagement from "./pages/CourseManagement";
import DepartmentManagement from "./pages/DepartmentManagement";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import AuthPage from "./pages/AuthPage";

// Example sendNotification function
const sendNotification = (message) => {
  // Example logic to simulate sending a notification
  console.log("Sending notification: ", message);
  // You could integrate an API or other service here (e.g., Firebase, email API, etc.)
};

function App() {
  return (
    <Router>
      {/* Navbar with Hamburger Menu */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<h2>Welcome to the University System</h2>} />
        <Route path="/course-enrollment" element={<CourseEnrollmentForm />} />
        <Route path="/offer-form" element={<OfferForm />} />
        <Route path="/course-table" element={<CourseTable />} />
        <Route path="/student-table" element={<StudentTable />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/faculty-list" element={<FacultyList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/course-management" element={<CourseManagement />} />
        <Route path="/department-management" element={<DepartmentManagement />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth-page" element={<AuthPage />} />
        
        {/* Notifications Page, passing the sendNotification function as prop */}
        <Route
          path="/notifications"
          element={<Notifications sendNotification={sendNotification} />}
        />
        
        <Route path="/lecturer-dashboard" element={<LecturerDashboard />} />
      </Routes>

      {/* Footer remains consistent across all routes */}
      <Footer />
    </Router>
  );
}

export default App;