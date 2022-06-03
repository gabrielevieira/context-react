
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contato from './components/Contato';
import Home from './components/Home';
import Nav from './components/Nav';
import Produtos from './components/Produtos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
