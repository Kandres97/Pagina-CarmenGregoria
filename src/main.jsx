import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Rituales from './components/Rituales'
import Amarres from './components/Amarres'
import Testimonios from './components/Testimonios'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <Rituales />
    <Amarres />
    <Testimonios />
  </StrictMode>,
);