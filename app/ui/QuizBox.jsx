'use client'


import { useState } from 'react';

export default function QuizBox({ quizData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      if (answer === quizData.questions[index].correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  if (showResults) {
    const totalScore = calculateScore();
    return (
      <div>
        <h2>Quiz Results</h2>
        <p>Total Points: {totalScore}</p>
      </div>
    );
  }

  if (shouldQuizStart) {
    return (
      <div>
        <h2>Quiz Results</h2>
        <p>Total Points: </p>
      </div>
    );
  }

  const currentQuizQuestion = quizData.questions[currentQuestion];

  return (
    <div>
      <h2>{currentQuizQuestion.question}</h2>
      {currentQuizQuestion.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="answer"
              value={option}
              onChange={() => handleAnswerSelect(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <button onClick={handleNextQuestion}>
        {currentQuestion < quizData.questions.length - 1 ? 'Next' : 'Finish'}
      </button>
    </div>
  );



}