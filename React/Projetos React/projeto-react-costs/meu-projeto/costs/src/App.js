import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Empresa from './components/pages/Empresa';
import NovoProjeto from './components/pages/NovoProjeto';
import Projeto from './components/pages/Projeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>

      <Navbar/>

      <Container customClass='minHeight'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contato" element={<Contato />}></Route>
          <Route path="/empresa" element={<Empresa />}></Route>
          <Route path="/novoprojeto" element={<NovoProjeto />}></Route>
          <Route path="/projeto" element={<Projeto />}></Route>
        </Routes>
      </Container>
      
      <Footer/>
    
    </Router>
    
  );
}

export default App;
