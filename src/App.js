import './App.css';
import TopMenu from './components/TopMenu';
import Home from './components/Home/index';
import Service from './components/Service/index';
import Why from './components/Why/index';
import Products from './components/Products/index';
import Customer from './components/Customer/index';
import News from './components/News/index';
import Hiring from './components/Hiring/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Home />
      <Service />
      <Why />
      <Products />
      <Customer />
      <News />
      <Hiring />
      <Footer />
    </div>
  );
}

export default App;
