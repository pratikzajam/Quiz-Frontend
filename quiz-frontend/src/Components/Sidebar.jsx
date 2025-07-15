const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-100 p-4 h-screen shadow-md">
      <ul className="space-y-4 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">🏠 Dashboard</li>
        <li className="hover:text-blue-600 cursor-pointer">🧪 Start Quiz</li>
        <li className="hover:text-blue-600 cursor-pointer">📊 My Scores</li>
        <li className="hover:text-blue-600 cursor-pointer">👤 Profile</li>
        <li className="hover:text-red-500 cursor-pointer">🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
