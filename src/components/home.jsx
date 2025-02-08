import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://res.cloudinary.com/dprtewqr8/image/upload/v1738356317/tarot_bx0hbh.jpg",
      title: "Amarres de Amor",
      subtitle: "Recupera tu ser amado",
      description: "Brujos de catemaco, Expertos en Amarres de Amor, Endulzamiento de pareja"
    },
    {
      image: "https://res.cloudinary.com/dprtewqr8/image/upload/v1738357330/descarga_1_m1zvfl.jpg",
      title: "Amarres Sexuales y del Mismo Sexo",
      subtitle: "Expertos en Amarres de toda clase",
      description: "Especialistas en amarres y retorno de pareja"
    },
    {
      image: "https://res.cloudinary.com/dprtewqr8/image/upload/v1738357468/craneo-juguete-libro-decoraciones-halloween_23-2147905750_mbznom.jpg",
      title: "Amarres Efectivos",
      subtitle: "Resultados Garantizados",
      description: "Recupera a Tu Ser Amado con Nuestros Rituales Ancestrales, recupera la felicidad"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Hola, deseo realizar una consulta';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  // Nueva función para cerrar el menú al hacer clic en un enlace
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" id="inicio">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-[#FFD700]/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="text-white text-2xl font-bold border-l-4 border-red-600 pl-4">
               EXPERTOS EN AMARRES<br /> DE AMOR
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              className="md:hidden text-white hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              <a href="#inicio" className="text-red-500 font-medium hover:text-red-400" aria-label="Inicio">INICIO</a>
             <a href="#servicios" className="text-[#FFD700] hover:text-yellow-400 transition-colors" aria-label="Servicios">SERVICIOS</a>
              <a href="#testimonios" className="text-[#FFD700] hover:text-yellow-400 transition-colors" aria-label="Testimonios">TESTIMONIOS</a>
              <a href="#contacto" className="text-red-500 hover:text-red-400 transition-colors" aria-label="Contacto">CONTACTO</a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden bg-black/95 border-t border-[#FFD700]/30 transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#inicio" onClick={handleNavClick} className="text-red-500 font-medium px-4 py-2 hover:bg-red-500/10" aria-label="Inicio">INICIO</a>
            <a href="#servicios" onClick={handleNavClick} className="text-[#FFD700] hover:text-yellow-400 px-4 py-2 hover:bg-[#FFD700]/10 transition-colors" aria-label="Servicios">SERVICIOS</a>
            <a href="#testimonios" onClick={handleNavClick} className="text-[#FFD700] hover:text-yellow-400 px-4 py-2 hover:bg-[#FFD700]/10 transition-colors" aria-label="Testimonios">TESTIMONIOS</a>
            <a href="#contacto" onClick={handleNavClick} className="text-red-500 hover:text-red-400 px-4 py-2 hover:bg-red-500/10 transition-colors" aria-label="Contacto">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={currentSlide !== index}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">
                  {slide.title}
                </h1>
                <h2 className="text-xl md:text-4xl mb-6 text-[#FFD700] font-medium">
                  {slide.subtitle}
                </h2>
                <p className="text-base md:text-xl max-w-3xl mx-auto mb-8 text-gray-100">
                  {slide.description}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  aria-label="Iniciar consulta por WhatsApp"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-sm text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
                >
                  Consulta sin costo
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          aria-label="Diapositiva anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#FFD700]/70 text-white rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Siguiente diapositiva"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#FFD700]/70 text-white rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir a diapositiva ${index + 1}`}
              aria-selected={currentSlide === index}
              role="tab"
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-red-600 w-8' 
                  : 'bg-[#FFD700]/70 hover:bg-[#FFD700]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Iniciar consulta por WhatsApp"
        className="fixed bottom-8 right-8 bg-green-700 hover:bg-green-800 px-6 py-3 rounded-full shadow-lg hover:shadow-green-800/50 transition-all duration-300 z-50 flex items-center gap-3"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 fill-current text-white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-white font-bold text-lg">Consulta Ahora</span>
      </button>
    </div>
  );
};

export default HeroSection;