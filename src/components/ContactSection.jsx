import React from 'react';

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Maestra Carmen, Quiero Consultar Con usted';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-black py-16 relative overflow-hidden" id="contacto">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10"></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-[#FFD700] mb-4">
            CONTACTO
          </h2>
        </div>

        {/* Main Contact Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/80 backdrop-blur-sm border border-[#FFD700]/30 rounded-lg p-8 md:p-12 shadow-2xl shadow-purple-900/30">
            {/* Location and Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-center">
              <div>
                <h3 className="text-[#FFD700] text-2xl font-bold mb-2">Catemaco, Veracruz</h3>
                <p className="text-purple-200 text-lg">Capital Mundial de la Brujería</p>
              </div>
              <div>
                <h3 className="text-[#FFD700] text-2xl font-bold mb-2">Atención Permanente</h3>
                <p className="text-purple-200 text-lg">24 Horas / 7 Días</p>
              </div>
            </div>

            {/* Contact Call to Action */}
            <div className="text-center space-y-6">
              <h3 className="text-3xl text-red-500 font-bold">
                ¿NECESITAS AYUDA INMEDIATA?
              </h3>
              
                           <button
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-green-600 via-green-500 to-green-600 rounded-full hover:from-green-700 hover:via-green-600 hover:to-green-700 shadow-lg hover:shadow-green-500/50"
              >
                <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                CONSULTA GRATUITA
              </button>

              <p className="text-purple-200 text-sm mt-6">
                Tu consulta será atendida con total discreción
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;