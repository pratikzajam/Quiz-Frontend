import React from 'react';
import { useNavigate } from 'react-router';

const StartQuizButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quiz'); 
  };

  return (
    <div className="mb-6">
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium shadow"
      >
        🎯 Start New Quiz
      </button>
    </div>
  );
};

export default StartQuizButton;
