import React, { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  
  const toggleDisclaimer = () => {
    setDisclaimerOpen(!disclaimerOpen);
    setPrivacyOpen(false);
    setTermsOpen(false);
  };
  
  const togglePrivacy = () => {
    setPrivacyOpen(!privacyOpen);
    setDisclaimerOpen(false);
    setTermsOpen(false);
  };
  
  const toggleTerms = () => {
    setTermsOpen(!termsOpen);
    setDisclaimerOpen(false);
    setPrivacyOpen(false);
  };
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-links-container">
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); toggleDisclaimer(); }}>Aviso Legal</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); togglePrivacy(); }}>Política de Privacidad</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); toggleTerms(); }}>Términos y Condiciones</a></li>
          </ul>
        </div>
        
        {disclaimerOpen && (
          <div className="modal-content disclaimer-content">
            <h3>Aviso Legal</h3>
            <p><strong>ADVERTENCIA:</strong> Todos nuestros servicios son exclusivamente con fines de entretenimiento y consultoría espiritual.</p>
            <p>Los servicios ofrecidos son con fines exclusivos de entretenimiento y consultoría espiritual. No garantizamos resultados específicos ya que estos pueden variar según cada individuo.</p>
            <p>No somos profesionales médicos, legales o financieros. Para situaciones que requieran asistencia profesional, le recomendamos buscar ayuda especializada adecuada.</p>
            <p>Al solicitar cualquiera de nuestros servicios, reconoce que comprende la naturaleza de los mismos como entretenimiento y consultoría, asumiendo total responsabilidad por su decisión.</p>
            <button className="close-modal" onClick={toggleDisclaimer}>Cerrar</button>
          </div>
        )}
        
        {privacyOpen && (
          <div className="modal-content">
            <h3>Política de Privacidad</h3>
            <p>En Santuario Saberes Ocultos, respetamos su privacidad y nos comprometemos a proteger sus datos personales.</p>
            <p>La información que nos proporciona a través de nuestros formularios de contacto o consultas se utiliza exclusivamente para responder a sus solicitudes y proporcionar los servicios solicitados.</p>
            
            <h4>Recopilación de Información</h4>
            <p>Recopilamos la información que usted nos proporciona voluntariamente, como su nombre, número de teléfono y detalles sobre su situación personal cuando nos contacta para solicitar servicios.</p>
            
            <h4>Uso de la Información</h4>
            <p>Utilizamos su información para:</p>
            <ul>
              <li>Comunicarnos con usted sobre los servicios solicitados</li>
              <li>Personalizar nuestras consultas según sus necesidades</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
            
            <h4>Confidencialidad</h4>
            <p>Toda la información que comparte con nosotros se mantiene estrictamente confidencial y no será compartida con terceros sin su consentimiento expreso.</p>
            
            <h4>Política de Reembolso</h4>
            <p>Debido a la naturaleza de nuestros servicios, no ofrecemos reembolsos una vez que se ha realizado una consulta personalizada. Sin embargo, nos comprometemos a su satisfacción y trabajaremos con usted para resolver cualquier inquietud sobre los servicios prestados.</p>
            <p>Para sesiones programadas que se cancelen con al menos 24 horas de anticipación, se puede reprogramar sin costo adicional.</p>
            
            <h4>Contacto</h4>
            <p>Si tiene preguntas sobre nuestra política de privacidad o desea ejercer sus derechos respecto a sus datos personales, contáctenos a través de nuestros canales oficiales.</p>
            
            <button className="close-modal" onClick={togglePrivacy}>Cerrar</button>
          </div>
        )}
        
        {termsOpen && (
          <div className="modal-content">
            <h3>Términos y Condiciones</h3>
            <p>Al utilizar nuestros servicios, usted acepta los siguientes términos y condiciones:</p>
            
            <h4>Naturaleza de los Servicios</h4>
            <p>Todos los servicios ofrecidos por Santuario Saberes Ocultos son proporcionados exclusivamente con fines de entretenimiento y consultoría espiritual. No representan consejos médicos, legales, financieros o psicológicos profesionales.</p>
            
            <h4>Limitación de Responsabilidad</h4>
            <p>No nos hacemos responsables por decisiones tomadas basadas en nuestras consultas. Nuestros servicios no garantizan resultados específicos, ya que estos pueden variar según cada individuo y circunstancia.</p>
            
            <h4>Edad Mínima</h4>
            <p>Nuestros servicios están destinados a personas mayores de 18 años. Si es menor de edad, debe contar con la autorización de un padre o tutor legal.</p>
            
            <h4>Reserva de Derechos</h4>
            <p>Nos reservamos el derecho de rechazar servicios a cualquier persona sin necesidad de justificación. También podemos modificar estos términos y condiciones en cualquier momento, siendo responsabilidad del usuario revisarlos periódicamente.</p>
            
            <h4>Propiedad Intelectual</h4>
            <p>Todo el contenido presente en nuestro sitio web y materiales es propiedad exclusiva de Santuario Saberes Ocultos y está protegido por leyes de propiedad intelectual.</p>
            
            <h4>Legislación Aplicable</h4>
            <p>Estos términos y condiciones se rigen por las leyes de México.</p>
            
            <button className="close-modal" onClick={toggleTerms}>Cerrar</button>
          </div>
        )}
        
        <div className="footer-bottom">
          <p className="copyright">&copy; {currentYear} Santuario Saberes Ocultos. <br></br>Todos los derechos reservados.</p>
        </div>
      </div>
      
      <style jsx>{`
        .site-footer {
          background-color: #0a0a0a;
          color: rgba(255, 255, 255, 0.7);
          padding-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
        }
        
        /* Eliminar estilos del banner */
        /* Banner de disclaimer como botón */
        
        /* Modal para los contenidos */
        .modal-content {
          background: #1a1a1a;
          border: 1px solid rgba(168, 63, 103, 0.3);
          border-radius: 10px;
          padding: 2rem;
          margin-bottom: 2rem;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          max-height: 70vh;
          overflow-y: auto;
          animation: fadeIn 0.3s ease;
          z-index: 10;
        }
        
        .disclaimer-content {
          border-top: 5px solid #a83f67;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .modal-content h3 {
          color: #e6c619;
          font-size: 1.4rem;
          margin-bottom: 1.2rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(230, 198, 25, 0.3);
        }
        
        .modal-content h4 {
          color: #e6c619;
          font-size: 1.1rem;
          margin: 1.5rem 0 0.8rem;
        }
        
        .modal-content p {
          line-height: 1.7;
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }
        
        .modal-content ul {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .modal-content ul li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
        
        .close-modal {
          background: linear-gradient(135deg, #a83f67, #6e3253);
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 30px;
          cursor: pointer;
          font-size: 0.9rem;
          margin-top: 1rem;
          display: block;
          transition: all 0.3s ease;
        }
        
        .close-modal:hover {
          background: linear-gradient(135deg, #8e3456, #5d2a46);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        /* Estilos actualizados para footer con todos los enlaces */
        .footer-links-container {
          text-align: center;
          margin-bottom: 1.5rem;
          padding-top: 1.5rem;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          gap: 2rem;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
          display: inline-block;
          position: relative;
        }
        
        .footer-links a:hover {
          color: #e6c619;
        }
        
        .footer-links a::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #e6c619;
          transition: width 0.3s ease;
        }
        
        .footer-links a:hover::after {
          width: 100%;
        }
        
        /* Parte inferior del footer */
        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }
        
        .copyright {
          font-size: 0.9rem;
          margin-bottom: 0;
        }
        
        /* Decoración del footer */
        .site-footer::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(168, 63, 103, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(30px);
          z-index: 0;
        }
        
        .site-footer::after {
          content: '';
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(230, 198, 25, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(30px);
          z-index: 0;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
          
          .disclaimer-text {
            font-size: 0.95rem;
          }
          
          .modal-content {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .disclaimer-banner {
            padding: 0.8rem;
          }
          
          .disclaimer-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;