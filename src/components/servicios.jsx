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
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/voodoo-doll-black-magic-esoteric-ritual-2022-10-03-18-35-30-utc_qdtmj5_cdyfi0.jpg",
      message: "Maestra Gregoria, necesito ayuda con un amarre de amor."
    },
    {
      title: "Amarres del Mismo Genero",
      description: "Rituales especializados para unir parejas del mismo genero. Recupera y fortalece el amor con tu pareja ideal mediante rituales personalizados y prácticas espirituales.",
      titleColor: "#FFD700",
      descriptionColor: "#FFFFFF",
      buttonTextColor: "#FFD700",
      buttonBorderColor: "#FFD700",
      buttonHoverBg: "#FFD700",
      buttonHoverText: "#000000",
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/IMG4_dw0nmk_iu2mak.jpg",
      message: "Maestra Gregoria, quiero un amarre para pareja del mismo genero."
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
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Imagen_de_WhatsApp_2025-02-06_a_las_12.03.01_f5ba203b_pjbco2_ywxlc6.jpg",
      message: "Maestra Gregoria, quiero su ayuda con un amarre sexual "
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
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/cdd2b3bbef2b6cba35f85a10087e1340_wdzkj5_gij8o0.jpg",
      message: "Maestra Gregoria, deseo un endulzamiento de amor."
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
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/esposa-solitaria-sufriendo-despues-ruptura-casa_u70axu_m0e41z.jpg",
      message: "Maestra Gregoria, necesito ayuda con un alejamiento."
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
      image: "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Imagen-de-WhatsApp-2024-11-05-a-las-15.17.52_d17d9b73-768x1024_nweyob_bafjsi.jpg",
      message: "Maestra Gregoria, busco protección espiritual"
    }
  ];

  const handleWhatsAppClick = (message) => {
    const phoneNumber = '+526699201652';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div 
      className="bg-black w-full py-8 sm:py-12 md:py-16" 
      id="servicios"
      role="region" 
      aria-label="Servicios disponibles"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700]">
            SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-3 sm:p-4 md:p-6 transition-transform duration-300 hover:scale-105"
              role="article"
              aria-label={`Servicio de ${service.title}`}
            >
              {service.image && (
                <div className="w-full aspect-square mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={`Imagen ilustrativa de ${service.title}`}
                    draggable="false"
                    style={{ 
                      WebkitUserDrag: 'none', 
                      userSelect: 'none',
                      pointerEvents: 'none'
                    }}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              )}
              
              <h3 
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center px-2"
                style={{ color: service.titleColor }}
              >
                {service.title}
              </h3>
              
              <p 
                className="text-sm sm:text-base md:text-lg text-center mb-4 sm:mb-6 md:mb-8 px-2"
                style={{ color: service.descriptionColor }}
              >
                {service.description}
              </p>
              
              <button 
                onClick={() => handleWhatsAppClick(service.message)}
                aria-label={`Consulta gratuita sobre ${service.title}`}
                name={`service-consultation-${index + 1}`}
                className="w-full sm:w-auto bg-transparent transition-all duration-300 
                  text-center font-medium rounded-sm
                  px-4 sm:px-6 md:px-8 py-3 sm:py-4 
                  min-h-[40px] sm:min-h-[48px] 
                  min-w-[160px] sm:min-w-[200px] 
                  text-sm sm:text-base md:text-lg
                  touch-manipulation 
                  mx-2 my-2
                  focus:outline-none focus:ring-2 focus:ring-[#FFD700]
                  hover:shadow-lg"
                style={{
                  color: service.buttonTextColor,
                  borderColor: service.buttonBorderColor,
                  borderWidth: '2px',
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
      </div>
    </div>
  );
};

export default ServiceSection;