import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

const user = {
  id: 1,
  name: "Daniele",
  img: "https://github.com/Calisti-Daniele.png"
};

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar user={user}/>
        <Main />
      </div>
    </div>
  );
}

export default App;
