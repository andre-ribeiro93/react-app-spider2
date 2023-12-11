import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Characters from './pages/characters/characters';
import MessageSent from './pages/messageSent/messageSent';

function App() {

  return ( 
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/contato' element={<Contato />} />

        <Route path='/characters' element={<Characters />} />

        <Route path='/messageSent' element={<MessageSent/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;