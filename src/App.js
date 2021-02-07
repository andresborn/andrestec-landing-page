import './App.css';
import { Navbar } from './components/Navbar.js';
import { Header } from './components/Header.js';
import About from './components/About.js';

const App = () => {
  return (
   <div className="App">
     <Navbar />
     <Header />
     <About />
   </div>
  );
}

export default App;
