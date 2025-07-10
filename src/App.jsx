import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Galeria from './components/Gallery/Galeria';
import Formulario from './components/Formulario/Formulario';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Formulario />} />
      </Routes>
      <Footer />
    </>
  );
}