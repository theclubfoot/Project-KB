import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ReviewPage.module.css';

function ReviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions, userAnswers } = location.state || { questions: [], userAnswers: [] };

  const handleBackToResults = () => {
    navigate('/results');
  };

  if (!questions || questions.length === 0) {
    return (
      <div className={styles.reviewContainer}>
        <h1 className={styles.title}>No Review Available</h1>
        <p>There are no questions to review. Please complete the quiz first.</p>
        <button className={styles.backButton} onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className={styles.reviewContainer}>
      <h1 className={styles.title}>Review Answers</h1>
      {questions.map((question, index) => (
        <div key={index} className={styles.questionCard}>
          <h3 className={styles.questionText}>{question.question}</h3>
          <p className={styles.userAnswer}>
            Your answer: <span className={userAnswers[index] === question.correctAnswer ? styles.correct : styles.incorrect}>
              {userAnswers[index] || 'Not answered'}
            </span>
          </p>
          <p className={styles.correctAnswer}>Correct answer: {question.correctAnswer}</p>
        </div>
      ))}
      <button className={styles.backButton} onClick={handleBackToResults}>Back to Results</button>
    </div>
  );
}

export default ReviewPage;