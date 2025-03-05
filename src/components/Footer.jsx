import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-black border border-[#FFD700]/30 rounded-lg w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-[#FFD700] break-words">
              {title}
            </h2>
            <button 
              onClick={onClose}
              aria-label="Cerrar ventana modal"
              name="close-modal"
              className="text-white hover:text-[#FFD700] transition-colors p-1 sm:p-2 rounded-full hover:bg-white/10"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="text-white text-sm sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [openModal, setOpenModal] = useState(null);
  
  const phoneNumber = '526699201652';
  const message = 'Maestra Gregoria, Quiero Consultar Con usted';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const currentYear = new Date().getFullYear();

  const policies = {
    privacy: {
      title: "Políticas",
      content: (
        <div className="space-y-4">
          {/* Información General */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Información General</h3>
            <p>La presente política establece los términos en que la Maestra Gregoria usa y protege la información proporcionada por sus usuarios, así como las condiciones generales de uso del servicio.</p>
          </div>

          {/* Advertencias Importantes */}
          <div className="p-4 border border-[#FFD700]/30 rounded">
            <h3 className="text-lg font-semibold text-[#FFD700] mb-3">ADVERTENCIAS IMPORTANTES</h3>
            <ul className="space-y-3">
              <li>SERVICIO ESPIRITUAL: Nuestros servicios son de naturaleza espiritual y esotérica. No garantizamos resultados específicos.</li>
              <li>SOLO MAYORES DE EDAD: Los servicios están destinados exclusivamente a personas mayores de 18 años.</li>
              <li>NO SUSTITUYE CONSEJOS PROFESIONALES: Nuestros servicios no sustituyen consejos médicos, psicológicos, legales o financieros profesionales.</li>
              <li>RESPONSABILIDAD: Las decisiones tomadas basadas en nuestras consultas son responsabilidad exclusiva del cliente.</li>
              <li> CONFIDENCIALIDAD: Mantenemos la confidencialidad de las consultas, pero no nos hacemos responsables por información compartida voluntariamente por el cliente.</li>
            </ul>
          </div>

          {/* Términos del Servicio */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Términos del Servicio</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los resultados pueden variar según el caso particular.</li>
              <li>Las consultas y servicios son de carácter personal y confidencial.</li>
              <li>Los pagos realizados no son reembolsables una vez iniciado el servicio.</li>
              <li>Los testimonios presentados son experiencias personales y los resultados pueden variar.</li>
            </ul>
          </div>

          {/* Privacidad */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Privacidad de Datos</h3>
            <p>Información que recolectamos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y datos de contacto</li>
              <li>Número de teléfono y correo electrónico</li>
              <li>Información proporcionada durante las consultas</li>
            </ul>
          </div>

          {/* Uso de la Información */}
          <div>
            <h3 className="text-lg font-semibold text-[#FFD700] mb-2">Uso de la Información</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Mantener un registro confidencial de consultas</li>
              <li>Comunicarnos con usted sobre su servicio</li>
              <li>Proteger la seguridad y privacidad de nuestros usuarios</li>
            </ul>
          </div>

          {/* Acuerdo Final */}
          <div className="mt-6 p-4 bg-[#FFD700]/10 rounded">
            <p className="text-sm">Al utilizar nuestros servicios, usted reconoce haber leído, entendido y aceptado todas estas políticas y condiciones. Si no está de acuerdo con alguna de estas condiciones, por favor absténgase de utilizar nuestros servicios.</p>
          </div>
        </div>
      )
    }
  };

  return (
    <footer 
      id="contacto"  
      className="bg-black border-t border-[#FFD700]/20"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Información de Contacto */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-[#FFD700] text-lg sm:text-xl font-bold">Maestra Gregoria</h3>
            <div className="space-y-1">
              <p className="text-white text-xs sm:text-sm">Tu consulta sera atendida con discreción.</p>
              <p className="text-white text-xs sm:text-sm">Experta en Amarres de Amor</p>
              <p className="text-white text-xs sm:text-sm">Catemaco, Veracruz - México</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Llamar por WhatsApp al número +52 669 920 1652"
              name="footer-whatsapp"
              className="inline-flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors text-xs sm:text-sm mt-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+52 669 920 1652</span>
            </a>
          </div>

          {/* Enlaces de Políticas */}
          <div className="flex justify-center md:justify-end">
            <button 
              onClick={() => setOpenModal('privacy')} 
              aria-label="Ver políticas"
              name="privacy-policy"
              className="text-white hover:text-[#FFD700] transition-colors text-xs sm:text-sm"
            >
              Políticas
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-4 sm:pt-6 border-t border-[#FFD700]/20">
          <p className="text-white text-xs sm:text-sm">
            © {currentYear} Maestra Gregoria - Todos los derechos reservados
          </p>
        </div>
      </div>

      {/* Modal de Políticas */}
      <Modal
        isOpen={openModal === 'privacy'}
        onClose={() => setOpenModal(null)}
        title={policies.privacy.title}
      >
        {policies.privacy.content}
      </Modal>
    </footer>
  );
};

export default Footer;