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

  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Maestra Gregoria, Quiero Consultar Con usted';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const currentYear = new Date().getFullYear();

  const policies = {
    privacy: {
      title: "Política de Privacidad",
      content: (
        <div className="space-y-3 sm:space-y-4">
          <p className="text-sm sm:text-base">La presente Política de Privacidad establece los términos en que la Maestra Gregoria usa y protege la información que es proporcionada por sus usuarios. Estamos comprometidos con la seguridad de los datos de nuestros usuarios.</p>

          <h3 className="text-base sm:text-lg font-semibold text-[#FFD700] mt-3 sm:mt-4">Información que es recogida</h3>
          <p className="text-sm sm:text-base">Nuestro sitio web podrá recoger información personal como: Nombre, información de contacto como su número de teléfono y correo electrónico.</p>

          <h3 className="text-base sm:text-lg font-semibold text-[#FFD700] mt-3 sm:mt-4">Uso de la información recogida</h3>
          <p className="text-sm sm:text-base">La información que recogemos se utiliza para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar el mejor servicio posible</li>
            <li>Mantener un registro de usuarios y sus consultas</li>
            <li>Mejorar nuestros productos y servicios</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold text-[#FFD700] mt-3 sm:mt-4">Confidencialidad</h3>
          <p className="text-sm sm:text-base">Nos comprometemos a mantener su información segura. No se compartirá ni venderá a terceros bajo ninguna circunstancia.</p>
        </div>
      )
    },
    // ... resto de las políticas similar al anterior ...
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
            <h3 className="text-[#FFD700] text-lg sm:text-xl font-bold">MAESTRA Gregoria</h3>
            <div className="space-y-1">
              <p className="text-white text-xs sm:text-sm">Tu consulta sera atendida con discreción.</p>
              <p className="text-white text-xs sm:text-sm">Experta en Amarres de Amor</p>
              <p className="text-white text-xs sm:text-sm">Catemaco, Veracruz - México</p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              aria-label="Llamar por WhatsApp al número +52 669 920 1652"
              name="footer-whatsapp"
              className="inline-flex items-center gap-2 text-white hover:text-[#FFD700] transition-colors text-xs sm:text-sm mt-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+52 669 920 1652</span>
            </button>
          </div>

          {/* Enlaces de Políticas */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4 sm:gap-6">
            {Object.entries(policies).map(([key, policy]) => (
              <button 
                key={key}
                onClick={() => setOpenModal(key)} 
                aria-label={`Ver ${policy.title.toLowerCase()}`}
                name={`${key}-policy`}
                className="text-white hover:text-[#FFD700] transition-colors text-xs sm:text-sm"
              >
                {policy.title}
              </button>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-4 sm:pt-6 border-t border-[#FFD700]/20">
          <p className="text-white text-xs sm:text-sm">
            © {currentYear} Maestra Gregoria - Todos los derechos reservados
          </p>
        </div>
      </div>

      {/* Modales de Políticas */}
      {Object.entries(policies).map(([key, policy]) => (
        <Modal
          key={key}
          isOpen={openModal === key}
          onClose={() => setOpenModal(null)}
          title={policy.title}
        >
          {policy.content}
        </Modal>
      ))}
    </footer>
  );
};

export default Footer;