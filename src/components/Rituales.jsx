import React, { useState } from 'react';

const Rituales = () => {
  const [selectedRitual, setSelectedRitual] = useState(null);
  
  // Datos de los rituales
  const rituales = [
    {
      id: 1,
      titulo: "Ritual de Luna Llena",
      descripcion: "Poderoso ritual realizado bajo la influencia de la luna llena para amplificar intenciones, atraer abundancia y manifestar deseos del corazón.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/luna-llena_kf5f7r.jpg",
      detalles: "Este antiguo ritual se realiza exclusivamente durante las noches de luna llena, cuando la energía cósmica está en su punto máximo. Utilizando elementos sagrados como velas blancas, agua de rosas, cuarzos purificados y hierbas bendecidas, se crea un poderoso campo energético que conecta con las fuerzas universales. Ideal para manifestar cambios profundos, iniciar nuevos proyectos o potenciar cualquier trabajo espiritual."
    },
    {
      id: 2,
      titulo: "Ritual de Amor Eterno",
      descripcion: "Ritual ancestral para unir almas gemelas, fortalecer vínculos amorosos y encender la pasión que trasciende dimensiones.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/amor-eterno_cdfbwl.jpg",
      detalles: "Una ceremonia sagrada que invoca a las energías primordiales del amor universal. A través de la combinación de elementos místicos como velas rojas y rosas, aceites esenciales afrodisíacos, pétalos de rosa, canela y miel consagrada, se crea un vínculo energético inquebrantable entre dos personas. Este ritual refuerza la conexión espiritual, enciende la pasión y crea lazos que perduran más allá del tiempo y el espacio."
    },
    {
      id: 3,
      titulo: "Ritual de Protección",
      descripcion: "Poderosa barrera energética que repele toda negatividad, envidias, hechizos malignos y atrae la luz divina para su protección absoluta.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/proteccion_ylz0fs.jpg",
      detalles: "Este ritual milenario crea un escudo energético impenetrable alrededor de la persona, su hogar o sus seres queridos. Utilizando elementos sagrados como sal marina purificada, hierbas protectoras (romero, ruda y laurel), velas negras y moradas, y piedras como la obsidiana y el ónix, se invoca a los guardianes espirituales para crear una barrera que repele energías negativas y ataques psíquicos. Ideal para quienes sienten pesadez energética o sospechan de trabajos oscuros dirigidos hacia ellos."
    },
    {
      id: 4,
      titulo: "Ritual de Abundancia",
      descripcion: "Atrae la prosperidad material y espiritual, eliminando bloqueos económicos y abriendo caminos hacia la riqueza y el éxito.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566287/abundancia_mjqtip.jpg",
      detalles: "Una poderosa ceremonia que conecta con las fuerzas cósmicas de la abundancia y la prosperidad. Mediante el uso de elementos como monedas antiguas consagradas, billetes ritualizados, canela, laurel, velas verdes y doradas, se crean portales energéticos que atraen oportunidades económicas y disuelven barreras financieras. Este ritual transforma patrones limitantes relacionados con el dinero y establece nuevas vías para que la riqueza fluya constantemente en todas sus formas."
    },
    {
      id: 5,
      titulo: "Ritual de Limpieza Energética",
      descripcion: "Purificación profunda del aura y los chakras, liberando cargas negativas, entidades y bloqueos espirituales acumulados.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566288/limpieza_pgwsun.jpg",
      detalles: "Este ritual ancestral realiza una limpieza profunda en todos los niveles energéticos del ser. Utilizando sahumerios sagrados (palo santo, salvia blanca, copal), piedras purificadoras, agua bendita, campanas tibetanas y mantras de alta vibración, se eliminan energías estancadas, influencias negativas y bloqueos espirituales. Ideal para quienes sienten pesadez, mala suerte persistente, pensamientos negativos recurrentes o sensación de estancamiento vital."
    },
    {
      id: 6,
      titulo: "Ritual de Corte de Ataduras",
      descripcion: "Liberación definitiva de vínculos tóxicos, dependencias emocionales y energías parasitarias que drenan su fuerza vital.",
      imagen: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1717566287/corte-ataduras_rnfxxx.jpg",
      detalles: "Una poderosa ceremonia para liberar el alma de conexiones energéticas dañinas. Mediante elementos como cordones rojos y negros, tijeras ritualizadas, fuego sagrado, hierbas amargas y velas negras, se identifican y cortan lazos invisibles que mantienen atrapada a la persona en relaciones o situaciones tóxicas. Este ritual rompe dependencias emocionales, obsesiones, pactos inconscientes y contratos energéticos que drenan la vitalidad y la libertad personal."
    }
  ];

  // Manejador para abrir los detalles de un ritual
  const handleRitualClick = (id) => {
    if (selectedRitual === id) {
      setSelectedRitual(null); // Si ya está seleccionado, lo cierra
    } else {
      setSelectedRitual(id); // Si no, lo abre
    }
  };

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
          <h2 className="section-subtitle">Saberes Ancestrales</h2>
          <h3 className="section-title">Nuestros <span>Rituales Místicos</span></h3>
          <p className="section-description">
            Descubra los secretos de nuestros poderosos rituales, transmitidos de generación en generación y realizados con la más alta pureza espiritual para transformar su realidad.
          </p>
        </div>
        
        <div className="rituales-grid">
          {rituales.map((ritual) => (
            <div 
              key={ritual.id} 
              className={`ritual-card ${selectedRitual === ritual.id ? 'expanded' : ''}`}
              onClick={() => handleRitualClick(ritual.id)}
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
                  
                  <div className="ritual-details-container">
                    <div className={`ritual-details ${selectedRitual === ritual.id ? 'visible' : ''}`}>
                      <p>{ritual.detalles}</p>
                      <a 
                        href="https://wa.me/526699201652?text=Hola%20Maestra%20Carmen%20Gregoria,%20estoy%20interesado%20en%20el%20ritual%20de%20" 
                        className="ritual-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Solicitar Ritual <i className="fas fa-magic"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className="ritual-expand">
                    <span>{selectedRitual === ritual.id ? 'Ver menos' : 'Ver más'}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`expand-icon ${selectedRitual === ritual.id ? 'rotated' : ''}`}
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="#e6c619" d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="ritual-cta">
          <p>¿Necesita un ritual personalizado para su situación específica?</p>
          <a 
            href="https://wa.me/526699201652?text=Hola%20Maestra%20Carmen%20Gregoria,%20necesito%20un%20ritual%20personalizado%20para%20mi%20situación" 
            className="ritual-cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta Gratuita <i className="fas fa-star"></i>
          </a>
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
          cursor: pointer;
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .ritual-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(230, 198, 25, 0.2);
          border-color: rgba(230, 198, 25, 0.3);
        }
        
        .ritual-card.expanded {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(168, 63, 103, 0.3);
        }
        
        .ritual-card-inner {
          display: flex;
          flex-direction: column;
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
          margin-bottom: 1rem;
        }
        
        .ritual-details-container {
          height: 0;
          overflow: hidden;
          transition: height 0.4s ease;
        }
        
        .ritual-card.expanded .ritual-details-container {
          height: auto;
          margin-bottom: 1rem;
        }
        
        .ritual-details {
          padding: 1rem 0;
          color: #fff;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          border-top: 1px solid rgba(230, 198, 25, 0.2);
        }
        
        .ritual-details.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .ritual-details p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
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
        }
        
        .ritual-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(168, 63, 103, 0.6);
        }
        
        .ritual-expand {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          padding-top: 1rem;
          color: #e6c619;
          font-weight: 500;
          cursor: pointer;
        }
        
        .expand-icon {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }
        
        .expand-icon.rotated {
          transform: rotate(180deg);
        }
        
        .ritual-cta {
          background: rgba(15, 15, 15, 0.7);
          border-radius: 16px;
          padding: 2.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 63, 103, 0.2);
          backdrop-filter: blur(10px);
          margin-top: 2rem;
        }
        
        .ritual-cta p {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
        
        .ritual-cta-button {
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
        
        .ritual-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(230, 198, 25, 0.6);
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
          
          .section-subtitle {
            font-size: 1.3rem;
          }
          
          .section-title {
            font-size: 2.5rem;
          }
          
          .section-description {
            font-size: 1.1rem;
          }
          
          .rituales-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          .ritual-cta {
            padding: 2rem;
          }
          
          .ritual-cta p {
            font-size: 1.1rem;
          }
          
          .ritual-cta-button {
            padding: 0.9rem 1.8rem;
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 480px) {
          .rituales-section {
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
          
          .ritual-cta {
            padding: 1.5rem;
          }
          
          .ritual-cta p {
            font-size: 1rem;
          }
          
          .ritual-cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Rituales;