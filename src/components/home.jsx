import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739844945/tarot_bx0hbh_eb4wbc_dbyabo.jpg",
      title: "Amarres de Amor",
      subtitle: "Recupera tu ser amado",
      description: "Brujos de catemaco, Expertos en Amarres de Amor, Endulzamiento de pareja"
    },
    {
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739844944/descarga_1_m1zvfl_qwf4rz_kv9en9.jpg ",
      title: "Amarres Sexuales y del Mismo Genero",
      subtitle: "Expertos en Amarres de toda clase",
      description: "Especialistas en amarres, amarres sexuales y retorno de pareja "
    },
    {
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739844944/inivideo_edl4wf_klxfge_c9zuy5.jpg ",
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
    const message = 'Maestra Gregoria, Quiero Consultar Con usted';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToTestimonios = () => {
    const testimoniosSection = document.getElementById('testimonios');
    if (testimoniosSection) {
      testimoniosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" id="inicio">
      {/* Botón Ver Testimonios - Adaptado para móvil */}
      <div className="absolute left-2 sm:left-4 top-[85%] z-50 flex items-center scale-75 sm:scale-100">
        <div className="bg-[#FFD700] py-1 px-3 rounded-lg shadow-xl transform -rotate-90 origin-left hover:scale-105 transition-transform">
          <button 
            onClick={scrollToTestimonios}
            className="text-black hover:text-red-700 transition-colors text-xs font-bold tracking-widest whitespace-nowrap"
            aria-label="Ver testimonios"
          >
            VER TESTIMONIOS
          </button>
        </div>
      </div>

      {/* Navigation Bar - Mejorada para responsive */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-[#FFD700]/30" role="navigation" aria-label="Menú principal">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 sm:py-4">
            <div className="text-white text-lg sm:text-2xl font-bold border-l-4 border-red-600 pl-2 sm:pl-4">
              MAESTRA GREGORIA
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              name="toggle-menu"
              className="md:hidden text-white hover:text-red-500 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-white">
              <a href="#inicio" className="text-red-500 font-medium hover:text-red-400 text-sm lg:text-base" aria-current="page">INICIO</a>
              <a href="#servicios" className="text-[#FFD700] hover:text-yellow-400 transition-colors text-sm lg:text-base">SERVICIOS</a>
              <a href="#retornos" className="text-[#FFD700] hover:text-yellow-400 transition-colors text-sm lg:text-base">RETORNOS</a>
              <a href="#testimonios" className="text-[#FFD700] hover:text-yellow-400 transition-colors text-sm lg:text-base">TESTIMONIOS</a>
              <a href="#contacto" className="text-red-500 font-medium hover:text-red-400 text-sm lg:text-base">CONTACTO</a>
            </div>
          </div>
        </div>

        <div 
          className={`md:hidden bg-black/95 border-t border-[#FFD700]/30 transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
          aria-hidden={!isMenuOpen}
          role="menu"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#inicio" onClick={handleNavClick} className="text-red-500 font-medium px-4 py-2 hover:bg-red-500/10 text-sm sm:text-base" role="menuitem">INICIO</a>
            <a href="#servicios" onClick={handleNavClick} className="text-[#FFD700] hover:text-yellow-400 px-4 py-2 hover:bg-[#FFD700]/10 transition-colors text-sm sm:text-base" role="menuitem">SERVICIOS</a>
            <a href="#retornos" onClick={handleNavClick} className="text-[#FFD700] hover:text-yellow-400 px-4 py-2 hover:bg-[#FFD700]/10 transition-colors text-sm sm:text-base" role="menuitem">RETORNOS</a>
            <a href="#testimonios" onClick={handleNavClick} className="text-[#FFD700] hover:text-yellow-400 px-4 py-2 hover:bg-[#FFD700]/10 transition-colors text-sm sm:text-base" role="menuitem">TESTIMONIOS</a>
            <a href="#contacto" onClick={handleNavClick} className="text-red-500 font-medium px-4 py-2 hover:text-red-400 text-sm sm:text-base" role="menuitem">CONTACTO</a>
          </div>
        </div>
      </nav>

      {/* Carousel - Mejorado para responsive */}
      <div className="relative h-full" role="region" aria-roledescription="carrusel" aria-label="Galería de servicios">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={currentSlide !== index}
            role="tabpanel"
            aria-label={`Diapositiva ${index + 1} de ${slides.length}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              draggable="false"
              style={{ 
                WebkitUserDrag: 'none', 
                userSelect: 'none',
                pointerEvents: 'none'
              }}
              onContextMenu={(e) => e.preventDefault()}
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 sm:p-8">
              <div className="max-w-4xl mx-auto">
                <h1 
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-2 sm:mb-4 text-[#FFD700]"
                  style={{ 
                    textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                    lineHeight: '1.2',
                    letterSpacing: 'tight'
                  }}
                >
                  {slide.title}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 sm:mb-6 text-white font-medium">
                  {slide.subtitle}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-4 sm:mb-8 text-gray-100">
                  {slide.description}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  aria-label="Iniciar consulta gratuita por WhatsApp"
                  name="main-consultation"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-sm text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50"
                >
                  Consulta sin costo
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Botones de navegación del carrusel - Adaptados para móvil */}
        <button
          onClick={prevSlide}
          aria-label="Ver diapositiva anterior"
          name="previous-slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-black/60 hover:bg-[#FFD700]/70 text-white rounded-full transition-colors min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] touch-manipulation"
        >
          <ChevronLeft size={24} className="sm:w-8 sm:h-8" aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Ver siguiente diapositiva"
          name="next-slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-4 bg-black/60 hover:bg-[#FFD700]/70 text-white rounded-full transition-colors min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]"
        >
          <ChevronRight size={24} className="sm:w-8 sm:h-8" aria-hidden="true" />
        </button>

        {/* Indicadores de diapositivas - Adaptados para móvil */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir a diapositiva ${index + 1}`}
              aria-selected={currentSlide === index}
              name={`slide-indicator-${index + 1}`}
              role="tab"
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-red-600 w-6 sm:w-8' 
                  : 'bg-[#FFD700]/70 hover:bg-[#FFD700]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Botón de WhatsApp - Adaptado para móvil */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Iniciar consulta gratuita por WhatsApp"
        name="whatsapp-floating"
        className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-green-700 hover:bg-green-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-green-800/50 transition-all duration-300 z-50 flex flex-col items-center scale-90 sm:scale-100"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <svg 
            viewBox="0 0 24 24" 
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-white font-bold text-base sm:text-lg">Consulta Ahora</span>
        </div>
        <span className="text-white text-xs mt-1">SOLO MAYORES DE EDAD</span>
      </button>
    </div>
  );
};

export default HeroSection;