import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialImages = [
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/testimonio_1_yrauxg_dkfhoj.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/Testimonio_2_nfblmg_i3gd4k.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325180/testimonio_3_cm4qzk_dtwqf6.jpg",
    "https://res.cloudinary.com/dhzqf1itl/image/upload/v1739325181/Testimonio_4_bvpuoh_blaq4c.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Maestra Carmen, Quiero Consultar Con usted';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-black py-16" id="testimonios" role="region" aria-label="Sección de testimonios">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFD700] text-center mb-4">
          TESTIMONIOS
        </h2>
    
        {/* Sección de Video */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="relative w-full" style={{ paddingTop: '90.78%' }}>
            <video 
              className="absolute top-0 left-0 w-full h-full object-contain"
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              playsInline
              aria-label="Video testimonial de clientes satisfechos"
            >
              <source src="https://res.cloudinary.com/dhzqf1itl/video/upload/v1739325181/Video_de_WhatsApp_2025-02-08_a_las_18.55.36_2d2c4649_jwn0wm_ke4cva.mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
    
          {/* Texto debajo del video */}
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mt-6">
            <div 
              className="relative p-8 md:p-12 bg-opacity-80 backdrop-blur-sm"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 100%)',
                backgroundBlendMode: 'overlay'
              }}
            >
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <h3 
                    className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 
                    text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-yellow-500 to-orange-500 
                    uppercase tracking-tight"
                  >
                    Comunícate Sin Costo
                  </h3>
                  <p className="text-2xl text-gray-300 font-medium">
                    Recupera tu Felicidad Hoy
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-2xl">
                    <p className="text-gray-100 text-lg">
                      No sufra más. Le ayudamos a atraer, amarrar, dominar, doblegar, separar o unir 
                      a la persona que desea. <span className="font-bold text-[#FFD700]">¡ESTA ES SU OPORTUNIDAD 
                      PARA CAMBIAR SU DESTINO Y RECUPERAR SU FELICIDAD!</span> Consulte con la MAESTRA CARMEN
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  aria-label="Iniciar consulta gratuita por WhatsApp"
                  name="testimonial-consultation"
                  className="bg-green-600 hover:bg-green-700 text-white 
                  px-10 py-4 rounded-full text-xl font-bold 
                  transition-all duration-300 
                  flex items-center gap-4 mx-auto
                  hover:scale-105 hover:shadow-2xl 
                  active:scale-95 
                  transform
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-7 h-7 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  CONSULTA GRATIS
                </button>
              </div>
            </div>
          </div>

          {/* Sección de Testimonios */}
          <div className="mb-16 mt-12">
            <h3 className="text-[#FFD700] text-3xl font-bold text-center mb-4">
              Testimonios de nuestros clientes
            </h3>
            
            <p className="text-white text-center text-lg mb-12">
              Conoce aquí la experiencia de nuestros clientes que confiaron en los conocimientos 
              ancestrales y los 15 años de experiencia de la maestra Carmen
            </p>

            {/* Carrusel de Testimonios */}
            <div 
              className="relative w-[380px] mx-auto"
              role="region"
              aria-roledescription="carrusel"
              aria-label="Galería de testimonios"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="relative">
                  {testimonialImages.map((image, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-1000 ${
                        currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                      role="tabpanel"
                      aria-label={`Testimonio ${index + 1} de ${testimonialImages.length}`}
                      aria-hidden={currentTestimonial !== index}
                    >
                      <img
                        src={image}
                        alt={`Testimonio ${index + 1}`}
                        className="w-[380px] h-[650px] object-scale-down"
                        style={{
                          backgroundColor: '#E5E5E5'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones de navegación */}
              <button
  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length)}
  aria-label="Ver testimonio anterior"
  name="prev-testimonial"
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-4 rounded-r-lg text-white hover:bg-black/75 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700] min-w-[48px] min-h-[48px] touch-manipulation"
>
  <ChevronLeft size={32} aria-hidden="true" />
</button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length)}
                aria-label="Ver siguiente testimonio"
                name="next-testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-l-lg text-white hover:bg-black/75 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>

              {/* Indicadores del carrusel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4" role="tablist">
  {testimonialImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentTestimonial(index)}
      aria-label={`Ver testimonio ${index + 1} de ${testimonialImages.length}`}
      name={`testimonial-indicator-${index + 1}`}
      aria-selected={currentTestimonial === index}
      role="tab"
      className={`w-12 h-12 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] m-2 ${
        currentTestimonial === index 
          ? 'bg-red-600 w-16' 
          : 'bg-[#FFD700] hover:bg-[#FFD700]/80'
      }`}
    />
  ))}
</div>
            </div>
          </div>
          {/* Sección Final */}
          <div className="text-center">
            <h3 className="text-[#FFD700] text-3xl font-bold mb-2">
              SI HAS LLEGADO HASTA AQUÍ ES POR ALGO
            </h3>
            <p className="text-red-600 text-2xl font-bold mb-8">
              CONSULTA YA SIN COSTO
            </p>
            <button
              onClick={handleWhatsAppClick}
              aria-label="Iniciar consulta gratuita por WhatsApp"
              name="final-consultation"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full 
              text-xl font-bold transition-all duration-300 flex items-center gap-3 mx-auto
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 fill-current"
                aria-hidden="true"
                role="img"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONSULTA GRATIS MAESTRA CARMEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;