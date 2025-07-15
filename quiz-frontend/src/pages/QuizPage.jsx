import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import axios from 'axios';

const QuizPage = () => {

    let navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState('');
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await axios.get('https://quiz-backend-bay-chi.vercel.app/api/getquiz');
                const quizData = response.data?.data;
                if (quizData && Array.isArray(quizData)) {
                    setQuestions(quizData);
                } else {
                    setError("Quiz data format is invalid");
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setError('Failed to load quiz questions.');
            } finally {
                setLoading(false);
            }
        };
        fetchQuiz();
    }, []);

    const handleOptionClick = (option) => {
        setSelected(option);
    };

    const handleNext = () => {
        if (selected === questions[current].ans) {
            setScore((prev) => prev + 1);
        }
        if (current + 1 < questions.length) {
            setCurrent((prev) => prev + 1);
            setSelected('');
        } else {
            setShowResult(true);
        }
    };

    const handleSubmit = async () => {

        try {
            let user = localStorage.getItem("user")

            let result = await axios.post("https://quiz-backend-bay-chi.vercel.app/api/submitquiz", {
                userId: user.id,
                marks: score
            })

            console.log(result)

        } catch (error) {
            console.log(error.message)
        }



        navigate("/dashboard")
    };

    const q = questions[current];

    if (loading) {
        return <p className="text-center mt-10 text-lg font-medium text-gray-700">Loading quiz...</p>;
    }

    if (error) {
        return <p className="text-center mt-10 text-red-600">{error}</p>;
    }

    if (showResult) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-4">🎉 Quiz Completed!</h2>
                    <p className="text-xl mb-6">
                        You scored <span className="font-semibold text-blue-600">{score}</span> out of {questions.length}
                    </p>
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                    >
                        🔁 Back To DashBoard
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl">
                <div className="mb-4 text-sm text-gray-500">
                    Question {current + 1} of {questions.length}
                    <div className="w-full h-2 bg-gray-200 rounded mt-1">
                        <div
                            className="h-2 bg-blue-500 rounded transition-all duration-300"
                            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Q{current + 1}: {q?.question}</h2>

                <ul className="space-y-4">
                    {q?.options?.map((opt, idx) => (
                        <li key={idx}>
                            <button
                                onClick={() => handleOptionClick(opt)}
                                className={`w-full text-left px-5 py-3 rounded-xl border transition duration-200
                                    ${selected === opt
                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                                        : 'bg-white text-gray-800 hover:bg-gray-100 border-gray-300'}
                                `}
                            >
                                {opt}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    onClick={handleNext}
                    className="mt-8 w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
                    disabled={!selected}
                >
                    {current + 1 < questions.length ? 'Next →' : 'Finish ✅'}
                </button>
            </div>
        </div>
    );
};

export default QuizPage;
