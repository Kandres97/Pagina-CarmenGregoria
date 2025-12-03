import React, { useState } from 'react';

const Amarres = () => {
  const [expandedAmarre, setExpandedAmarre] = useState(null);
  
  // URL base para WhatsApp
  const whatsappBaseUrl = "https://wa.me/526693329167?text=Hola%20deseo%20realizar%20una%20consulta%3F";
  
  // URL del video de fondo
  const videoUrl = "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747514270/6_w3j0cp.mp4";
  
  // Datos de los tipos de amarres con mensajes personalizados
  const tiposAmarres = [
    {
      id: 1,
      titulo: "Amarre de Amor Eterno",
      descripcion: "Ritual poderoso para recuperar y unir almas destinadas. Ideal para casos difíciles donde la persona amada está distante.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747517636/newlywed-couple-holding-golden-padlock-260nw-2381416521_trtwcn.webp",
      mensaje: "Hola, estoy interesado/a en el Amarre de Amor Eterno."
    },
    {
      id: 2,
      titulo: "Amarres Sexuales",
      descripcion: "Ritual para despertar el deseo y la pasión más intensa, creando una conexión física y emocional irresistible.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747517975/blurred-background-silhouettes-couple-love-260nw-2520439475_fvtzet.webp",
      mensaje: "Hola, me gustaría obtener información sobre los Amarres Sexuales.?"
    },
    {
      id: 3,
      titulo: "Amarres Del Mismo Género",
      descripcion: "El ritual más potente para casos extremos donde se necesita dominar la voluntad y eliminar terceras personas.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747517894/closeup-young-adult-queer-transgender-260nw-2192258039-01_hznwgr.webp",
      mensaje: "Hola, quisiera información sobre los Amarres Del Mismo Género."
    }
  ];
  
  // Generar URL de WhatsApp con mensaje personalizado
  const getWhatsAppUrl = (mensaje) => {
    return whatsappBaseUrl + encodeURIComponent(mensaje);
  };
  
  // Manejador para expandir/contraer detalles de un amarre
  const toggleAmarre = (id) => {
    if (expandedAmarre === id) {
      setExpandedAmarre(null);
    } else {
      setExpandedAmarre(id);
    }
  };

  return (
    <section id="amarres" className="amarres-section">
      {/* Video de fondo */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-element">
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      {/* Overlay para dar transparencia */}
      <div className="amarres-overlay"></div>
      
      <div className="mystical-elements">
        <div className="mystical-element amarre-element-1"></div>
        <div className="mystical-element amarre-element-2"></div>
      </div>
      
      <div className="amarres-container">
        <div className="amarres-header">
          <h3 className="section-title">Poderosos <span>Amarres de Amor</span></h3>
          <p className="section-description">
            Recupere el amor perdido y cree un vínculo inquebrantable mediante nuestros rituales adaptados a cada situación.
          </p>
        </div>
        
        <div className="amarres-grid">
          {tiposAmarres.map((amarre) => (
            <div 
              key={amarre.id} 
              className="amarre-card"
              onClick={() => toggleAmarre(amarre.id)}
            >
              <div className="amarre-image-container">
                <img 
                  src={amarre.imagen} 
                  alt={amarre.titulo} 
                  className="amarre-image" 
                />
                <div className="amarre-image-overlay"></div>
              </div>
              
              <div className="amarre-content">
                <h4 className="amarre-title">{amarre.titulo}</h4>
                <p className="amarre-description">{amarre.descripcion}</p>
                
                <a 
                  href={getWhatsAppUrl(amarre.mensaje)}
                  className="amarre-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="proceso-container">
          <div className="proceso-info">
            <p>Cada caso es único y requiere un tratamiento personalizado. Los resultados son efectivos, dependiendo de la complejidad de su situación.</p>
            <a 
              href={getWhatsAppUrl("Hola, estoy interesado/a en iniciar mi proceso de amarre.")}
              className="proceso-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar Mi Proceso Ahora
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .amarres-section {
          min-height: 100vh;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }
        
        /* Estilos para el video de fondo */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          overflow: hidden;
        }
        
        .video-element {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translateX(-50%) translateY(-50%);
          object-fit: cover;
        }
        
        .amarres-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(12, 12, 12, 0.3), rgba(12, 12, 12, 0.4));
          z-index: -1;
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
        
        .amarre-element-1 {
          top: 15%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #e6c619 0%, transparent 70%);
          animation: float 12s infinite ease-in-out;
        }
        
        .amarre-element-2 {
          bottom: 20%;
          left: 5%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #a83f67 0%, transparent 70%);
          animation: float 15s infinite ease-in-out reverse;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
        }
        
        .amarres-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          z-index: 1;
        }
        
        .amarres-header {
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
        
        /* Estilos para la grid de amarres */
        .amarres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .amarre-card {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }
        
        .amarre-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 198, 25, 0.2);
          border-color: rgba(230, 198, 25, 0.3);
        }
        
        .amarre-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .amarre-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .amarre-card:hover .amarre-image {
          transform: scale(1.05);
        }
        
        .amarre-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(12, 12, 12, 0.8));
        }
        
        .amarre-content {
          padding: 1.5rem;
        }
        
        .amarre-title {
          font-size: 1.5rem;
          color: #e6c619;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .amarre-description {
          color: #fff;
          opacity: 0.9;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        
        .amarre-button {
          display: inline-block;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          font-size: 1rem;
          width: 100%;
          text-align: center;
        }
        
        .amarre-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(168, 63, 103, 0.6);
        }
        
        /* Estilos para la sección de proceso */
        .proceso-container {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }
        
        .proceso-title {
          font-size: 1.8rem;
          color: #e6c619;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .proceso-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .proceso-step {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        
        .paso-numero {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
        }
        
        .paso-contenido {
          flex: 1;
        }
        
        .paso-titulo {
          font-size: 1.2rem;
          color: #e6c619;
          margin-bottom: 0.5rem;
        }
        
        .paso-descripcion {
          color: #fff;
          line-height: 1.5;
        }
        
        .proceso-info {
          text-align: center;
          border-top: 1px solid rgba(230, 198, 25, 0.2);
          padding-top: 2rem;
        }
        
        .proceso-info p {
          color: #fff;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .proceso-button {
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
        
        .proceso-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
        }
        
        /* Estilos responsive */
        @media (max-width: 768px) {
          .amarres-section {
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
          
          .amarres-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          .proceso-container {
            padding: 2rem;
          }
          
          .proceso-title {
            font-size: 1.6rem;
          }
          
          .proceso-button {
            padding: 0.9rem 1.8rem;
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 480px) {
          .amarres-section {
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
          
          .amarres-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .amarre-content {
            padding: 1.2rem;
          }
          
          .amarre-title {
            font-size: 1.3rem;
          }
          
          .proceso-container {
            padding: 1.5rem;
          }
          
          .proceso-title {
            font-size: 1.4rem;
          }
          
          .proceso-step {
            gap: 1rem;
          }
          
          .paso-numero {
            width: 35px;
            height: 35px;
          }
          
          .paso-titulo {
            font-size: 1.1rem;
          }
          
          .proceso-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Amarres;