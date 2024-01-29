import{BrowserRouter as Main,Route,Routes}from "react-router-dom";
import About from './components/About';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import './App.css';
import NotesState from "./context/note/NotesState";
function App() {
  return (
    <>
    <NotesState>
      <Main>
      <Navbar/>
      <Routes>
      <Route  path='/' element={<Home />} /> 
      <Route  path='/About' element={<About />} /> 
        </Routes>
      </Main>
      </NotesState>
    </>
  );
}

export default App;
