import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container spacing={2} justifyContent="center" className="footer-links">
        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" className="footer-title">
            {/* Empty space for any other links you may want */}
          </Typography>
          <Link href="/" color="inherit" underline="hover" className="footer-link">
            Home
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" className="footer-title">
            {/* Empty space for any other links you may want */}
          </Typography>
          <Link href="/about" color="inherit" underline="hover" className="footer-link">
            <b>About Us</b>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" className="footer-title">
            {/* Empty space for any other links you may want */}
          </Typography>
          <Link href="/contact" color="inherit" underline="hover" className="footer-link">
            <b>Contact</b>
          </Link>
        </Grid>
      </Grid>

      {/* Footer Bottom Section */}
      <Box className="footer-bottom">
        <Typography variant="body2" className="footer-text">
          © {new Date().getFullYear()} University System. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
