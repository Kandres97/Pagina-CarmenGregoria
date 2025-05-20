import React from 'react';

const Rituales = () => {
  // Datos de los rituales
  const rituales = [
    {
      id: 1,
      titulo: "Amarres De Amor",
      descripcion: "Ritual especializado para unir corazones, fortaleciendo el vínculo amoroso y atrayendo la energía romántica de manera intensa y profunda.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747514377/IMG_4170_HEIC_b1cuk6.png",
    },
    {
      id: 2,
      titulo: "Retorno De Amor",
      descripcion: "Poderoso ritual diseñado para reconectar con la pareja perdida, reavivando sentimientos dormidos y sanando heridas emocionales.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747515538/beautiful-passionate-couple-having-romantic-260nw-1287012067_whpecj.webp",
    },
    {
      id: 3,
      titulo: "Magia Blanca",
      descripcion: "Ritual de protección celestial que crea un escudo energético para repeler toda influencia negativa y atraer bendiciones divinas.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747514546/candlelight-2826332_1920_hi3hif.jpg",
    },
    {
      id: 4,
      titulo: "Magia Negra",
      descripcion: "Ritual intenso para transformar bloqueos energéticos, desatando poder interior y manifestando cambios radicales en la vida.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747514605/d74417cf1f96d30e26a48e1e62fa1f62_ikt43e.jpg",
    },
    {
      id: 5,
      titulo: "Alejamientos",
      descripcion: "Ritual especializado para eliminar presencias negativas, cortar lazos tóxicos y liberar el espacio personal de influencias nocivas.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747515037/illustration-concept-remove-negative-energy-260nw-2249272073_bdhiyo.webp",
    },
    {
      id: 6,
      titulo: "Limpias Espirituales",
      descripcion: "Ceremonia profunda de purificación energética que renueva el aura, equilibra los chakras y restaura la armonía interior.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1747515630/minerals-candle-on-moss-forest-260nw-2273752425_d3wzsn.webp",
    }
  ];

  return (
    <section id="Rituales" className="rituales-section">
      <div className="rituales-overlay"></div>
      
      <div className="mystical-elements">
        <div className="mystical-element ritual-element-1"></div>
        <div className="mystical-element ritual-element-2"></div>
        <div className="mystical-element ritual-element-3"></div>
      </div>
      
      <div className="rituales-container">
        <div className="rituales-header">
          <h3 className="section-title">Nuestros <span>Rituales</span></h3>
        </div>
        
        <div className="rituales-grid">
          {rituales.map((ritual) => (
            <div 
              key={ritual.id} 
              className="ritual-card"
            >
              <div className="ritual-card-inner">
                <div className="ritual-image-container">
                  <img 
                    src={ritual.imagen} 
                    alt={ritual.titulo} 
                    className="ritual-image" 
                  />
                  <div className="ritual-image-overlay"></div>
                </div>
                
                <div className="ritual-content">
                  <h4 className="ritual-title">{ritual.titulo}</h4>
                  <p className="ritual-description">{ritual.descripcion}</p>
                  
                  <a 
                    href={`https://wa.me/526699201652?text=Hola%20,%20estoy%20interesado%20en%20el%20ritual%20de%20${encodeURIComponent(ritual.titulo)}`}
                    className="ritual-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consulta Gratis <i className="fas fa-magic"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .rituales-section {
          min-height: 100vh;
          background-color: #0c0c0c;
          background-image: url('https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/rituales-bg_vdczpm.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
          padding: 120px 0 80px;
          overflow: hidden;
        }
        
        .rituales-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(12, 12, 12, 0.85), rgba(12, 12, 12, 0.9));
          z-index: 0;
        }
        
        .rituales-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          z-index: 1;
        }
        
        .rituales-header {
          text-align: center;
          margin-bottom: 4rem;
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
        
        .rituales-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .ritual-card {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          height: 100%;
        }
        
        .ritual-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 198, 25, 0.2);
          border-color: rgba(230, 198, 25, 0.3);
        }
        
        .ritual-card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .ritual-image-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }
        
        .ritual-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .ritual-card:hover .ritual-image {
          transform: scale(1.05);
        }
        
        .ritual-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, transparent 50%, rgba(12, 12, 12, 0.8));
        }
        
        .ritual-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .ritual-title {
          font-size: 1.5rem;
          color: #e6c619;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .ritual-description {
          color: #fff;
          opacity: 0.9;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        
        .ritual-button {
          display: inline-block;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 50px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          font-size: 1rem;
          text-align: center;
          margin-top: auto;
        }
        
        .ritual-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(168, 63, 103, 0.6);
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
        
        .ritual-element-1 {
          top: 15%;
          left: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #e6c619 0%, transparent 70%);
          animation: float 12s infinite ease-in-out;
        }
        
        .ritual-element-2 {
          bottom: 20%;
          right: 5%;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, #a83f67 0%, transparent 70%);
          animation: float 15s infinite ease-in-out reverse;
        }
        
        .ritual-element-3 {
          top: 60%;
          left: 50%;
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
        
        /* Estilos responsive */
        @media (max-width: 768px) {
          .rituales-section {
            padding: 100px 0 60px;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .rituales-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .rituales-section {
            padding: 80px 0 50px;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .rituales-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .ritual-content {
            padding: 1.2rem;
          }
          
          .ritual-title {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Rituales;