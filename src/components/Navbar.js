import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Custom Theme with Indigo Blue
const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46E5", // Indigo Blue
    },
    secondary: {
      main: "#FFC107", // Yellow (Optional for accents)
    },
    text: {
      primary: "#FFFFFF", // White text
      secondary: "#FFC107", // Yellow for highlights
    },
  },
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track active link
  const location = useLocation(); // Get the current path

  // Update the active link whenever the location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Toggle the sidebar (Drawer) visibility
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* AppBar for top navigation */}
      <AppBar
        position="fixed" // Ensures the Navbar stays fixed at the top
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} // Keep it above the drawer
      >
        <Toolbar>
          {/* Hamburger Icon to open the Drawer */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Toggle navigation"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            University System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer for the vertical sidebar */}
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main, // Indigo Blue
            color: "white",
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <br />
        {/* Sidebar Menu Items */}
        <List>
          <br />
          {[ 
            { path: "/", label: "Home" },
            { path: "/admin-page", label: "Admin Page"},
            { path: "/course-enrollment", label: "Course Enrollment" },
            { path: "/auth-page", label: "Student Login" },
            { path: "/course-table", label: "Course Table" },
            { path: "/student-list", label: "Student List" },
            { path: "/faculty-list", label: "Faculty List" },
            { path: "/notifications", label: "Notifications" },
            { path: "/lecturer-dashboard", label: "Lecturer Dashboard" }, // Added Lecturer Dashboard
          ].map(({ path, label }) => (
            <ListItem button key={path} onClick={toggleDrawer}>
              <Link
                to={path}
                style={{
                  textDecoration: "underline", // Underline every link
                  color: "inherit", // Ensure color is inherited
                }}
              >
                <ListItemText
                  primary={label}
                  sx={{
                    fontWeight: activeLink === path ? "bold" : "normal", // Highlight active link
                    color: activeLink === path
                      ? theme.palette.secondary.main // Yellow for active link
                      : theme.palette.text.primary, // White for inactive links
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "white" }} />
      </Drawer>

      {/* Spacer to ensure other components do not overlap */}
      <Box sx={{ height: "64px" }} />
    </ThemeProvider>
  );
};

export default Navbar;