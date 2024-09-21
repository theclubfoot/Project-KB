import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/AuthPage';
import QuestionsPage from './components/QuestionsPage';
// eslint-disable-next-line no-unused-vars
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;