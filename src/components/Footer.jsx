import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-black border border-[#FFD700]/30 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-[#FFD700]">{title}</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="text-white">
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
    const message = 'Maestra Carmen, Quiero Consultar Con usted';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const currentYear = new Date().getFullYear();

  const policies = {
    privacy: {
      title: "Política de Privacidad",
      content: (
        <div className="space-y-4">
          <p>La presente Política de Privacidad establece los términos en que la Maestra Carmen usa y protege la información que es proporcionada por sus usuarios. Estamos comprometidos con la seguridad de los datos de nuestros usuarios.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Información que es recogida</h3>
          <p>Nuestro sitio web podrá recoger información personal como: Nombre, información de contacto como su número de teléfono y correo electrónico.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Uso de la información recogida</h3>
          <p>La información que recogemos se utiliza para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar el mejor servicio posible</li>
            <li>Mantener un registro de usuarios y sus consultas</li>
            <li>Mejorar nuestros productos y servicios</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Confidencialidad</h3>
          <p>Nos comprometemos a mantener su información segura. No se compartirá ni venderá a terceros bajo ninguna circunstancia.</p>
        </div>
      )
    },
    terms: {
      title: "Términos de Servicio",
      content: (
        <div className="space-y-4">
          <p>Al acceder y utilizar este sitio web, usted acepta los siguientes términos y condiciones:</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">1. Servicios</h3>
          <p>Nuestros servicios están destinados únicamente para propósitos de entretenimiento y ayuda espiritual. No garantizamos resultados específicos.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">2. Uso del Servicio</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>La información proporcionada debe ser verdadera y precisa</li>
            <li>Se compromete a no usar el servicio con fines ilegales</li>
          </ul>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">3. Confidencialidad</h3>
          <p>Nos comprometemos a mantener la confidencialidad de toda información compartida durante las consultas.</p>
        </div>
      )
    },
    legal: {
      title: "Aviso Legal",
      content: (
        <div className="space-y-4">
          <p>Este aviso legal regula el uso del servicio del sitio web de la Maestra Carmen.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Información General</h3>
          <p>Los servicios ofrecidos son de naturaleza espiritual y de consultoría personal. Todos los servicios se proporcionan únicamente con fines de orientación y ayuda espiritual.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Propiedad Intelectual</h3>
          <p>Todo el contenido de este sitio web está protegido por derechos de autor. No está permitida su reproducción sin autorización expresa.</p>

          <h3 className="text-lg font-semibold text-[#FFD700] mt-4">Exención de Responsabilidades</h3>
          <p>Los servicios son de naturaleza espiritual y las decisiones tomadas basadas en nuestras consultas son responsabilidad del cliente.</p>
        </div>
      )
    }
  };

  return (
    <footer className="bg-black border-t border-[#FFD700]/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-[#FFD700] text-xl font-bold">MAESTRA CARMEN</h3>
            <p className="text-white text-sm mt-1">Experta en Amarres de Amor</p>
            <p className="text-white text-sm">Catemaco, Veracruz - México</p>
            <button
              onClick={handleWhatsAppClick}
              className="text-white hover:text-[#FFD700] transition-colors flex items-center gap-2 mt-2"
            >
              <Phone className="w-4 h-4" />
              <span>+52 669 920 1652</span>
            </button>
          </div>

          {/* Policies */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <button 
              onClick={() => setOpenModal('privacy')} 
              className="text-white hover:text-[#FFD700] transition-colors text-sm"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => setOpenModal('terms')} 
              className="text-white hover:text-[#FFD700] transition-colors text-sm"
            >
              Términos de Servicio
            </button>
            <button 
              onClick={() => setOpenModal('legal')} 
              className="text-white hover:text-[#FFD700] transition-colors text-sm"
            >
              Aviso Legal
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-[#FFD700]/20">
          <p className="text-white text-sm">
            © {currentYear} Maestra Carmen - Todos los derechos reservados
          </p>
        </div>
      </div>

      {/* Policy Modals */}
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