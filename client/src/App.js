import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/public' element={<Public />} />
      <Route path='/protected' element={<Protected />} />
    </Routes>
  );
}

export default App;
