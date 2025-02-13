import React from 'react';

const ServiceSection = () => {
  const services = [
    {
      title: "Amarres de Amor",
      description: "Poderosos rituales para recuperar el amor perdido. Amarres de amor efectivos para que esa persona amada nunca se vaya de tu lado, no se fijará en nadie más, solo tendrá sentimientos hacia ti.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/voodoo-doll-black-magic-esoteric-ritual-2022-10-03-18-35-30-utc_qdtmj5_cdyfi0.jpg"
    },
    {
      title: "Amarres del Mismo Sexo",
      description: "Rituales especializados para unir parejas del mismo sexo. Recupera y fortalece el amor con tu pareja ideal mediante rituales personalizados y prácticas espirituales.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/IMG4_dw0nmk_iu2mak.jpg"
    },
    {
      title: "Amarres Sexuales",
      description: "Poderosos rituales para despertar la pasión y el deseo en tu pareja. Reconquista la atracción y el romance de forma permanente.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Imagen_de_WhatsApp_2025-02-06_a_las_12.03.01_f5ba203b_pjbco2_ywxlc6.jpg"
    },
    {
      title: "Endulzamientos",
      description: "Transforma la indiferencia en amor intenso. Endulza el carácter de tu pareja y mejora la relación con rituales efectivos.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/cdd2b3bbef2b6cba35f85a10087e1340_wdzkj5_gij8o0.jpg"
    },
    {
      title: "Alejamientos",
      description: "Elimina las energías negativas y personas indeseadas. Libérate de ataduras tóxicas mediante nuestros rituales ancestrales.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/esposa-solitaria-sufriendo-despues-ruptura-casa_u70axu_m0e41z.jpg"
    },
    {
      title: "Protecciones",
      description: "Escudo contra maleficios, envidias y trabajos oscuros. Protege tu destino y tu felicidad con nuestra protección espiritual.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Imagen-de-WhatsApp-2024-11-05-a-las-15.17.52_d17d9b73-768x1024_nweyob_bafjsi.jpg"
    }
  ];

  return (
    <div className="bg-black py-16 md:py-8" id="servicios">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Título Principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700]">
            SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4 md:p-6">
              {service.image && (
                <div className="w-full aspect-square mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center"
                style={{ color: service.titleColor }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-base md:text-lg text-center mb-6 md:mb-8"
                style={{ color: service.descriptionColor }}
              >
                {service.description}
              </p>
              
              <button 
                onClick={() => {
                  const phoneNumber = '+526699201652';
                  const message = 'Maestra Carmen, Quiero Consultar Con usted';
                  window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                }}
                className="w-full sm:w-auto bg-transparent transition-all duration-300 text-center font-medium rounded-sm text-sm md:text-base px-6 md:px-8 py-2 md:py-3 hover:scale-105"
                style={{
                  color: service.buttonTextColor,
                  borderColor: service.buttonBorderColor,
                  borderWidth: '1px',
                  borderStyle: 'solid'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = service.buttonHoverBg;
                  e.currentTarget.style.color = service.buttonHoverText;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = service.buttonTextColor;
                }}
              >
                Consulta Gratuita
              </button>
            </div>
          ))}
        </div>

       {/* Mensaje Final */}
<div className="mt-16 text-center px-4">
  <div className="max-w-4xl mx-auto bg-gradient-to-r from-black via-gray-900 to-black p-8 rounded-lg border border-[#FFD700]/30">
    <p className="text-2xl md:text-3xl lg:text-4xl mb-6 font-light tracking-wide">
      <span className="text-[#FFD700]">No dejes que el amor de tu vida se aleje.</span>
    </p>
    <p className="text-white text-xl md:text-2xl lg:text-3xl mb-6 italic">
      Aún hay esperanza para recuperar su amor y estar juntos de nuevo.
    </p>
    <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest text-red-600 animate-pulse">
      ¡CONSULTANOS Y TE AYUDAREMOS!
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default ServiceSection;