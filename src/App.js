import './App.css';
import Home from './Home';
import New from './New';
import Diary from './Diary';
import Edit from './Edit';
import { Route, Routes } from 'react-router-dom';


function App() {

 return(
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>

  </div>
  
);
}

export default App;
