import React, { useState, useRef, useEffect } from 'react';

const Testimonios = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);
  const videoRefs = useRef({});
  const fotosCarouselRef = useRef(null);
  
  // Datos consolidados de testimonios (sin texto)
  const testimonios = {
    videos: [
      {
        id: 'video1',
        nombre: "Angela Torres",
        ubicacion: "Austin, Texas",
        videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747518981/8_ccu21c.mp4",
        thumbnail: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747518981/8_ccu21c.jpg"
      },
      {
        id: 'video2',
        nombre: "Valeria Méndez",
        ubicacion: "Estado De Guerrero",
        videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747519038/videoplayback_vnip2j.mp4",
        thumbnail: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747519038/videoplayback_vnip2j.jpg"
      }
    ],
    fotos: [
      {
        id: 'foto1',
        nombre: "Maria Guadalupe Lazaro",
        ubicacion: "Puebla",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519099/testimonio_1_yrauxg_dkfhoj_ikwihb_souaip.jpg"
      },
      {
        id: 'foto2',
        nombre: "Ruben Perez Novelo",
        ubicacion: "Veracruz",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519100/testimonio_3_cm4qzk_dtwqf6_e4kkoi_tfunrj.jpg"
      },
      {
        id: 'foto3',
        nombre: "Diana Lizeth Chairez",
        ubicacion: "Querétaro",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519102/Testimonio_4_bvpuoh_blaq4c_xwvizf_rbdngs.jpg"
      },
      {
        id: 'foto4',
        nombre: "Gloria Patricia Osnaya",
        ubicacion: "Cancún",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519105/Testimonio_2_nfblmg_i3gd4k_wqozch_e7au8y.jpg"
      }
    ]
  };
  
  // Función para ir a la siguiente foto en el carrusel
  const nextFoto = () => {
    setCurrentFotoIndex((prevIndex) => 
      prevIndex === testimonios.fotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la foto anterior en el carrusel
  const prevFoto = () => {
    setCurrentFotoIndex((prevIndex) => 
      prevIndex === 0 ? testimonios.fotos.length - 1 : prevIndex - 1
    );
  };
  
  // Efecto para actualizar el carrusel cuando cambia el índice
  useEffect(() => {
    if (fotosCarouselRef.current) {
      fotosCarouselRef.current.style.transform = `translateX(-${currentFotoIndex * 100}%)`;
    }
  }, [currentFotoIndex]);
  
  // Función para reproducir videos con un solo clic
  const playVideo = (videoId) => {
    // La función ya no es necesaria porque usamos los controles
    // nativos del video, pero la mantenemos por compatibilidad
    console.log("Click en video:", videoId);
  };
  
  // Componente de tarjeta de video simplificado con controles limitados
  const VideoCard = ({ testimonio }) => (
    <div className="video-card-simple">
      <div className="video-simple-wrapper">
        <video 
          ref={el => videoRefs.current[testimonio.id] = el}
          className="testimonio-video-simple custom-video-player"
          playsInline
          controls
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          poster={testimonio.thumbnail}
          onClick={() => playVideo(testimonio.id)}
        >
          <source src={testimonio.videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      <div className="video-info-simple">
        <h4 className="testimonio-nombre-simple">{testimonio.nombre} 
          <span className="verified-badge">
            <i className="fas fa-check-circle"></i>
          </span>
        </h4>
        <p className="testimonio-ubicacion-simple"><i className="fas fa-map-marker-alt"></i> {testimonio.ubicacion}</p>
      </div>
    </div>
  );
  
  // Componente de tarjeta de foto
  const FotoCard = ({ testimonio }) => (
    <div className="foto-card">
      <div className="foto-wrapper">
        <img 
          src={testimonio.imagen} 
          alt={testimonio.nombre} 
          className="testimonio-foto" 
        />
        <div className="foto-overlay"></div>
      </div>
      
      <div className="testimonio-info">
        <h4 className="testimonio-nombre">{testimonio.nombre}</h4>
        <p className="testimonio-ubicacion"><i className="fas fa-map-marker-alt"></i> {testimonio.ubicacion}</p>
        <div className="testimonio-estrellas">
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonios" className="testimonios-section">
      <div className="testimonios-overlay"></div>
      
      <div className="mystical-elements">
        {[1, 2, 3].map((num) => (
          <div key={num} className={`mystical-element testimonio-element-${num}`}></div>
        ))}
      </div>
      
      <div className="testimonios-container">
        <div className="testimonios-header">
          <h2 className="section-subtitle">Historias Reales</h2>
          <h3 className="section-title">Testimonios de <span>Éxito</span></h3>
        </div>
        
        <div className="testimonios-tabs">
          {[
            { id: 'videos', icon: 'fas fa-video', label: 'Videos' },
            { id: 'fotos', icon: 'fas fa-camera', label: 'Fotografías' }
          ].map((tab) => (
            <button 
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={tab.icon}></i> {tab.label}
            </button>
          ))}
          
          <a 
            href="https://wa.me/526699201652?text=Hola,%20Deseo%20Una%20Consulta"
            className="consulta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta Ahora <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        {/* Contenido de la tab de Videos - Extremadamente simple */}
        <div className={`tab-content ${activeTab === 'videos' ? 'active' : ''}`}>
          <div className="videos-simple">
            {testimonios.videos.map((testimonio) => (
              <VideoCard key={testimonio.id} testimonio={testimonio} />
            ))}
          </div>
        </div>
        
        {/* Contenido de la tab de Fotos - Carrusel */}
        <div className={`tab-content ${activeTab === 'fotos' ? 'active' : ''}`}>
          <div className="carousel-container">
            <button className="carousel-arrow prev-arrow" onClick={prevFoto}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="carousel-viewport">
              <div className="carousel-track" ref={fotosCarouselRef}>
                {testimonios.fotos.map((testimonio) => (
                  <div className="carousel-slide" key={testimonio.id}>
                    <FotoCard testimonio={testimonio} />
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-arrow next-arrow" onClick={nextFoto}>
              <i className="fas fa-chevron-right"></i>
            </button>
            
            {/* Indicadores de navegación con texto */}
            <div className="carousel-navigation-hint">
              <span>Desliza para ver más testimonios</span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </div>
          </div>
          
          <div className="carousel-indicators">
            {testimonios.fotos.map((_, index) => (
              <span 
                key={index} 
                className={`carousel-indicator ${currentFotoIndex === index ? 'active' : ''}`} 
                onClick={() => setCurrentFotoIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .testimonios-section {
          min-height: 100vh;
          background-color: #0c0c0c;
          background-image: url('https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonios-bg_vqdmeo.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }
        
        .testimonios-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(12, 12, 12, 0.85), rgba(12, 12, 12, 0.9));
          z-index: 0;
        }
        
        .mystical-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .mystical-element {
          position: absolute;
          opacity: 0.15;
          filter: blur(5px);
        }
        
        .testimonio-element-1 {
          top: 10%;
          left: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #e6c619 0%, transparent 70%);
          animation: float 12s infinite ease-in-out;
        }
        
        .testimonio-element-2 {
          bottom: 15%;
          right: 10%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #a83f67 0%, transparent 70%);
          animation: float 15s infinite ease-in-out reverse;
        }
        
        .testimonio-element-3 {
          top: 50%;
          left: 40%;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, #7e3aa0 0%, transparent 70%);
          animation: float 10s infinite ease-in-out 2s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        
        .testimonios-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          z-index: 1;
        }
        
        .testimonios-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-subtitle {
          font-size: 1.5rem;
          color: #e6c619;
          margin-bottom: 1rem;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .section-title {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          color: #fff;
        }
        
        .section-title span {
          color: #a83f67;
        }
        
        /* Tabs de navegación */
        .testimonios-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .tab-button {
          background: rgba(15, 15, 15, 0.6);
          border: 1px solid rgba(168, 63, 103, 0.3);
          color: #fff;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          backdrop-filter: blur(5px);
        }
        
        .tab-button i {
          margin-right: 8px;
        }
        
        .tab-button:hover {
          background: rgba(168, 63, 103, 0.2);
          transform: translateY(-2px);
        }
        
        .tab-button.active {
          background: linear-gradient(135deg, #a83f67, #6e3253);
          border-color: transparent;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          transform: translateY(-3px);
        }
        
        .consulta-button {
          display: inline-block;
          background: linear-gradient(135deg, #e6c619, #b39915);
          color: white;
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-size: 1.1rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(230, 198, 25, 0.4);
          text-align: center;
          font-family: 'Playfair Display', serif;
        }
        
        .consulta-button i {
          margin-left: 8px;
        }
        
        .consulta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
        }
        
        /* Contenido de las tabs */
        .tab-content {
          display: none;
          animation: fadeIn 0.5s ease forwards;
        }
        
        .tab-content.active {
          display: block;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* ESTILOS MODIFICADOS PARA VIDEOS - MÁS PEQUEÑOS */
        .videos-simple {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .video-card-simple {
          width: 100%;
          max-width: 400px; /* Reducido de 500px */
          padding: 15px;
          background: rgba(15, 15, 15, 0.5);
          border-radius: 8px;
          border: 1px solid rgba(168, 63, 103, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .video-simple-wrapper {
          width: 100%;
          margin-bottom: 0.5rem;
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }
        
        /* Estilos mejorados para el reproductor de video */
        .custom-video-player {
          width: 100%;
          border-radius: 6px;
          max-height: 225px; /* Limitando la altura */
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Estilos generales para ocultar controles no deseados */
        .custom-video-player::-webkit-media-controls-panel {
          -webkit-appearance: none;
        }
        
        /* Ocultar botones específicos en Chrome/Safari */
        .custom-video-player::-webkit-media-controls-fullscreen-button,
        .custom-video-player::-webkit-media-controls-download-button,
        .custom-video-player::-webkit-media-controls-overflow-button,
        .custom-video-player::-webkit-media-controls-playback-rate-button,
        .custom-video-player::-webkit-media-controls-cast-button,
        .custom-video-player::-webkit-media-controls-toggle-closed-captions-button,
        .custom-video-player::-webkit-media-controls-current-time-display {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          position: absolute !important;
          visibility: hidden !important;
        }
        
        /* Ocultar botones específicos en Firefox */
        .custom-video-player::-moz-media-controls-fullscreen-button,
        .custom-video-player::-moz-media-controls-playback-rate-button {
          display: none !important;
        }
        
        /* Sobrescribir para evitar el botón de pantalla completa en todos los navegadores */
        .custom-video-player:fullscreen {
          display: none !important;
        }
        
        /* Prevenir opciones de clic derecho */
        .video-simple-wrapper {
          position: relative;
        }
        
        .video-simple-wrapper::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .video-info-simple {
          padding: 0.8rem 0;
        }
        
        .testimonio-nombre-simple {
          font-size: 1.1rem;
          color: #e6c619;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .verified-badge {
          color: #4CAF50;
          font-size: 0.9rem;
        }
        
        .testimonio-ubicacion-simple {
          color: #fff;
          opacity: 0.7;
          font-size: 0.9rem;
        }
        
        .testimonio-ubicacion-simple i {
          margin-right: 5px;
          color: #a83f67;
        }
        
        /* ESTILOS MODIFICADOS PARA CARRUSEL DE FOTOS - FLECHAS MÁS VISIBLES */
        .carousel-container {
          position: relative;
          max-width: 850px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Flechas modificadas - más pequeñas y más visibles */
        .carousel-arrow {
          background: rgba(230, 198, 25, 0.8); /* Fondo más visible en amarillo */
          border: 1px solid #e6c619;
          color: #0c0c0c; /* Color de flecha oscuro para contraste */
          width: 40px; /* Reducido de 50px */
          height: 40px; /* Reducido de 50px */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: absolute;
          z-index: 10;
          font-size: 0.9rem; /* Reduciendo tamaño de icono */
          box-shadow: 0 0 10px rgba(230, 198, 25, 0.5); /* Sombra para destacar */
          animation: pulse 2s infinite; /* Animación pulsante para llamar la atención */
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(230, 198, 25, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(230, 198, 25, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(230, 198, 25, 0);
          }
        }
        
        .prev-arrow {
          left: -15px; /* Ajustado de -25px */
        }
        
        .next-arrow {
          right: -15px; /* Ajustado de -25px */
        }
        
        .carousel-arrow:hover {
          background: rgba(230, 198, 25, 1);
          transform: scale(1.1);
        }
        
        /* Texto de indicación para el carrusel */
        .carousel-navigation-hint {
          position: absolute;
          bottom: -30px;
          right: 20px;
          color: #e6c619;
          font-size: 0.9rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 8px;
          animation: fadeInOut 3s infinite;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .carousel-viewport {
          width: 100%;
          overflow: hidden;
          border-radius: 16px;
          margin: 0 2rem;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: 100%;
        }
        
        .carousel-slide {
          flex: 0 0 100%;
          min-width: 100%;
        }
        
        .foto-card {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          height: 100%;
        }
        
        .foto-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .testimonio-foto {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        
        .foto-card:hover .testimonio-foto {
          transform: scale(1.05);
        }
        
        .foto-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(12, 12, 12, 0.6));
          pointer-events: none;
          z-index: 2;
        }
        
        .testimonio-estrellas {
          display: flex;
          gap: 3px;
          margin-top: auto;
        }
        
        .testimonio-estrellas i {
          color: #e6c619;
        }
        
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 40px; /* Aumentado para dar espacio al texto de navegación */
        }
        
        .carousel-indicator {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .carousel-indicator.active {
          background-color: #e6c619;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(230, 198, 25, 0.6);
        }
        
        /* ESTILOS RESPONSIVE */
        @media (max-width: 1024px) {
          .videos-simple {
            gap: 1.5rem;
          }
          
          .video-card-simple {
            max-width: 350px; /* Reducido de 450px */
          }
          
          .carousel-container {
            max-width: 700px;
          }
          
          .foto-wrapper {
            height: 450px;
          }
        }
        
        @media (max-width: 768px) {
          .testimonios-section {
            padding: 100px 0 60px;
          }
          
          .section-subtitle {
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .videos-simple {
            gap: 1.5rem;
          }
          
          .video-card-simple {
            max-width: 90%; /* En lugar de 100% para dar margen */
          }
          
          .carousel-container {
            max-width: 100%;
          }
          
          .foto-wrapper {
            height: 350px;
          }
          
          .prev-arrow {
            left: -10px;
          }
          
          .next-arrow {
            right: -10px;
          }
          
          .carousel-navigation-hint {
            bottom: -25px;
            right: 10px;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .testimonios-section {
            padding: 80px 0 50px;
          }
          
          .section-subtitle {
            font-size: 1.2rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .testimonios-tabs {
            flex-direction: column;
            align-items: center;
            gap: 0.8rem;
          }
          
          .tab-button {
            width: 100%;
            max-width: 300px;
          }
          
          .consulta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            width: 100%;
            max-width: 300px;
          }
          
          .carousel-arrow {
            width: 35px; /* Reducido para móviles */
            height: 35px; /* Reducido para móviles */
            font-size: 0.8rem;
          }
          
          .prev-arrow {
            left: -5px;
          }
          
          .next-arrow {
            right: -5px;
          }
          
          .foto-wrapper {
            height: 250px;
          }
          
          .testimonio-nombre-simple {
            font-size: 1rem;
          }
          
          .carousel-navigation-hint {
            position: static;
            text-align: center;
            margin: 10px auto 0;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonios;