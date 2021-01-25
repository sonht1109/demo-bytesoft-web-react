import './App.css';
import TopMenu from './components/TopMenu';
import Home from './components/Home/index';
import Service from './components/Service/index';
import Why from './components/Why/index';
import Products from './components/Products/index';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Home />
      <Service />
      <Why />
      <Products />
    </div>
  );
}

export default App;
