import './App.css';
//Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  const URL = 'https://sei-port.herokuapp.com/';
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route path='/projects'>
         <Projects URL={URL} />
       </Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
