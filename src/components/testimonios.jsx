import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonialImages = [
    "https://res.cloudinary.com/dprtewqr8/image/upload/v1739060001/testimonio_1_yrauxg.jpg",
    "https://res.cloudinary.com/dprtewqr8/image/upload/v1739060001/Testimonio_2_nfblmg.jpg",
    "https://res.cloudinary.com/dprtewqr8/image/upload/v1739060001/testimonio_3_cm4qzk.jpg",
    "https://res.cloudinary.com/dprtewqr8/image/upload/v1739060002/Testimonio_4_bvpuoh.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '526699201652';
    const message = 'Hola, deseo realizar una consulta';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-black py-8" id="testimonios">
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
              autoPlay
              muted
              loop
            >
              <source src="https://res.cloudinary.com/dprtewqr8/video/upload/v1739060020/Video_de_WhatsApp_2025-02-08_a_las_18.55.36_2d2c4649_jwn0wm.mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Texto debajo del video */}
          <h3 className="text-[#FFD700] text-3xl font-bold text-center mb-4">
            COMUNICATE SIN NINGUN COSTO
          </h3>
          
          <p className="text-white text-center text-lg mb-8">
            No sufra más recupere su felicidad hoy mismo, le ayudamos a atraer, amarrar, dominar, 
            doblegar, separar o unir a la persona que desea. ¡ESTA ES SU OPORTUNIDAD PARA CAMBIAR 
            SU DESTINO Y RECUPERAR SU FELICIDAD! consulte con la MAESTRA CARMEN
          </p>

          <div className="flex justify-center">
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full 
              text-xl font-bold transition-all duration-300 flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              CONSULTA GRATIS
            </button>
          </div>
        </div>

        {/* Sección de Testimonios */}
        <div className="mb-16">
          <h3 className="text-[#FFD700] text-3xl font-bold text-center mb-4">
            Testimonios de nuestros clientes
          </h3>
          
          <p className="text-white text-center text-lg mb-12">
            Conoce aquí la experiencia de nuestros clientes que confiaron en los conocimientos 
            ancestrales y los 15 años de experiencia de la maestra Carmen
          </p>

          {/* Carrusel de Testimonios */}
          <div className="relative w-[380px] mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative">
                {testimonialImages.map((image, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-1000 ${
                      currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                    }`}
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-r-lg text-white hover:bg-black/75 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-l-lg text-white hover:bg-black/75 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Controles del carrusel */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {testimonialImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-red-600 w-8' : 'bg-[#FFD700]'
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
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full 
            text-xl font-bold transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            CONSULTA GRATIS MAESTRA CARMEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;