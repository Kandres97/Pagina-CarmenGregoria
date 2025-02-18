import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeroSection from './components/home'
import ServiceSection from './components/servicios' 
import TestimonialsSection from './components/testimonios'
import Footer from './components/Footer'
import ExperienceSection from './components/More'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <ServiceSection /> 
    <ExperienceSection />
    <TestimonialsSection /> 
    
    <Footer />
  </StrictMode>
)