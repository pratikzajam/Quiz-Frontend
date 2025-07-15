import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import WelcomeCard from '../Components/WelcomeCard';
import StartQuizButton from '../Components/StartQuizButton';
import ScoreTable from '../Components/ScoreTable';


const UserDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-50 overflow-auto">
          <WelcomeCard />
          <StartQuizButton />
          <ScoreTable />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
