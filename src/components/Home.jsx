import React, { useState, useEffect, useRef } from 'react';

// URLs constantes 
const URLS = {
  backgroundVideo: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747350488/video2142_jfshob.mp4",
  testimonialVideo: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1749761845/3_e6vfrq.mp4",
  whatsapp: "https://wa.me/526699201652?text=Hola,%20Deseo%20Una%20Consulta.%20"
};

// Mapa de IDs para las secciones - aseguramos que coincidan con los IDs de las secciones
const SECTION_IDS = {
  'Inicio': '',
  'Rituales': 'Rituales',
  'Amarres de Amor': 'amarres',
  'Tarot': 'Tarot',
  'Testimonios': 'testimonios',
  'Contacto': 'contacto'
};

// Componentes reutilizables
const PlayButton = ({ onClick, isPlaying }) => (
  <div className="play-button" onClick={onClick} style={{ opacity: isPlaying ? 0 : 1 }}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  </div>
);

const MysticalElements = () => (
  <div className="mystical-elements">
    {[1, 2, 3].map(num => (
      <div key={num} className={`mystical-element element-${num}`}></div>
    ))}
  </div>
);

const WhatsAppButton = () => (
  <a 
    href={URLS.whatsapp}
    className="whatsapp-button" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
  >
    <svg className="whatsapp-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  </a>
);

// Componente de NavMenu mejorado para usar los IDs de sección correctos
const NavMenu = ({ menuItems, isMenuOpen, closeMenu }) => (
  <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
    <ul className="menu">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a 
            href={`#${SECTION_IDS[item]}`} 
            className="menu-link" 
            onClick={closeMenu}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => {
  // Estados con useReducer para optimizar
  const [state, setState] = useState({
    menuOpen: false,
    isMobile: false,
    isPlaying: false
  });
  
  const videoRef = useRef(null);
  const menuItems = ['Inicio', 'Rituales', 'Amarres de Amor', 'Tarot', 'Testimonios', 'Contacto'];
  
  // Detección de dispositivo móvil - optimizado
  useEffect(() => {
    const checkIfMobile = () => setState(prev => ({ ...prev, isMobile: window.innerWidth <= 768 }));
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Control de video - optimizado
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;
    
    const handlePlay = () => setState(prev => ({ ...prev, isPlaying: true }));
    const handlePause = () => setState(prev => ({ ...prev, isPlaying: false }));
    
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);

  // Navegación por hash cuando la página carga o cambia el hash
  useEffect(() => {
    // Función para manejar cambios en el hash
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Removemos el "#" del inicio
        const sectionId = hash.substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
          // Desplazamos a la sección con un pequeño desplazamiento para el header fijo
          const headerHeight = document.querySelector('.header').offsetHeight;
          const yOffset = -headerHeight; 
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };

    // Verificamos el hash cuando la página carga
    if (window.location.hash) {
      // Usamos setTimeout para asegurar que los elementos están renderizados
      setTimeout(handleHashChange, 100);
    }

    // Escuchamos cambios en el hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Funciones manejadoras optimizadas
  const toggleMenu = () => setState(prev => ({ ...prev, menuOpen: !prev.menuOpen }));
  const closeMenu = () => state.isMobile && setState(prev => ({ ...prev, menuOpen: false }));
  const togglePlayPause = () => {
    if (videoRef.current) {
      state.isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Playfair Display', serif;
        }
        
        body { background-color: #0c0c0c; color: #fff; }
        
        .age-restriction {
          position: fixed;
          top: 80px;
          right: 20px;
          background-color: rgba(0, 0, 0, 0.9);
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          z-index: 1000;
          border-left: 3px solid #a83f67;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          max-width: 250px;
          backdrop-filter: blur(5px);
          text-align: left;
        }

        .restriction-header {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .restriction-content {
          line-height: 1.3;
        }
        
        .header {
          position: fixed;
          width: 100%;
          padding: 1rem 2rem;
          z-index: 100;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: #e6c619;
          text-decoration: none;
          z-index: 110;
          white-space: nowrap; /* Evita que el texto se divida en múltiples líneas */
        }
        
        .logo-highlight { 
          color: #a83f67; 
        }
        
        .menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .menu-link {
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }
        
        .menu-link:hover { color: #e6c619; }
        
        /* Menú hamburguesa */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 110;
        }
        
        .hamburger span {
          width: 30px;
          height: 3px;
          background-color: #e6c619;
          transition: all 0.3s ease;
        }
        
        .hamburger.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
        
        /* Sección Hero - ahora con ID */
        .hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding-top: 70px;
        }
        
        /* Estilos generales para las secciones */
        .section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .section-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          color: #e6c619;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .section-description {
          font-size: 1.3rem;
          max-width: 800px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        /* Estilos específicos para cada sección */
        .rituales-section {
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('https://res.cloudinary.com/sample/image/upload/rituales-bg.jpg') center/cover no-repeat;
        }

        .amarres-section {
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('https://res.cloudinary.com/sample/image/upload/amarres-bg.jpg') center/cover no-repeat;
        }

        /* Estilos para la nueva sección de TAROT */
        .tarot-section {
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('https://res.cloudinary.com/sample/image/upload/tarot-bg.jpg') center/cover no-repeat;
        }

        .testimonios-section {
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('https://res.cloudinary.com/sample/image/upload/testimonios-bg.jpg') center/cover no-repeat;
        }

        .contacto-section {
          background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), 
                      url('https://res.cloudinary.com/sample/image/upload/contacto-bg.jpg') center/cover no-repeat;
        }
        
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
          z-index: 0;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, transparent 20%, rgba(12, 12, 12, 0.8) 80%);
          z-index: 1;
        }
        
        .hero-container {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          min-height: calc(100vh - 70px);
          justify-content: center;
        }
        
        .hero-layout {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          width: 100%;
        }
        
        .testimonial-section {
          flex: 1;
          min-width: 0;
          position: relative;
          max-width: 30%;
        }
        
        .video-wrapper {
          position: relative;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(230, 198, 25, 0.7);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 15px rgba(230, 198, 25, 0.4);
          transform: perspective(800px) rotateY(-5deg);
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          /* Ajustamos la altura máxima */
          max-height: 300px;
          /* Aseguramos que la proporción se mantiene */
          aspect-ratio: 9/12;
        }
        
        .video-wrapper:hover {
          transform: perspective(800px) rotateY(0deg);
          border: 2px solid rgba(230, 198, 25, 0.9);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 20px rgba(230, 198, 25, 0.6);
        }
        
        .testimonial-video {
          width: 100%;
          height: 100%;
          display: block;
          background-color: #000;
          /* Cambiamos el aspect-ratio para hacerlo menos alto */
          aspect-ratio: 9/12;
          object-fit: cover;
          border-radius: 14px;
          /* Aseguramos que el video llegue hasta el borde del recuadro */
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
        
        .video-controls {
          position: absolute;
          bottom: 15px;
          left: 15px;
          right: 15px;
          display: flex;
          justify-content: center;
          gap: 10px;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .video-wrapper:hover .video-controls { opacity: 1; }
        
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 50px;
          height: 50px;
          background: rgba(168, 63, 103, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid rgba(230, 198, 25, 0.5);
          transition: all 0.3s ease;
          z-index: 2;
        }
        
        .video-wrapper:hover .play-button {
          opacity: ${state.isPlaying ? 0 : 0.9};
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        .play-button svg {
          width: 22px;
          height: 22px;
          fill: #fff;
          margin-left: 5px;
        }
        
        .video-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: ${state.isPlaying ? 0.3 : 0};
          transition: opacity 0.3s ease;
        }
        
        .video-glow::before {
          content: '';
          position: absolute;
          top: -40px;
          left: -40px;
          right: -40px;
          bottom: -40px;
          background: radial-gradient(
            circle at center,
            rgba(230, 198, 25, 0.6) 0%,
            rgba(230, 198, 25, 0) 70%
          );
          z-index: -1;
          transform: scale(0.7);
          animation: pulse 4s infinite ease-in-out;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(0.7);
            opacity: 0.5;
          }
          50% {
            transform: scale(0.8);
            opacity: 0.8;
          }
        }
        
        /* Contenido del héroe */
        .hero-content {
          flex: 1;
          min-width: 0;
          padding: 1rem;
          text-align: left;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #e6c619;
          margin-bottom: 1rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .hero-title span { color: #a83f67; }
        
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
          opacity: 0.9;
        }
        
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          margin-right: 15px;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(168, 63, 103, 0.6);
        }
        
        .testimonials-button {
          display: inline-block;
          background: linear-gradient(135deg, #e6c619, #b39915);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(230, 198, 25, 0.4);
        }
        
        .testimonials-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
        }
        
        .button-container {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 1.5rem;
        }
        
        /* Botón de WhatsApp flotante */
        .whatsapp-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .whatsapp-button:hover {
          transform: scale(1.1) translateY(-5px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
        }
        
        .whatsapp-logo {
          width: 33px;
          height: 33px;
        }
        
        .mystical-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .mystical-element {
          position: absolute;
          opacity: 0.3;
          filter: blur(3px);
        }
        
        .element-1 {
          top: 20%;
          left: 10%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, #e6c619 0%, transparent 70%);
          animation: float 8s infinite ease-in-out;
        }
        
        .element-2 {
          bottom: 15%;
          right: 10%;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, #a83f67 0%, transparent 70%);
          animation: float 10s infinite ease-in-out reverse;
        }
        
        .element-3 {
          top: 60%;
          left: 20%;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, #7e3aa0 0%, transparent 70%);
          animation: float 9s infinite ease-in-out 2s;
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        
        /* Media queries optimizados */
        @media (max-width: 768px) {
          .header { padding: 1rem; }
          .hamburger { display: flex; }
          
          .menu-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 100;
            transform: translateY(-100%);
            transition: transform 0.4s ease;
          }
          
          .menu-container.open { transform: translateY(0); }
          .menu { flex-direction: column; align-items: center; gap: 2rem; }
          .menu-link { font-size: 1.5rem; }
          .hero-layout { flex-direction: column; gap: 2rem; }
          
          .testimonial-section {
            width: 100%;
            max-width: 180px;
            margin: 0 auto;
          }
          
          .video-wrapper { 
            max-width: 100%; 
            width: 100%; 
            /* Ajustamos la altura máxima en móvil */
            max-height: 250px;
          }
          
          .testimonial-video {
            /* Mantenemos la misma proporción en móvil */
            aspect-ratio: 9/12;
          }
          
          .hero-content { text-align: center; width: 100%; }
          .hero-title { font-size: 2.5rem; margin-bottom: 1rem; }
          .hero-subtitle { font-size: 1.3rem; margin-bottom: 0.8rem; }
          
          .hero-description {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            line-height: 1.5;
            margin-left: auto;
            margin-right: auto;
          }
          
          .button-container { justify-content: center; gap: 10px; }
          
          .cta-button, .testimonials-button {
            padding: 0.9rem 1.8rem;
            font-size: 1.1rem;
            display: inline-block;
            width: auto;
            margin-right: 0;
          }
          
          .whatsapp-button {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }
          
          .whatsapp-logo { width: 28px; height: 28px; }
          .play-button { width: 40px; height: 40px; }
          .play-button svg { width: 18px; height: 18px; }
          
          /* Ajustes para dispositivos móviles para mantener el logo en una línea */
          .logo {
            font-size: 1.4rem; /* Reducimos el tamaño en móviles */
          }
        }
        
        @media (max-width: 400px) {
          .hero-container { padding: 1.5rem 1rem; }
          .testimonial-section { max-width: 160px; }
          .video-wrapper { 
            /* Ajustamos la altura máxima en dispositivos muy pequeños */
            max-height: 220px;
          }
          .hero-title { font-size: 2.2rem; }
          .hero-subtitle { font-size: 1.2rem; }
          .hero-description { font-size: 1rem; }
          
          .cta-button, .testimonials-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
          
          .age-restriction {
            top: 70px;
            right: 10px;
            font-size: 0.75rem;
            padding: 6px 10px;
            /* Mantenemos el mismo ancho que en PC */
            max-width: 250px;
          }

          .restriction-header {
            margin-bottom: 5px; /* Igual que en PC */
          }
          
          /* Reducir aún más el tamaño del logo en pantallas muy pequeñas */
          .logo {
            font-size: 1.2rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1023px) {
          .menu { gap: 1.5rem; }
          .menu-link { font-size: 1rem; }
          .hero-title { font-size: 2.8rem; }
          .hero-subtitle { font-size: 1.3rem; }
          .hero-description { font-size: 1.1rem; }
          .video-wrapper { 
            max-width: 200px; 
            /* Ajustamos la altura máxima en tablet */
            max-height: 280px;
          }
        }
        
        @media (min-width: 1024px) {
          .video-wrapper { 
            max-width: 250px; 
            /* Mantenemos la altura máxima en escritorio */
            max-height: 300px;
          }
        }
      `}</style>
    
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">Santuario <span className="logo-highlight">Saberes Ocultos</span></a>
          
          <button 
            className={`hamburger ${state.menuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menú"
          >
            {[...Array(3)].map((_, i) => <span key={i}></span>)}
          </button>
          
          <NavMenu 
            menuItems={menuItems} 
            isMenuOpen={state.menuOpen} 
            closeMenu={closeMenu} 
          />
        </nav>
      </header>
      
      <section className="hero">
        <video 
          className="video-background" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={URLS.backgroundVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        <div className="video-overlay"></div>
        <MysticalElements />
        
        <div className="hero-container">
          <div className="hero-layout">
            <div className="testimonial-section">
              <div className="video-wrapper">
                <video 
                  ref={videoRef}
                  className="testimonial-video" 
                  playsInline
                  onClick={togglePlayPause}
                >
                  <source src={URLS.testimonialVideo} type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
                
                <div className="video-glow"></div>
                <PlayButton onClick={togglePlayPause} isPlaying={state.isPlaying} />
              </div>
            </div>
            
            <div className="hero-content">
              <h2 className="hero-subtitle">HECHIZOS Y CONJUROS UNIVERSALES</h2>
              <h1 className="hero-title"><span>PODEROSOS RITUALES ESPIRITUALES</span></h1>
              <p className="hero-description">
                Amarres inquebrantables, retornos inmediatos, magia blanca, negra y roja. 
                Protecciones impenetrables, alejamientos definitivos y revelaciones del 
                TAROT que transformarán su destino.
              </p>
              
              <div className="button-container">
                <a href={URLS.whatsapp} className="cta-button" target="_blank" rel="noopener noreferrer">
                  Consulta Sin Costo<i className="fas fa-heart" style={{ marginLeft: '8px' }}></i>
                </a>
                
                <a href="#testimonios" className="testimonials-button">
                  Ver Más Testimonios <i className="fas fa-star" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppButton />
      
      <div className="age-restriction">
        <strong>⚠️ Aviso:</strong> Servicios exclusivos para mayores de 18 años
      </div>
    </>
  );
};

export default Home;