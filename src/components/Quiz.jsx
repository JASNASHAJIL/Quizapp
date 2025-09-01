import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Twitter"],
    answer: "Facebook",
  },
  {
    question: "What is the default port for React development server?",
    options: ["3000", "5000", "8080", "4200"],
    answer: "3000",
  },
];

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(currentQ + 1);
        setSelectedOption("");
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  // 🎨 Internal CSS (styles as JS objects)
  const styles = {
    app: {
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      marginTop: "50px",
      color: "#333",
    },
    card: {
      background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      padding: "20px",
      margin: "auto",
      width: "400px",
      borderRadius: "15px",
      boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
    },
    button: {
      padding: "10px 15px",
      marginTop: "15px",
      border: "none",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      color: "white",
      cursor: "pointer",
      transition: "0.3s",
    },
    optionBtn: {
      padding: "10px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      background: "#fff",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
      transition: "0.3s",
    },
    correct: {
      background: "linear-gradient(135deg, #11998e, #38ef7d)",
      color: "white",
    },
    incorrect: {
      background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
      color: "white",
    },
    optionsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "15px",
    },
  };

  return (
    <div style={styles.app}>
      <h1>🌈 Quiz App</h1>
      {showScore ? (
        <div style={styles.card}>
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button style={styles.button} onClick={restartQuiz}>
            🔄 Restart Quiz
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h2>
            Question {currentQ + 1}/{questions.length}
          </h2>
          <p>{questions[currentQ].question}</p>

          <div style={styles.optionsContainer}>
            {questions[currentQ].options.map((option, index) => {
              // Default style
              let btnStyle = { ...styles.optionBtn };

              // If user selected, highlight correct/incorrect
              if (selectedOption) {
                if (option === questions[currentQ].answer) {
                  btnStyle = { ...btnStyle, ...styles.correct };
                } else if (option === selectedOption) {
                  btnStyle = { ...btnStyle, ...styles.incorrect };
                }
              }

              return (
                <button
                  key={index}
                  style={btnStyle}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedOption}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
