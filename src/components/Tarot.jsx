import React from 'react';

// Constante para URL de WhatsApp
const WHATSAPP_URL = "https://wa.me/526699201652?text=Hola%20Deseo%20que%20me%20realice%20una%20tirada%20de%20cartas%20del%20tarot";

// URL constantes
const URLS = {
  backgroundVideo: "https://res.cloudinary.com/dhzqf1itl/video/upload/v1747350488/video2142_jfshob.mp4",
};

const Tarot = () => {
  // Preguntas comunes que las personas buscan resolver con el tarot
  const commonQuestions = [
    "¿Mi pareja me es infiel?",
    "¿Puedo ver mi futuro con esta persona?",
    "¿Mi ex regresará a mi vida?",
    "¿Tengo un trabajo de maleficio o brujería?",
    "¿Alguien está haciendo trabajos para separarnos?",
    "¿Por qué mi relación no prospera?",
    "¿Por qué no me rinde el dinero y no prospero?",
    "¿Hay alguien que me ha hecho un amarre?",
    "¿Cómo puedo romper un maleficio que me han hecho?"
  ];

  // Función para ir al WhatsApp con pregunta específica
  const goToWhatsAppWithQuestion = (question) => {
    const encodedQuestion = encodeURIComponent(`Hola, Deseo que me realice una tirada de cartas del tarot. Mi pregunta es: ${question}`);
    window.open(`https://wa.me/526699201652?text=${encodedQuestion}`, '_blank');
  };

  return (
    <div className="tarot-section">
      <style jsx>{`
        .tarot-section {
          min-height: 100vh;
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
          background-color: #0c0c0c;
          display: flex;
          align-items: center;
          justify-content: center;
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
        
        .tarot-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, transparent 20%, rgba(12, 12, 12, 0.8) 80%);
          z-index: 1;
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
        
        .tarot-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .tarot-header {
          text-align: center;
          margin-bottom: 50px;
          animation: fadeIn 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .tarot-title {
          font-size: 3.2rem;
          color: #e6c619;
          margin-bottom: 20px;
          text-shadow: 0 0 15px rgba(230, 198, 25, 0.5);
          font-family: 'Playfair Display', serif;
        }
        
        .tarot-description {
          font-size: 1.3rem;
          color: #fff;
          max-width: 800px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        
        .tarot-highlight {
          color: #e6c619;
          font-weight: bold;
        }
        
        .questions-section {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 15px;
          padding: 40px;
          margin: 40px 0;
          border: 1px solid rgba(168, 63, 103, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: fadeIn 1s ease-out 0.3s both;
          backdrop-filter: blur(5px);
        }
        
        .questions-title {
          font-size: 2rem;
          color: #e6c619;
          margin-bottom: 25px;
          text-align: center;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .questions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        
        .question-item {
          background: rgba(14, 7, 20, 0.6);
          border-radius: 10px;
          padding: 15px 20px;
          font-size: 1.1rem;
          color: #fff;
          border-left: 3px solid #a83f67;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
        }
        
        .question-item:hover {
          transform: translateX(5px);
          background: rgba(24, 12, 34, 0.8);
          border-left-color: #e6c619;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
        }
        
        .click-indicator {
          position: absolute;
          bottom: 5px;
          right: 10px;
          font-size: 0.7rem;
          color: rgba(230, 198, 25, 0.7);
          font-style: italic;
        }
        
        .question-icon {
          margin-right: 12px;
          color: #a83f67;
          font-size: 1.2rem;
        }
        
        .call-to-action {
          text-align: center;
          margin: 50px 0 30px;
          animation: fadeIn 1s ease-out 0.6s both;
        }
        
        .cta-title {
          font-size: 2.2rem;
          color: #fff;
          margin-bottom: 20px;
        }
        
        .cta-subtitle {
          font-size: 1.4rem;
          color: #e6c619;
          margin-bottom: 30px;
        }
        
        .consultation-button {
          display: inline-block;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          font-size: 1.3rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          cursor: pointer;
          border: none;
          position: relative;
          overflow: hidden;
        }
        
        .consultation-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          transform: rotate(45deg);
          transition: all 0.5s ease;
          opacity: 0;
        }
        
        .consultation-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(168, 63, 103, 0.6);
        }
        
        .consultation-button:hover::before {
          opacity: 1;
          transform: rotate(45deg) translate(10%, 10%);
        }
        
        .whatsapp-icon {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 10px;
          vertical-align: middle;
        }
        
        .mystical-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(230, 198, 25, 0.5), transparent);
          margin: 40px 0;
        }
        
        .benefits-section {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .benefit-item {
          flex: 1;
          min-width: 250px;
          background: rgba(14, 7, 20, 0.4);
          border-radius: 10px;
          padding: 25px;
          text-align: center;
          transition: transform 0.3s ease;
          border-bottom: 3px solid transparent;
        }
        
        .benefit-item:hover {
          transform: translateY(-5px);
          border-bottom-color: #a83f67;
        }
        
        .benefit-icon {
          font-size: 2.5rem;
          color: #e6c619;
          margin-bottom: 15px;
        }
        
        .benefit-title {
          font-size: 1.4rem;
          color: #fff;
          margin-bottom: 10px;
        }
        
        .benefit-text {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .tarot-title {
            font-size: 2.5rem;
          }
          
          .tarot-description {
            font-size: 1.1rem;
          }
          
          .questions-section {
            padding: 25px;
          }
          
          .questions-title {
            font-size: 1.8rem;
          }
          
          .questions-grid {
            grid-template-columns: 1fr;
          }
          
          .cta-title {
            font-size: 1.8rem;
          }
          
          .cta-subtitle {
            font-size: 1.2rem;
          }
          
          .consultation-button {
            font-size: 1.1rem;
            padding: 1rem 2rem;
          }
          
          .benefit-item {
            flex: 100%;
          }
        }
      `}</style>
      
      {/* Fondo de video similar al Home */}
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
      
      {/* Elementos místicos flotantes */}
      <div className="mystical-elements">
        <div className="mystical-element element-1"></div>
        <div className="mystical-element element-2"></div>
        <div className="mystical-element element-3"></div>
      </div>
      
      <div className="tarot-container">
        <div className="tarot-header">
          <h2 className="tarot-title">Lecturas de Tarot Revelador</h2>
          <p className="tarot-description">
            Las cartas del tarot tienen el poder de <span className="tarot-highlight">revelar verdades ocultas</span> y 
            desvelar los mensajes que el universo tiene para usted. A través de una lectura profesional, 
            podrá encontrar respuestas a las preguntas que inquietan su corazón y mente.
          </p>
        </div>
        
        <div className="questions-section">
          <h3 className="questions-title">¿Qué desea saber?</h3>
          <div className="questions-grid">
            {commonQuestions.map((question, index) => (
              <div 
                key={index} 
                className="question-item" 
                onClick={() => goToWhatsAppWithQuestion(question)}
                title="Haga clic para consultar sobre esta pregunta"
              >
                <span className="question-icon">✧</span>
                {question}
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#e6c619', fontSize: '0.9rem' }}>
            Haga clic en cualquier pregunta para consultar directamente
          </p>
        </div>
        
        <div className="mystical-divider"></div>
        
        <div className="benefits-section">
          <div className="benefit-item">
            <div className="benefit-icon">🔮</div>
            <h4 className="benefit-title">Claridad Inmediata</h4>
            <p className="benefit-text">
              Obtenga respuestas claras que le guiarán en momentos de duda y confusión.
            </p>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">✨</div>
            <h4 className="benefit-title">Revelaciones Precisas</h4>
            <p className="benefit-text">
              Descubra verdades ocultas y mensajes que otros no pueden ver.
            </p>
          </div>
          
          <div className="benefit-item">
            <div className="benefit-icon">🌙</div>
            <h4 className="benefit-title">Conexión Espiritual</h4>
            <p className="benefit-text">
              Acceda a la sabiduría ancestral y los mensajes del universo.
            </p>
          </div>
        </div>
        
        <div className="call-to-action">
          <h3 className="cta-title">No espere más para conocer su destino</h3>
          <p className="cta-subtitle">Primera consulta Gratis</p>
          
          <button className="consultation-button" onClick={() => goToWhatsAppWithQuestion("Deseo una consulta general")}>
            <svg className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            Consultar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarot;