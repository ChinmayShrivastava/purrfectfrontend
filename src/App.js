// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NavBar from './navbar';

function App() {
  return (
    <div className='w-full flex flex-col justify-center items-center align-middle'>
      <div className='w-full mb-2'>
        <NavBar />
      </div>
      <div className='w-full sm:w-3/5'>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<h1>About</h1>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;