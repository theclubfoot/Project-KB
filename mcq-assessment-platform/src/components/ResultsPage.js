import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ResultsPage.module.css';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 10 };

  const percentage = Math.round((score / totalQuestions) * 100);

  const handleReviewClick = () => {
    navigate('/review', { state: { score, totalQuestions } });
  };

  return (
    <div className={styles.resultsContainer}>
      <h1 className={styles.title}>Quiz Results</h1>
      <div className={styles.scoreCard}>
        <p className={styles.scoreText}>Your Score: {score} out of {totalQuestions}</p>
        <p className={styles.percentageText}>Percentage: {percentage}%</p>
      </div>
      <div className={styles.messageBox}>
        {percentage >= 70 ? (
          <p className={styles.successMessage}>Congratulations! You passed the quiz!</p>
        ) : (
          <p className={styles.failureMessage}>You didn't pass this time. Keep practicing!</p>
        )}
      </div>
      <button className={styles.reviewButton} onClick={handleReviewClick}>Review Answers</button>
    </div>
  );
}

export default ResultsPage;