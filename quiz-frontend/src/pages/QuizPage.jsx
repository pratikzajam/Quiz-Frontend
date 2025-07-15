import React, { useState } from 'react';

const questions = [
    {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "95°C", "100°C", "110°C"],
        ans: "100°C"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        ans: "Paris"
    }
];

const QuizPage = () => {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOptionClick = (option) => {
        setSelected(option);
    };

    const handleNext = () => {
        if (selected === questions[current].ans) {
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
            setSelected('');
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="text-center mt-10">
                <h2 className="text-2xl font-bold">Quiz Completed!</h2>
                <p className="text-lg mt-4">Your Score: {score} / {questions.length}</p>
            </div>
        );
    }

    const q = questions[current];

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Q{current + 1}: {q.question}</h2>
            <ul className="space-y-3">
                {q.options.map((opt, idx) => (
                    <li key={idx}>
                        <button
                            onClick={() => handleOptionClick(opt)}
                            className={`w-full px-4 py-2 border rounded ${selected === opt ? 'bg-blue-500 text-white' : 'bg-white'
                                }`}
                        >
                            {opt}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleNext}
                className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
                disabled={!selected}
            >
                {current + 1 < questions.length ? 'Next' : 'Finish'}
            </button>
        </div>
    );
};

export default QuizPage;
