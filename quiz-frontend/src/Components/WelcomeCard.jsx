const WelcomeCard = () => {
  const storedUser = localStorage.getItem("user");
  const User = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6">
      <h2 className="text-2xl font-semibold">
        Welcome, {User?.name ?? "Guest"}
      </h2>
      <p className="text-gray-600 mt-2">
        Glad to see you back. Ready to challenge yourself?
      </p>
    </div>
  );
};

export default WelcomeCard;