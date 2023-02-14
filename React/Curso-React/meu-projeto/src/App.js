import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/empresa" element={<Empresa />}>
        </Route>
        <Route path="/contato" element={<Contato />}>
        </Route>
      </Routes>
      <Footer />
      
    </Router>
    
  )
}

export default App;
