import React from "react";

function App() {
  return (
    <div style={{
      maxWidth: 600,
      margin: "auto",
      padding: 20,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: 8,
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ color: "#2c3e50", borderBottom: "2px solid #2980b9", paddingBottom: 8 }}>
        Shreya Bhaurao Patil
      </h1>

      <p style={{ fontSize: 14, color: "#34495e" }}>
        Email: <a href="mailto:shreyap@gmail.com">shreyap@gmail.com</a> | Phone: 9876543210 | Location: Kolhapur, Maharashtra
      </p>

      <p style={{ fontSize: 14, marginBottom: 24 }}>
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/shreyap-bhaurao-patil" target="_blank" rel="noreferrer">
          linkedin.com/in/shreyap-bhaurao-patil
        </a>
      </p>

      <h2 style={{ color: "#2980b9", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Skills</h2>
      <ul style={{ color: "#34495e", fontSize: 14 }}>
        <li>Languages: JavaScript, Java, Python</li>
        <li>Frameworks: React, Node.js, Express</li>
        <li>Databases: MySQL, MongoDB</li>
        <li>Tools: Git, Docker, VS Code</li>
      </ul>

      <h2 style={{ color: "#2980b9", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Education</h2>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        Bachelor's Degree – D.Y.patil clg of engg and tech kasba bawada, Kolhapur
      </p>

      <h2 style={{ color: "#2980b9", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Projects</h2>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        <strong>Resume Builder Web App</strong> – Developed a React-based resume builder application with live preview and export to PDF functionality.
      </p>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        <strong>Online E-commerce Platform</strong> – Built a full-stack MERN application enabling users to shop, add to cart, and checkout with payment integration.
      </p>

      <h2 style={{ color: "#2980b9", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Certifications</h2>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        Full Stack Web Development - Coursera (2025)
      </p>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        Advanced JavaScript - Udemy (2024)
      </p>

      <h2 style={{ color: "#2980b9", borderBottom: "1px solid #ccc", paddingBottom: 4 }}>Internships</h2>
      <p style={{ color: "#34495e", fontSize: 14 }}>
        Software Development Intern at Infosys (3 months) - Contributed to front-end development and code optimization.
      </p>
    </div>
  );
}

export default App;
