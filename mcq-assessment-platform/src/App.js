import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/AuthPage';
import QuestionsPage from './components/QuestionsPage';
// import other necessary components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Temporarily allow direct access to QuestionsPage for testing */}
        <Route path="/questions" element={<QuestionsPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;