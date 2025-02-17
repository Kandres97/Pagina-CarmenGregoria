import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // URLs de las imágenes de testimonios
  const testimonialImages = [
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/testimonio_1_yrauxg_dkfhoj.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/Testimonio_2_nfblmg_i3gd4k.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/testimonio_3_cm4qzk_dtwqf6.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Testimonio_4_bvpuoh_blaq4c.jpg"
  ];

  // URL del video de testimonio
  const videoUrl = "https://res.cloudinary.com/dhzqf1itl/video/upload/v1739325181/Video_de_WhatsApp_2025-02-08_a_las_18.55.36_2d2c4649_jwn0wm_ke4cva.mp4";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonialImages.length]);

  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Maestra Gregoria, Quiero Consultar Con usted';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-black w-full py-8 sm:py-12 md:py-16" id="testimonios">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
            TESTIMONIOS
          </h2>
          <p className="text-base sm:text-lg text-gray-400 px-4">
            Conoce las experiencias de personas que han transformado sus vidas
          </p>
        </div>

        {/* Contenedor de Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Video */}
          <div className="bg-black rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full" style={{ paddingTop: '100%' }}>
              <video 
                className="absolute inset-0 w-full h-full object-contain"
                controls
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                playsInline
              >
                <source src={videoUrl} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>

          {/* Carrusel de Imágenes */}
          <div className="bg-black rounded-lg overflow-hidden shadow-xl">
            <div className="relative w-full" style={{ paddingTop: '100%' }}>
              <div className="absolute inset-0">
                {testimonialImages.map((image, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={image}
                      alt={`Testimonio ${index + 1}`}
                      draggable="false"
                      className={`w-full h-full object-contain transition-opacity duration-500 ${
                        currentTestimonial === index ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        WebkitUserDrag: 'none', 
                        userSelect: 'none',
                        pointerEvents: 'none'
                      }}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                ))}

                {/* Controles del Carrusel */}
                <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 sm:px-4">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => 
                      (prev - 1 + testimonialImages.length) % testimonialImages.length
                    )}
                    className="bg-black/60 p-1 sm:p-2 text-white rounded-lg hover:bg-black/80 transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => 
                      (prev + 1) % testimonialImages.length
                    )}
                    className="bg-black/60 p-1 sm:p-2 text-white rounded-lg hover:bg-black/80 transition-colors"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </div>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {testimonialImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`h-2 transition-all rounded-full ${
                        currentTestimonial === index 
                          ? 'w-8 sm:w-10 bg-[#FFD700]' 
                          : 'w-2 sm:w-4 bg-white/50'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección CTA y Mensaje Final */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Sección CTA */}
          <div className="bg-[#0a0014] rounded-xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              RECUPERA TU <span className="text-[#FFD700]">FELICIDAD HOY</span>
            </h2>

            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl text-gray-300">
                No sufra más. Le ayudamos a atraer, amarrar, dominar, doblegar, separar o unir 
                a la persona que desea.
              </p>

              <p className="text-xl sm:text-2xl font-bold text-[#FFD700]">
                Haz que tu pareja regrese a ti y recupera el amor que nunca debió irse.
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 
                bg-green-600 hover:bg-green-700 text-white 
                text-base sm:text-lg font-semibold 
                px-6 sm:px-8 py-3 sm:py-4 rounded-lg 
                transition-colors w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONSULTA GRATIS
            </button>
          </div>

          {/* Mensaje Final */}
          <div className="bg-[#0a0014] rounded-xl p-6 sm:p-8 md:p-12 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-light tracking-wide text-[#FFD700]">
              No dejes que el amor de tu vida se aleje
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 italic text-gray-300">
              Aún hay esperanza para recuperar su amor y estar juntos de nuevo
            </p>
            <button 
              onClick={handleWhatsAppClick}
              aria-label="Iniciar consulta gratuita inmediata"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest 
                text-red-500 cursor-pointer uppercase
                hover:scale-105 transition-transform duration-300
                px-6 sm:px-8 md:px-10 py-6 sm:py-8 rounded-lg 
                border-4 border-red-500
                focus:outline-none focus:ring-4 focus:ring-red-600
                hover:bg-red-600/10
                animate-pulse shadow-lg
                w-full sm:w-auto"
            >
              ¡Consultanos Y Te Ayudaremos!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;