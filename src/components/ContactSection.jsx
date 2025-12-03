import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'amarre'
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Construir la URL de WhatsApp basada en el formulario actual
  const getWhatsAppUrl = () => {
    const message = `Hola, Mi nombre es ${formData.name}. Me interesa el servicio de ${formData.service}.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/526693329167?text=${encodedMessage}`;
  };

  return (
    <>
      <section id="contacto" className="contact-section">
        <div className="mystical-elements">
          {[1, 2, 3].map(num => (
            <div key={num} className={`mystical-element contact-element-${num}`}></div>
          ))}
        </div>
        
        <div className="container">
          <div className="section-header">
            <h2 className="section-subtitle">COMUNÍCATE CON NOSOTROS</h2>
            <h1 className="section-title">Solicita Tu <span>Consulta Espiritual</span></h1>
            <div className="section-divider"></div>
          </div>
          
          <div className="contact-info-simplified">
            <div className="contact-info-row">
              <div className="contact-card">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="card-content">
                  <h3>WhatsApp</h3>
                  <a 
                    href="https://wa.me/526693329167?text=Hola%20deseo%20realizar%20una%20consulta%3F" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    +52 669 332 9167
                    <p className="card-note">Respuesta inmediata</p>
                  </a>
                </div>
              </div>
              
              <div className="contact-card">
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="card-content">
                  <h3>Ubicación</h3>
                  <p>Catemaco, Veracruz, México</p>
                  <p className="card-note">Consultas presenciales con cita previa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <h3 className="form-title">Solicitar Consulta Gratuita</h3>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Servicio de Interés</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="amarre">Amarre de Amor</option>
                  <option value="retorno">Retorno Inmediato</option>
                  <option value="limpia">Limpia Espiritual</option>
                  <option value="tarot">Lectura de Tarot</option>
                  <option value="proteccion">Protección</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              {/* El botón ahora es un enlace <a> directamente con href dinámico */}
              <a 
                href={getWhatsAppUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="submit-button"
              >
                Enviar Consulta por WhatsApp
                <span className="button-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3l1.3 5.2c1.8-4 6-6.9 11.5-6.9C21.9 1.3 26 4.4 26 8.2c0 3.7-2.9 6.8-7 8.4v2.8c0 .7-.2 1.3-.7 1.8s-1.1.7-1.8.7c-.3 0-.5 0-.8-.1-1-.3-1.9-.7-2.7-1.3M5.8 18.2c-1.1-.6-2-1.2-2.7-2a9.3 9.3 0 0 1-2-5.7c0-5.2 4.8-9.5 10.7-9.5s10.7 4.3 10.7 9.5c0 5.2-4.8 9.5-10.7 9.5-1.2 0-2.3-.2-3.4-.5l-3.4.9c-.9.2-1.8-.4-1.8-1.3v-1.9z"></path>
                  </svg>
                </span>
              </a>
            </form>
            
            <div className="form-decoration">
              <div className="decoration-element"></div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .contact-section {
          padding: 5rem 1rem;
          background-color: #0c0c0c;
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #e6c619;
          margin-bottom: 0.5rem;
          font-weight: 400;
          letter-spacing: 2px;
        }
        
        .section-title {
          font-size: 2.8rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        
        .section-title span {
          color: #a83f67;
        }
        
        .section-divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #e6c619, #a83f67);
          margin: 0 auto;
          border-radius: 3px;
        }
        
        /* Estilo para mostrar las tarjetas de contacto en fila */
        .contact-info-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .contact-info-simplified {
          margin-bottom: 3rem;
        }
        
        .contact-card {
          background: rgba(25, 25, 25, 0.7);
          border-radius: 15px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          border-left: 3px solid #a83f67;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
        }
        
        .icon-container {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .icon-container svg {
          width: 24px;
          height: 24px;
          stroke: #fff;
        }
        
        .card-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #e6c619;
        }
        
        .card-content p {
          margin: 0;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .card-content a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          opacity: 0.9;
          display: block;
          transition: color 0.3s ease;
        }
        
        .card-content a:hover {
          color: #e6c619;
        }
        
        .whatsapp-link {
          cursor: pointer;
        }
        
        .card-note {
          font-size: 0.9rem !important;
          opacity: 0.7 !important;
          margin-top: 0.5rem !important;
          font-style: italic;
        }
        
        .contact-form-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .contact-form {
          background: rgba(25, 25, 25, 0.8);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(168, 63, 103, 0.3);
          position: relative;
          z-index: 2;
        }
        
        .form-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #e6c619;
          text-align: center;
        }
        
        .form-message {
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .form-message.success {
          background: rgba(46, 125, 50, 0.2);
          border-left: 3px solid #2e7d32;
          color: #81c784;
        }
        
        .form-message.error {
          background: rgba(198, 40, 40, 0.2);
          border-left: 3px solid #c62828;
          color: #e57373;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #e6c619;
        }
        
        input, select, textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #a83f67;
          box-shadow: 0 0 0 3px rgba(168, 63, 103, 0.3);
        }
        
        ::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23e6c619' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 20px;
        }
        
        .privacy-consent {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
        }
        
        .privacy-consent input[type="checkbox"] {
          width: auto;
          margin-top: 0.3rem;
        }
        
        .privacy-consent label {
          margin-bottom: 0;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: normal;
          line-height: 1.4;
        }
        
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(168, 63, 103, 0.4);
          font-family: 'Playfair Display', serif;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          text-align: center;
        }
        
        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(168, 63, 103, 0.6);
        }
        
        .submit-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
        }
        
        .submit-button:hover::before {
          left: 100%;
        }
        
        .button-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .button-icon svg {
          width: 16px;
          height: 16px;
          stroke: #fff;
        }
        
        .form-decoration {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
          border-radius: 20px;
          z-index: 1;
        }
        
        .decoration-element {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 63, 103, 0.3) 0%, transparent 70%);
          top: -100px;
          right: -100px;
          border-radius: 50%;
          filter: blur(30px);
        }
        
        .decoration-element::before {
          content: '';
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(230, 198, 25, 0.3) 0%, transparent 70%);
          bottom: -50px;
          left: 0;
          border-radius: 50%;
          filter: blur(20px);
        }
        
        .mystical-element.contact-element-1 {
          top: 10%;
          right: 5%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(168, 63, 103, 0.2) 0%, transparent 70%);
          animation: float 10s infinite ease-in-out;
        }
        
        .mystical-element.contact-element-2 {
          bottom: 10%;
          left: 5%;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(230, 198, 25, 0.2) 0%, transparent 70%);
          animation: float 12s infinite ease-in-out reverse;
        }
        
        .mystical-element.contact-element-3 {
          top: 40%;
          left: 50%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(126, 58, 160, 0.15) 0%, transparent 70%);
          animation: float 9s infinite ease-in-out 2s;
        }
        
        /* Estilos responsive */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
          
          .contact-info-row {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .contact-section {
            padding: 3rem 1rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .contact-card {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem 1rem;
          }
          
          .icon-container {
            margin-bottom: 0.8rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;