import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionsPage.module.css';

// Move the questions array inside the component to make it accessible
function QuestionsPage() {
    const questions = [
        {
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: "Paris"
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Mars", "Jupiter", "Venus", "Saturn"],
          correctAnswer: "Mars"
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
          correctAnswer: "Leonardo da Vinci"
        },
        {
          question: "What is the largest ocean on Earth?",
          options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
          correctAnswer: "Pacific Ocean"
        },
        {
          question: "Which element has the chemical symbol 'O'?",
          options: ["Gold", "Oxygen", "Silver", "Iron"],
          correctAnswer: "Oxygen"
        },
        {
          question: "In what year did World War II end?",
          options: ["1943", "1945", "1947", "1950"],
          correctAnswer: "1945"
        },
        {
          question: "What is the largest mammal in the world?",
          options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correctAnswer: "Blue Whale"
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
          correctAnswer: "William Shakespeare"
        },
        {
          question: "What is the capital of Japan?",
          options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
          correctAnswer: "Tokyo"
        },
        {
          question: "Which of these is not a primary color?",
          options: ["Red", "Blue", "Yellow", "Green"],
          correctAnswer: "Green"
        }
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  const handleNext = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setSelectedAnswer('');
      setTimer(30);
    } else {
      navigate('/results');
    }
  }, [currentQuestion, navigate, questions.length]);

  useEffect(() => {
    if (timer > 0) {
      const timerId = setTimeout(() => setTimer(prevTimer => prevTimer - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      handleNext();
    }
  }, [timer, handleNext]);

  // Removed handleAnswerSelect function as it's not being used

  return (
    <div className={styles.questionsContainer}>
      <div className={styles.questionCard}>
        <div className={styles.timer}>Time left: {timer}s</div>
        <h2 className={styles.questionText}>{questions[currentQuestion].question}</h2>
        <div className={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`${styles.optionButton} ${selectedAnswer === option ? styles.selected : ''}`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default QuestionsPage;