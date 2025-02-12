import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/home'
import ServiceSection from './components/servicios' 
import TestimonialsSection from './components/testimonios'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <ServiceSection /> 
    <TestimonialsSection /> 
    <ContactSection />
    <Footer />
  </StrictMode>
)