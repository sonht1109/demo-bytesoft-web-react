import './App.css';
import TopMenu from './components/TopMenu';
import Home from './components/Home/index';
import Service from './components/Service/index';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Home />
      <Service />
    </div>
  );
}

export default App;
