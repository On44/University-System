import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Welcome to University, a place where academic excellence, innovation, and community come together.
          Established in 2024, our university has been at the forefront of providing high-quality education that empowers
          students to thrive in an ever-changing world.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At University, our mission is to foster the intellectual, personal, and professional growth of our students.
          We strive to provide a supportive and challenging environment that encourages creativity, critical thinking, and leadership.
          Through comprehensive academic programs, research initiatives, and community engagement, we aim to make a positive impact on
          society and the world at large.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          To be a globally recognized institution that leads in teaching, learning, and research. We envision producing well-rounded
          graduates who are equipped to meet the challenges of the modern world with knowledge, integrity, and passion.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Why Choose University?
        </Typography>
        <Typography variant="body1" paragraph>
          - **Academic Excellence**: Our diverse range of programs ensures that you can pursue your passion in a supportive, challenging,
          and forward-thinking academic environment.
        </Typography>
        <Typography variant="body1" paragraph>
          - **World-Class Faculty**: Learn from highly qualified and experienced faculty members who are committed to delivering innovative
          and engaging learning experiences.
        </Typography>
        <Typography variant="body1" paragraph>
          - **Cutting-Edge Facilities**: Our modern campuses feature state-of-the-art classrooms, laboratories, libraries, and student lounges
          designed to provide a dynamic learning experience.
        </Typography>
        <Typography variant="body1" paragraph>
          - **Research and Innovation**: We encourage students and faculty to engage in groundbreaking research that contributes to solving global
          challenges.
        </Typography>
        <Typography variant="body1" paragraph>
          - **Global Network**: With a vast network of alumni, industry partnerships, and exchange programs, University provides students
          with opportunities for global exposure and career growth.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
            <b>Integrity:</b> We promote an environment of honesty, transparency, and accountability.
        </Typography>
        <Typography variant="body1" paragraph>
            <b>Collaboration:</b> We believe in the power of teamwork and foster a culture of mutual respect and cooperation.
        </Typography>
        <Typography variant="body1" paragraph>
            <b>Innovation:</b> We encourage creative thinking and the exploration of new ideas that drive progress.
        </Typography>
        <Typography variant="body1" paragraph>
            <b>Diversity and Inclusion:</b> We embrace diversity in all its forms, creating an inclusive environment where everyone feels valued and respected.
        </Typography>
        <Typography variant="body1" paragraph>
            <b>Sustainability:</b> We are committed to promoting environmental stewardship and sustainable practices in all aspects of university life.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Campus
        </Typography>
        <Typography variant="body1" paragraph>
          University is home to a vibrant and inclusive campus that provides students with a variety of opportunities to grow academically,
          socially, and professionally. From student clubs and organizations to recreational activities and leadership programs, there is something
          for everyone.
        </Typography>
        <Typography variant="body1" paragraph>
          Our campus is located in Nairobi, Kenya offering students access to a dynamic city with cultural, professional, and personal growth opportunities.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Achievements
        </Typography>
        <Typography variant="body1" paragraph>
          Over the years, University has built a strong reputation for producing successful graduates who excel in their chosen fields.
          Some of our notable achievements include:
        </Typography>
        <ul>
          <li>Highlight some major academic achievements, awards, or recognitions.</li>
          <li>List any innovative research breakthroughs or collaborations.</li>
          <li>Mention any notable alumni and their contributions.</li>
        </ul>
      </Box>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Join Us Today
        </Typography>
        <Typography variant="body1" paragraph>
          At University, we are dedicated to providing students with an education that prepares them for the future. Whether you are just beginning
          your academic journey or advancing your career, we invite you to become part of our thriving community.
        </Typography>
        <Typography variant="body1" paragraph>
          For more information on admissions, programs, or campus life, please explore the rest of our website or contact our admissions team at
          <b>Contact:</b>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
