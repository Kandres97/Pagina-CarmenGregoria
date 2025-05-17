import React, { useState, useRef } from 'react';

const Testimonios = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [currentFotoIndex, setCurrentFotoIndex] = useState(0);
  const videoRefs = useRef({});
  const fotosRowRef = useRef(null);
  
  // Datos consolidados de testimonios (sin texto)
  const testimonios = {
    videos: [
      {
        id: 'video1',
        nombre: "María Fernanda",
        ubicacion: "Ciudad de México",
        videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747518981/8_ccu21c.mp4",
        thumbnail: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747518981/8_ccu21c.jpg"
      },
      {
        id: 'video2',
        nombre: "Roberto Méndez",
        ubicacion: "Guadalajara",
        videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747519038/videoplayback_vnip2j.mp4",
        thumbnail: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747519038/videoplayback_vnip2j.jpg"
      }
    ],
    fotos: [
      {
        id: 'foto1',
        nombre: "Carlos Jiménez",
        ubicacion: "Puebla",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519099/testimonio_1_yrauxg_dkfhoj_ikwihb_souaip.jpg"
      },
      {
        id: 'foto2',
        nombre: "Diana Ramírez",
        ubicacion: "Veracruz",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519100/testimonio_3_cm4qzk_dtwqf6_e4kkoi_tfunrj.jpg"
      },
      {
        id: 'foto3',
        nombre: "Miguel Ángel",
        ubicacion: "Querétaro",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519102/Testimonio_4_bvpuoh_blaq4c_xwvizf_rbdngs.jpg"
      },
      {
        id: 'foto4',
        nombre: "Laura Herrera",
        ubicacion: "Cancún",
        imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747519105/Testimonio_2_nfblmg_i3gd4k_wqozch_e7au8y.jpg"
      }
    ]
  };
  
  // Función para desplazarse a una foto específica
  const scrollToPhoto = (index) => {
    if (fotosRowRef.current) {
      const cards = fotosRowRef.current.querySelectorAll('.foto-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest', 
          inline: 'center'
        });
      }
    }
  };
  
  // Función para reproducir/pausar videos
  const togglePlayPause = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      if (videoElement.paused) {
        // Pausar todos los videos primero
        Object.values(videoRefs.current).forEach(vid => {
          if (vid && !vid.paused) {
            vid.pause();
          }
        });
        // Reproducir el video seleccionado
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };
  
  // Componente de tarjeta de video
  const VideoCard = ({ testimonio }) => (
    <div className="video-card">
      <div className="video-wrapper">
        <video 
          ref={el => videoRefs.current[testimonio.id] = el}
          className="testimonio-video"
          playsInline
          poster={testimonio.thumbnail}
          onPlay={() => setPlayingVideo(testimonio.id)}
          onPause={() => playingVideo === testimonio.id && setPlayingVideo(null)}
        >
          <source src={testimonio.videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        <div className="video-overlay"></div>
        
        <div 
          className={`play-button ${playingVideo === testimonio.id ? 'hidden' : ''}`}
          onClick={() => togglePlayPause(testimonio.id)}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5.14v14l11-7-11-7z" />
          </svg>
        </div>
      </div>
      
      <div className="testimonio-info">
        <h4 className="testimonio-nombre">{testimonio.nombre}</h4>
        <p className="testimonio-ubicacion"><i className="fas fa-map-marker-alt"></i> {testimonio.ubicacion}</p>
      </div>
    </div>
  );
  
  // Componente de tarjeta de foto con hooks para el carrusel
  const FotoCard = ({ testimonio, index }) => {
    const cardRef = useRef(null);
    
    return (
      <div 
        ref={cardRef} 
        className={`foto-card ${currentFotoIndex === index ? 'in-view' : ''}`}
      >
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
  };

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
            href="https://wa.me/526699201652?text=Hola%20Maestra%20Carmen%20Gregoria,%20quiero%20información"
            className="consulta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta Ahora <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        
        <div className={`tab-content ${activeTab === 'videos' ? 'active' : ''}`}>
          <div className="videos-row">
            {testimonios.videos.map((testimonio) => (
              <VideoCard key={testimonio.id} testimonio={testimonio} />
            ))}
          </div>
        </div>
        
        <div className={`tab-content ${activeTab === 'fotos' ? 'active' : ''}`}>
          <div 
            className="fotos-row" 
            ref={fotosRowRef}
          >
            {testimonios.fotos.map((testimonio, index) => (
              <FotoCard key={testimonio.id} testimonio={testimonio} index={index} />
            ))}
          </div>
          <div className="carrusel-indicador">
            <div className="carrusel-dots">
              {testimonios.fotos.map((testimonio, index) => (
                <span 
                  key={index} 
                  className={`carrusel-dot ${currentFotoIndex === index ? 'active' : ''}`}
                  onClick={() => {
                    scrollToPhoto(index);
                    setCurrentFotoIndex(index);
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="consulta-button-container">
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
        
        .section-description {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          opacity: 0.9;
          color: #fff;
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
        
        /* Estilos para los videos en fila (escritorio) */
        .videos-row, .fotos-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }
        
        .video-card {
          flex: 0 0 calc(50% - 0.75rem);
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .video-card:hover, .foto-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 198, 25, 0.2);
          border-color: rgba(230, 198, 25, 0.3);
        }
        
        .video-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding-top: 56.25%; /* Ratio 16:9 */
        }
        
        .testimonio-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .video-overlay, .foto-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(12, 12, 12, 0.6));
          pointer-events: none;
        }
        
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
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
        
        .play-button.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .play-button svg {
          width: 25px;
          height: 25px;
          fill: #fff;
          margin-left: 5px;
        }
        
        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: rgba(168, 63, 103, 0.9);
          box-shadow: 0 0 20px rgba(230, 198, 25, 0.3);
        }
        
        .testimonio-info {
          padding: 1.5rem;
        }
        
        .testimonio-nombre {
          font-size: 1.3rem;
          color: #e6c619;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .testimonio-ubicacion {
          color: #fff;
          opacity: 0.7;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .testimonio-ubicacion i {
          margin-right: 5px;
          color: #a83f67;
        }
        
        /* Estilos para las fotos */
        .foto-card {
          flex: 0 0 calc(25% - 1.125rem);
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
        }
        
        /* Animación para destacar la foto actual */
        @keyframes fadeInScale {
          from {
            opacity: 0.7;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .foto-card.in-view {
          border-color: rgba(230, 198, 25, 0.5);
          box-shadow: 0 10px 30px rgba(230, 198, 25, 0.2);
          animation: fadeInScale 0.5s ease forwards;
        }
        
        .foto-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .testimonio-foto {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .foto-card:hover .testimonio-foto {
          transform: scale(1.05);
        }
        
        .testimonio-estrellas {
          display: flex;
          gap: 3px;
          margin-bottom: 1rem;
        }
        
        .testimonio-estrellas i {
          color: #e6c619;
        }
        
        /* Estilos para el botón de consulta */
        .consulta-button-container {
          display: flex;
          justify-content: center;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        .consulta-button {
          display: inline-block;
          background: linear-gradient(135deg, #e6c619, #b39915);
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(230, 198, 25, 0.4);
          text-align: center;
        }
        
        .consulta-button i {
          margin-left: 8px;
        }
        
        .consulta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
        }
        
        /* Estilo para los indicadores del carrusel */
        .carrusel-indicador {
          display: none;
          margin-top: 0.5rem;
          text-align: center;
        }
        
        .carrusel-dots {
          display: inline-flex;
          gap: 8px;
        }
        
        .carrusel-dot {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .carrusel-dot.active {
          background-color: #e6c619;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(230, 198, 25, 0.6);
        }
        
        /* Estilos responsive */
        @media (max-width: 1024px) {
          .video-card {
            flex: 0 0 450px;
          }
          
          .foto-card {
            flex: 0 0 280px;
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
          
          .section-description {
            font-size: 1.1rem;
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
          
          /* Cambio para móviles: videos en vertical, fotos en carrusel */
          .videos-row {
            flex-direction: column;
            overflow-x: visible;
            gap: 1.5rem;
          }
          
          .fotos-row {
            flex-direction: row;
            overflow-x: auto;
            gap: 1rem;
            padding-bottom: 1.5rem;
            scrollbar-width: thin;
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
            scroll-padding: 0 15px;
          }
          
          .fotos-row::-webkit-scrollbar {
            height: 6px;
          }
          
          .fotos-row::-webkit-scrollbar-thumb {
            background-color: rgba(168, 63, 103, 0.6);
            border-radius: 20px;
          }
          
          .fotos-row::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
            border-radius: 20px;
          }
          
          .video-card {
            flex: 0 0 auto;
            width: 100%;
            margin-bottom: 1.5rem;
          }
          
          .foto-card {
            flex: 0 0 80%;
            scroll-snap-align: center;
            margin-bottom: 0.5rem;
          }
          
          .video-wrapper {
            padding-top: 75%; /* Ratio 4:3 para móviles */
          }
          
          .play-button {
            width: 50px;
            height: 50px;
          }
          
          .play-button svg {
            width: 20px;
            height: 20px;
          }
          
          .testimonio-info {
            padding: 1.2rem;
          }
          
          .testimonio-nombre {
            font-size: 1.2rem;
          }
          
          .consulta-button {
            padding: 0.9rem 1.8rem;
            font-size: 1.1rem;
            width: 80%;
            max-width: 300px;
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
          
          .section-description {
            font-size: 1rem;
          }
          
          /* Mostrar indicadores de carrusel en móvil */
          .carrusel-indicador {
            display: block;
          }
          
          .foto-wrapper {
            height: 180px;
          }
          
          .play-button {
            width: 45px;
            height: 45px;
          }
          
          .play-button svg {
            width: 18px;
            height: 18px;
          }
          
          .consulta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonios;