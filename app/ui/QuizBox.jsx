"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function QuizBox({ quizData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    id: null,
    is_correct: null,
    correct_ans: null,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    if (selectedOption.id != null) {
      return;
    }
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);

    // Analyze the answer
    analyzeAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption({
        id: null,
        is_correct: null,
        correct_ans: null,
      });
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion >= 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption({
        id: null,
        is_correct: null,
        correct_ans: null,
      });
    }
  };

  function analyzeAnswer(answer) {
    if (selectedAnswers[currentQuestion]) {
      let correctAns = insertCorrectAns();
      const newSelectedOption = {
        id: answer.id,
        is_correct: answer.is_correct,
        correct_ans: correctAns,
      };
      setSelectedOption(newSelectedOption);
    } else {
      setSelectedOption({
        id: null,
        is_correct: null,
        correct_ans: null,
      });
    }
  }

  const calculateScore = () => {
    console.log(selectedAnswers)

    let total = 0
    selectedAnswers.map((ans) => ans.is_correct && total++ )
    return total
  };

  const insertCorrectAns = () => {
    return quizData.questions[currentQuestion].options.map(
      (ques) => ques.is_correct && ques.description
    );
  };

  useEffect(() => {
    if (selectedAnswers[currentQuestion]) {
      analyzeAnswer(selectedAnswers[currentQuestion]);
    } else {
      setSelectedOption({
        id: null,
        is_correct: null,
        correct_ans: null,
      });
    }
  }, [currentQuestion, selectedAnswers]);

  if (showResults) {
    const totalScore = calculateScore();
    return (
      <div className="text-white py-10">
        <h2 className="text-xl">Quiz Results</h2>
        <p className="text-sm">Total Points: {totalScore}</p>
      </div>
    );
  }

  const currentQuizQuestion = quizData.questions[currentQuestion];

  return (
    <section className="w-[500px] max-w-full ">
      <p className="text-center pb-2 text-white">15:00</p>
      <div className="bg-white p-4 px-6 rounded-xl">
        <h2 className="font-semibold">{currentQuizQuestion.description}</h2>
        <section className="space-y-4 pt-4 min-h-[400px] flex flex-col justify-start ">
          {currentQuizQuestion.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswerSelect(option)}
              className={clsx(
                "border  rounded-full p-2 px-6 border-slate-300 cursor-pointer font-medium",
                {
                  "bg-green-500 text-white":
                    selectedOption.id == option.id && selectedOption.is_correct,
                },
                {
                  "bg-red-500 text-white":
                    selectedOption.id == option.id &&
                    !selectedOption.is_correct,
                }
              )}
            >
              <p>
                {index + 1}. {option.description}
              </p>
            </div>
          ))}
          {selectedOption.correct_ans ? (
            <div
              style={{ marginTop: "auto" }}
              className="bg-green-100 h-16 flex justify-center items-center"
            >
              <p className="text-green-600 text-sm">
                {selectedOption.correct_ans}
              </p>
            </div>
          ) : (
            <></>
          )}
        </section>
      </div>

      <div className="flex pt-2 items-center justify-between text-white">
        <button
          onClick={handlePreviousQuestion}
          className={clsx(
            "bg-blue-500 hover:bg-blue-400 p-1 px-8 rounded-full ",
            {
              "bg-gray-500 hover:bg-gray-400": currentQuestion == 0,
            }
          )}
        >
          Previous
        </button>
        <p className="">
          {currentQuestion + 1}/{quizData.questions.length}
        </p>
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 p-1 px-8 rounded-full hover:bg-blue-400"
        >
          {currentQuestion < quizData.questions.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </section>
  );
}
