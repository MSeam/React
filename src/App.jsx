import CreateUser from './components/CreateUser';
import Users from './components/Users';

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 to-indigo-300 w-full min-h-screen pt-10">
        <CreateUser />
        <Users />
      </div>
    </>
  );
}

export default App;
