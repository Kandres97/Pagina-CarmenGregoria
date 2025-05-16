import React, { useState, useRef } from 'react';

const Testimonios = () => {
  const [activeTab, setActiveTab] = useState('videos');
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef({});
  
  // Datos de testimonios en video (solo 2 videos)
  const videosTestimonios = [
    {
      id: 'video1',
      nombre: "María Fernanda",
      ubicacion: "Ciudad de México",
      texto: "Después de 3 años de separación, mi ex regresó en tan solo 6 días gracias al Amarre de Amor Eterno. Estoy inmensamente agradecida con la Maestra Carmen.",
      videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747351788/Video_de_WhatsApp_2025-02-08_a_las_18.55.36_2d2c4649_jwn0wm_ke4cva_mird6f_pgwzbd.mp4",
      thumbnail: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio1_l6imae.jpg"
    },
    {
      id: 'video2',
      nombre: "Roberto Méndez",
      ubicacion: "Guadalajara",
      texto: "Mi pareja me había dejado por otra persona. Con el Amarre de Dominación, regresó totalmente entregada a nuestra relación, eliminando a la otra persona de su vida.",
      videoUrl: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747351788/Video_de_WhatsApp_2025-02-08_a_las_18.55.36_2d2c4649_jwn0wm_ke4cva_mird6f_pgwzbd.mp4",
      thumbnail: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio2_zcj2op.jpg"
    }
  ];
  
  // Datos de testimonios con foto (4 fotos)
  const fotosTestimonios = [
    {
      id: 'foto1',
      nombre: "Carlos Jiménez",
      ubicacion: "Puebla",
      texto: "Mi novia me había bloqueado de todas sus redes. En solo 4 días después del ritual, me buscó desesperadamente. Ahora estamos comprometidos y más enamorados que nunca.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio4_mjvhwe.jpg"
    },
    {
      id: 'foto2',
      nombre: "Diana Ramírez",
      ubicacion: "Veracruz",
      texto: "Había probado con otros servicios sin éxito. El amarre que realizó la Maestra Carmen logró que mi ex dejara a su nueva pareja y volviera conmigo en menos de una semana.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio5_pqszfa.jpg"
    },
    {
      id: 'foto3',
      nombre: "Miguel Ángel",
      ubicacion: "Querétaro",
      texto: "Mi esposa había pedido el divorcio. Gracias al ritual especializado, no solo desistió del divorcio sino que nuestra relación mejoró enormemente. Eternamente agradecido.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio6_xulr81.jpg"
    },
    {
      id: 'foto4',
      nombre: "Laura Herrera",
      ubicacion: "Cancún",
      texto: "Tenía dudas al principio, pero los resultados fueron increíbles. Mi pareja cambió completamente su actitud, está más atenta y cariñosa que nunca. El ritual funcionó perfectamente.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/testimonio7_zqwdxr.jpg"
    }
  ];
  
  // Manejar reproducción de video
  const handleVideoPlay = (videoId) => {
    if (playingVideo && playingVideo !== videoId && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo].pause();
    }
    setPlayingVideo(videoId);
  };
  
  // Reproducir o pausar video
  const togglePlayPause = (videoId) => {
    const videoElement = videoRefs.current[videoId];
    
    if (!videoElement) return;
    
    if (videoElement.paused) {
      videoElement.play();
      handleVideoPlay(videoId);
    } else {
      videoElement.pause();
      setPlayingVideo(null);
    }
  };

  return (
    <section id="testimonios" className="testimonios-section">
      <div className="testimonios-overlay"></div>
      
      <div className="mystical-elements">
        <div className="mystical-element testimonio-element-1"></div>
        <div className="mystical-element testimonio-element-2"></div>
        <div className="mystical-element testimonio-element-3"></div>
      </div>
      
      <div className="testimonios-container">
        <div className="testimonios-header">
          <h2 className="section-subtitle">Historias Reales</h2>
          <h3 className="section-title">Testimonios de <span>Éxito</span></h3>
          <p className="section-description">
            Descubra las transformaciones y milagros que han experimentado nuestros clientes gracias a los poderosos rituales realizados por la Maestra Carmen Gregoria.
          </p>
        </div>
        
        {/* Tabs para navegar entre videos y fotos */}
        <div className="testimonios-tabs">
          <button 
            className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <i className="fas fa-video"></i> Videos
          </button>
          <button 
            className={`tab-button ${activeTab === 'fotos' ? 'active' : ''}`}
            onClick={() => setActiveTab('fotos')}
          >
            <i className="fas fa-camera"></i> Fotografías
          </button>
        </div>
        
        {/* Contenido de la tab de Videos - AHORA EN FILA */}
        <div className={`tab-content ${activeTab === 'videos' ? 'active' : ''}`}>
          <div className="videos-row">
            {videosTestimonios.map((testimonio) => (
              <div key={testimonio.id} className="video-card">
                <div className="video-wrapper">
                  <video 
                    ref={el => videoRefs.current[testimonio.id] = el}
                    className="testimonio-video"
                    playsInline
                    poster={testimonio.thumbnail}
                    onPlay={() => handleVideoPlay(testimonio.id)}
                    onPause={() => setPlayingVideo(null)}
                  >
                    <source src={testimonio.videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                  </video>
                  
                  {/* Overlay de video */}
                  <div className="video-overlay"></div>
                  
                  {/* Botón de play */}
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
                  <p className="testimonio-texto">"{testimonio.texto}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contenido de la tab de Fotos - AHORA EN FILA */}
        <div className={`tab-content ${activeTab === 'fotos' ? 'active' : ''}`}>
          <div className="fotos-row">
            {fotosTestimonios.map((testimonio) => (
              <div key={testimonio.id} className="foto-card">
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
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonio-texto">"{testimonio.texto}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA final */}
        <div className="testimonios-cta">
          <p>Usted también puede transformar su vida amorosa con nuestros poderosos rituales</p>
          <a 
            href="https://wa.me/526699201652?text=Hola%20Maestra%20Carmen%20Gregoria,%20quiero%20información%20sobre%20los%20amarres%20de%20amor" 
            className="testimonios-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta Sin Costo <i className="fas fa-heart"></i>
          </a>
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
        
        /* Estilos para los videos EN FILA */
        .videos-row {
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
        
        .video-card:hover {
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
        
        .video-overlay {
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
        
        .testimonio-texto {
          color: #fff;
          line-height: 1.6;
          font-style: italic;
          opacity: 0.9;
        }
        
        /* Estilos para las fotos EN FILA */
        .fotos-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }
        
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
        
        .foto-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 198, 25, 0.2);
          border-color: rgba(230, 198, 25, 0.3);
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
        
        .foto-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(12, 12, 12, 0.7));
        }
        
        .testimonio-estrellas {
          display: flex;
          gap: 3px;
          margin-bottom: 1rem;
        }
        
        .testimonio-estrellas i {
          color: #e6c619;
        }
        
        /* CTA final */
        .testimonios-cta {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          margin-top: 2rem;
        }
        
        .testimonios-cta p {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        
        .testimonios-button {
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
        
        .testimonios-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
        }
        
        .testimonios-button i {
          margin-left: 8px;
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
          
          .video-card {
            flex: 0 0 300px;
          }
          
          .foto-card {
            flex: 0 0 220px;
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
          
          .testimonios-cta {
            padding: 2rem;
          }
          
          .testimonios-cta p {
            font-size: 1.1rem;
          }
          
          .testimonios-button {
            padding: 0.9rem 1.8rem;
            font-size: 1.1rem;
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
          
          .video-card {
            flex: 0 0 280px;
          }
          
          .foto-card {
            flex: 0 0 200px;
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
          
          .testimonios-cta {
            padding: 1.5rem;
          }
          
          .testimonios-cta p {
            font-size: 1rem;
          }
          
          .testimonios-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonios;