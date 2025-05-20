import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Rituales from './components/Rituales';
import Amarres from './components/Amarres';
import Tarot from './components/Tarot';
import Testimonios from './components/Testimonios';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Rituales />
    <Amarres />
      <Tarot />
    <Testimonios />
    <ContactSection />
    <Footer />
  </StrictMode>,
);