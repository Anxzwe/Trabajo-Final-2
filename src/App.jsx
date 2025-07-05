import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Formulario from './pages/Formulario';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Formulario />} />
      </Routes>
      <Footer />
    </>
  );
}