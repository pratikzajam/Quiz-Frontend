const ScoreTable = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4">📊 Your Quiz History</h3>
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="p-3">Quiz</th>
            <th className="p-3">Score</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time Taken</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t">
            <td className="p-3">JavaScript</td>
            <td className="p-3">8 / 10</td>
            <td className="p-3">2025-07-10</td>
            <td className="p-3">5 mins</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">HTML</td>
            <td className="p-3">9 / 10</td>
            <td className="p-3">2025-07-11</td>
            <td className="p-3">4 mins</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
