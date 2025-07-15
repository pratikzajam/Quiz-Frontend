import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 text-gray-800 font-sans">
      
      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold mb-4 text-indigo-800">🧠 QuizMaster</h1>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Challenge yourself, compete with friends, and sharpen your mind with fun quizzes!
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/login"
            className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full shadow hover:bg-indigo-50 transition font-medium"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition font-medium"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">🚀 Why Choose QuizMaster?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">🎯 Practice Mode</h3>
              <p>Unlimited quizzes to help you improve and track your progress.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">🏆 Leaderboards</h3>
              <p>Compete with users across the world and climb the ranks.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">🛠️ Custom Quizzes</h3>
              <p>Create your own quizzes and share them with friends instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-indigo-600 text-white">
        <p>© 2025 QuizMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
