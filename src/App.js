import{BrowserRouter as Main,Route,Routes}from "react-router-dom";
import About from './components/About';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <>
      <Main>
      <Navbar/>
      <Routes>
      <Route  path='/' element={<Home />} /> 
      <Route  path='/About' element={<About />} /> 
        </Routes>
      </Main>
    </>
  );
}

export default App;
