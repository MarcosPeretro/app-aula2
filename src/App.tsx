import './App.css';
import Cadastro from './pages/cadastro';
import Consulta from './pages/consulta';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom"
import Home from './pages/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home />}/>
        <Route path='/cadastro' element={<Cadastro />}/>
        <Route path='/consulta' element={<Consulta />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
