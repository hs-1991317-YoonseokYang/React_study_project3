import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { Route, Routes, Link } from 'react-router-dom';


function App() {

 return(
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>
      <Link to={"/edit"}>Edit</Link>

    </div>
  </div>
  
);
}

export default App;
