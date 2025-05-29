import React from "react";

const InstructionsPage = ({ onStartTest }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",         // Align all content leftward
        justifyContent: "flex-start",
        marginTop: "100px",               // Push down from top
        padding: "1rem 2rem",
        marginLeft: "50px",               // Actual left shift
        maxWidth: "1000px",               // Wider box for longer lines
      }}
    >
      <h2
        style={{
          fontSize: "3.5rem",
          fontWeight: "700",
          marginBottom: "1.5rem",
          color: "#000000",
          alignSelf: "flex-start",        // Prevent auto-centering
        }}
      >
        Instructions
      </h2>

      <ul
        style={{
          fontSize: "1.75rem",
          lineHeight: "4rem",           // Spacious line height
          color: "#333333",
          listStylePosition: "inside",
          textAlign: "left",
          paddingLeft: 0,
          margin: 0,
        }}
      >
        <li><strong>Enter your name</strong> before starting the audio questions.</li>
        <li>Use headphones for better audio clarity.</li>
        <li>Listen carefully to each audio clip.</li>
        <li><strong>Each audio will be played only twice.</strong></li>
        <li>Answer all 5 questions before submitting.</li>
        <li><strong>Do not refresh the page</strong> during the test.</li>
        <li><strong>Once submitted, answers cannot be changed.</strong></li>
      </ul>

      <button
        onClick={onStartTest}
        style={{
          marginTop: "3rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#000000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "700",
          fontSize: "1.15rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#555555")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#000000")
        }
      >
        Start Test
      </button>
    </div>
  );
};

export default InstructionsPage;
